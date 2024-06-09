import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {RolesService} from "../services/roles.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {AddUserService} from "../../users/services/add-user.service";

@Component({
  selector: 'app-list-roles-rights',
  templateUrl: './list-roles-rights.component.html',
  styleUrl: './list-roles-rights.component.css'
})
export class ListRolesRightsComponent implements OnInit {
  roles: any;
  isRoleSelected: boolean = false;
  id: any;
  users: any;


  constructor(private fb: FormBuilder,
              private rolesService: RolesService,
              private router: Router,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private userService: AddUserService) {
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.rolesService.getRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editRole() {
    this.router.navigate(['/administration/edit-role', this.id]);

  }

  deleteRole() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this user? This action cannot be undone',
      accept: () => {
        this.rolesService.deleteRole(this.id).subscribe(
          (res) => {
            this.getRoles();
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting User',
              icon: 'pi pi-spin pi-spinner',
            });
          },
          (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Deleting User',
              detail: 'Error deleting user',
              icon: 'pi pi-spin pi-spinner',
            });
          }
        );
      },
    });
  }

  getUsersByRol() {
    console.log('Selected Role ID:', this.id); // Log for debugging
    this.userService.getUsersByRole(this.id).subscribe(
      (data) => {
        this.users = data;
        console.log('Users by Role:', this.users); // Debugging log
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onRowSelect(event: any) {
    this.isRoleSelected = true;
    this.id = event.data.id;
    this.getUsersByRol();
  }

  onRowUnselect(event: any) {
    this.isRoleSelected = false;
  }
}
