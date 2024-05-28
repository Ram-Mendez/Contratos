import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RolesService} from "../services/roles.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-create-roles-rights',
  templateUrl: './create-roles-rights.component.html',
  styleUrls: ['./create-roles-rights.component.css']
})
export class CreateRolesRightsComponent {
  constructor(
    private fb: FormBuilder,
    private rolesService: RolesService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  createRoleForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.nullValidator]],
    description: ['', [Validators.required, Validators.nullValidator]],
  });

  addRole() {
    if (this.createRoleForm.valid) {
      this.rolesService.createRole(this.createRoleForm.value).subscribe(
        (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Creating Role',
            icon: 'pi pi-spin pi-spinner',
          });
          setTimeout(() => {

            this.router.navigate(['/administration/list-roles']);
          }, 1500);
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create role',
            icon: 'pi pi-spin pi-spinner'
          });
        }
      );
    }
  }
}
