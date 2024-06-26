import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NodeService} from "../../service/node.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-inventory-amounts',
  templateUrl: './inventory-amounts.component.html',
  styleUrl: './inventory-amounts.component.css'
})
export class InventoryAmounts implements OnInit, OnDestroy {

  nodeId: any;
  unsubscribe: Subscription | undefined;

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder, private nodeService: NodeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.unsubscribe = this.nodeService.selectedNode$.subscribe((node: any) => {
      this.inventoryForm.patchValue(
        node
      );
    })
    this.nodeId = this.nodeService.nodeId$.subscribe((nodeId: any) => {
      this.nodeId = nodeId;
      console.log(" tengo el id del nodo", this.nodeId);
    });
    this.inventoryForm.get('totalExcVat')?.disable();
    this.inventoryForm.get('totalInclVat')?.disable();
    this.inventoryForm.get('vat')?.disable();
  }


  inventoryForm = this.fb.group({
    description: [''],
    quantity: [''],
    price: [''],
    totalExcVat: ['',],
    totalInclVat: [''],
    vat: [''],
    vatPercentage: [''],
  });

  updateInventory() {
    if (this.inventoryForm.valid) {
      this.nodeService.updateNode(this.nodeId, this.inventoryForm.value)
        .subscribe((result) => {
          console.log(result, "resultado de la actualizacion del inventario ");
          this.messageService.add({
            severity: 'success',
            summary: 'Updating Inventory',
            icon: 'pi pi-spin pi-spinner'
          });
          this.inventoryForm.reset();
        });
    }
  }


  ngOnDestroy() {
    this.unsubscribe?.unsubscribe();
  }
}
