import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {NodeService} from "../../service/node.service";

@Component({
  selector: 'app-total-tab',
  templateUrl: './total-tab.component.html',
  styleUrl: './total-tab.component.css'
})
export class TotalTabComponent implements OnInit {
  contratoId: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private fb: FormBuilder,
              private nodeService: NodeService) {
  }

  ngOnInit() {
    this.route.parent?.parent?.params.subscribe(params => {
      this.contratoId = params['id'];
    });
    // this.nodeService.getTotals(this.contratoId).subscribe((data: any) => {
    //   this.inventoryForm.patchValue(data);
    // })

    this.inventoryForm.get('quantity')?.disable();
    this.inventoryForm.get('price')?.disable();
    this.inventoryForm.get('totalInclVat')?.disable();
  }

  inventoryForm = this.fb.group({
    quantity: [''],
    price: [''],
    totalInclVat: [''],
  });


}
