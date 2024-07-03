import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gestor-archivos',
  templateUrl: './gestor-archivos.component.html',
  styleUrl: './gestor-archivos.component.css'
})
export class GestorArchivosComponent implements OnInit {
  contratoId: any;
  selectedRowId: any;
  isFileSelected: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.parent?.params.subscribe(params => {
      this.contratoId = params['id'];
    });
  }

  addFile() {

  }

  deleteFile() {

  }


  onRowSelect(event: any) {
    this.isFileSelected = true;
    this.selectedRowId = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isFileSelected = false;
  }
}

