import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilemanagerService} from "../service/filemanager.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-gestor-archivos',
  templateUrl: './gestor-archivos.component.html',
  styleUrl: './gestor-archivos.component.css'
})
export class GestorArchivosComponent implements OnInit {

  contratoId: any;
  isFileSelected?: boolean;
  file: any;
  files!: any[];

  constructor(private confirmationService: ConfirmationService
    , private route: ActivatedRoute, private fileManager: FilemanagerService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.route.parent?.params.subscribe(params => {
      this.contratoId = params['id'];
    });
    this.loadFiles();
  }


  loadFiles() {
    this.fileManager.listFiles(this.contratoId).subscribe(files => {
      this.files = files;
      console.log(files);
    });
  }

  myUploader(event: any) {
    const file = event.files[0];
    const contratoId = this.contratoId;
    this.fileManager.uploadFile(contratoId, file).subscribe(
      response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Uploading file',
          icon: 'pi pi-spin pi-spinner'
        });
        this.loadFiles();
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error uploading file'
        });
      }
    );
  }

  onRowSelect(event: any) {
    this.isFileSelected = true;
    this.file = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isFileSelected = false;
  }

  deleteFile() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this contract? This action is permanent.',
      header: 'Delete Contract',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.fileManager.deleteFile(this.file).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting file',
              icon: 'pi pi-spin pi-spinner'
            });
            this.loadFiles();
          })
      }
    });

  }

  downloadFile(): void {
    this.fileManager.downloadFile(this.file).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'downloadedFile';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}

