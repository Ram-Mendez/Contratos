import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RolesService} from "../services/roles.service";

@Component({
  selector: 'app-edit-roles-rights',
  templateUrl: './edit-roles-rights.component.html',
  styleUrl: './edit-roles-rights.component.css'
})
export class EditRolesRightsComponent implements OnInit {
  id: any;
  role: any;

  constructor(private route: ActivatedRoute,
              private rolesService: RolesService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private router: Router) {
  }

  editRoleForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.nullValidator]],
    description: ['', [Validators.required, Validators.nullValidator]],
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.rolesService.getRole(this.id).subscribe({
          next: (role) => {
            this.role = role;
            if (role) {
              this.editRoleForm.patchValue({
                nombre: this.role.nombre,
                description: this.role.description,
              });
            }
          },
        });
      }
    });
  }

  editRole() {
    if (this.editRoleForm.valid) {
      this.rolesService.updateRole(this.id, this.editRoleForm.value).subscribe(() => {
        this.messageService.add({severity: 'success', summary: 'Updating Role', icon: 'pi pi-spin pi-spinner'});
        setTimeout(() => {
          this.router.navigate(['/administration/list-roles']);
        }, 1500);
      });
    }

  }
}
