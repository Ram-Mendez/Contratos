import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, Subscription, takeUntil} from "rxjs";
import {NodeService} from "../../service/node.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-inventory-amounts',
  templateUrl: './inventory-amounts.component.html',
  styleUrl: './inventory-amounts.component.css'
})
export class InventoryAmounts implements OnInit, OnDestroy {
  contratoId: any;
  nodeId: any;
  routeUnsubscribe = new Subject<void>();

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder, private nodeService: NodeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.nodeService.selectedNode$.pipe(
      takeUntil(this.routeUnsubscribe)
    ).subscribe((node: any) => {

      this.nodeId = node.id;
      this.inventoryForm.patchValue(
        node
      );
    });

    this.route.parent?.parent?.params.pipe(
      takeUntil(this.routeUnsubscribe)
    ).subscribe(params => {
      this.contratoId = params['id'];
    })
    this.inventoryForm.get('totalExcVat')?.disable();
    this.inventoryForm.get('totalInclVat')?.disable();
    this.inventoryForm.get('vat')?.disable();
  }


  inventoryForm = this.fb.group({
    description: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
    totalExcVat: ['',],
    totalInclVat: [''],
    vat: [''],
    vatPercentage: ['', Validators.required],
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
          this.router.navigate([`/gestiones/${this.contratoId}/inventario/detalles`]);
        });
    }
  }


  ngOnDestroy() {

    this.routeUnsubscribe.next();
    this.routeUnsubscribe.complete();

  }
}
