import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AddUserService } from "../services/add-user.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { RolesService } from "../../roles/services/roles.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  createUserForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    lastName: ['', [Validators.required, Validators.nullValidator]],
    dni: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.email, Validators.nullValidator]],
    phone: ['', [Validators.required, Validators.nullValidator]],
    roles: [[], [Validators.required, Validators.nullValidator]]
  });

  roles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private addUserService: AddUserService,
    private router: Router,
    private messageService: MessageService,
    private rolesService: RolesService
  ) {}

  ngOnInit() {
    this.getRoles();
  }

  addUser() {
    if (this.createUserForm.valid) {
      console.log(this.createUserForm.value, "valor del form antes de la peticion http")
      this.addUserService.addUser(this.createUserForm.value).subscribe(
        res => {
          this.messageService.add({
            severity: 'success', summary: 'Creando Usuario',
            icon: 'pi pi-spinner pi-spin'
          });
          setTimeout(() => {
            this.router.navigate(['/administration/list-users']);
          }, 1500);
        },
        err => {
          console.log(err);
          this.messageService.add({
            severity: 'error', summary: 'Error', detail: 'Hubo un problema al crear el usuario.'
          });
        }
      );
    }
  }

  getRoles() {
    this.rolesService.getRoles().subscribe(
      listaRoles => {
        this.roles = listaRoles.map(role => ({ label: role.nombre, value: role.id }));
        console.log(this.roles, "rolessssssssssssss")
      },
      err => {
        console.log(err);
      }
    );
  }
}
