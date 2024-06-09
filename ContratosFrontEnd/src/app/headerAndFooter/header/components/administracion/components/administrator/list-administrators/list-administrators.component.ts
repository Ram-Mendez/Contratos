import { Component, OnInit } from '@angular/core';
import { AdministratorService } from "../services/administrator.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { AddUserService } from "../../users/services/add-user.service";
import { RolesService } from "../../roles/services/roles.service";

@Component({
  selector: 'app-list-administrators',
  templateUrl: './list-administrators.component.html',
  styleUrls: ['./list-administrators.component.css']
})
export class ListAdministratorsComponent implements OnInit {
  users: any;
  isAdminSelected: boolean = false;
  id: any;
  administrators: any[] = [];
  roles: any[] = [];

  constructor(
    private administratorService: AdministratorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private userService: AddUserService,
    private rolesService: RolesService
  ) {}

  ngOnInit() {
    this.getAdministrators();
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users.map((user: any) => ({
        label: user.name,
        value: user.id.toString()
      }));
    });
  }

  getAdministrators() {
    this.administratorService.getAdministrators().subscribe(
      (response: any) => {
        this.administrators = response.map((admin: any) => ({
          ...admin,
          user: admin.user ? { ...admin.user, roles: this.mapRoles(admin.user.roles) } : null
        }));
        console.log(response, "aqui se reciben los administradores");
      },
      error => {
        console.log(error, 'No se ha podido obtener los administradores');
      }
    );
  }

  editAdministrator() {
    this.router.navigate(['/administration/edit-administrador', this.id]);
  }

  deleteAdministrator() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this administrator? This action cannot be undone',
      accept: () => {
        this.administratorService.deleteAdministrator(this.id).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting Administrator',
              icon: 'pi pi-spin pi-spinner',
            });
            this.getAdministrators();
          },
          (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Deleting Administrator',
              detail: 'Error deleting administrator',
              icon: 'pi pi-spin pi-spinner',
            });
          }
        );
      },
    });
  }

  getRoles() {
    this.rolesService.getRoles().subscribe(
      (response: any) => {
        this.roles = response;
        console.log(response, "aqui se obtienen los roles");
      },
      error => {
        console.log(error, 'No se ha podido obtener los roles');
      }
    );
  }

  mapRoles(roles: any[]): string {
    return roles ? roles.map((role: any) => role.nombre).join(', ') : '';
  }

  onRowSelect(event: any) {
    console.log(event);
    this.isAdminSelected = true;
    this.id = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isAdminSelected = false;
  }
}
