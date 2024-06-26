import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NodeService} from "../../service/node.service";

@Component({
  selector: 'app-inventory-amounts',
  templateUrl: './inventory-amounts.component.html',
  styleUrl: './inventory-amounts.component.css'
})
export class InventoryAmounts implements OnInit, OnDestroy {

  id: any;
  unsubscribe: Subscription | undefined;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
              private nodeService: NodeService) {
  }

  ngOnInit() {
    this.unsubscribe = this.nodeService.selectedNode$.subscribe((node: any) => {
      this.inventoryForm.patchValue(
        node
      );
    })
    this.getContratoId();
  }

  getContratoId() {
    this.id = this.nodeService.contratoId$.subscribe((contratoId: any) => {
      this.id = contratoId;
    });

  }

  ngOnDestroy() {
    this.unsubscribe?.unsubscribe();
  }

  inventoryForm = this.fb.group({
    description: [''],
    quantity: [''],
    price: [''],
    totalExcVat: [''],
    totalInclVat: [''],
    vat: [''],
    vatPercentage: [''],

  });


  updateInventory() {
    this.nodeService.updateNode(this.id, this.inventoryForm.value)
      .subscribe(() => {
      });
  }
}
