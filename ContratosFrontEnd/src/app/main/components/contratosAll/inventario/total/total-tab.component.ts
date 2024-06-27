import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {NodeService} from "../../service/node.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-total-tab',
  templateUrl: './total-tab.component.html',
  styleUrl: './total-tab.component.css'
})
export class TotalTabComponent implements OnInit, OnDestroy {
  contratoId: any;
  routeUnsubscribe = new Subject<void>();
  nodeId: any;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private nodeService: NodeService) {
  }

  ngOnInit() {
    this.route.parent?.parent?.params.pipe(
      takeUntil(this.routeUnsubscribe)
    ).subscribe(params => {
      this.contratoId = params['id'];
    });

    this.nodeService.selectedNode$.pipe(
      takeUntil(this.routeUnsubscribe)
    ).subscribe((node: any) => {

      this.nodeId = node.id;

      this.nodeService.getTotalAmounts(this.nodeId).subscribe((node: any) => {
        this.inventoryForm.patchValue(
          node
        );
      })
    })

    this.inventoryForm.get('quantity')?.disable();
    this.inventoryForm.get('price')?.disable();
    this.inventoryForm.get('totalInclVat')?.disable();
  }

  inventoryForm = this.fb.group({
    quantity: [''],
    price: [''],
    totalInclVat: [''],
  });

  ngOnDestroy() {
    this.routeUnsubscribe.next();
    this.routeUnsubscribe.complete();
  }

}
