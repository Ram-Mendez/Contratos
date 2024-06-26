import {Component, OnInit} from '@angular/core';
import {AddUserService} from "../services/add-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import { RolesService } from "../../roles/services/roles.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  id: any;
  user: any;
  roles: any[] = [];

  constructor(private userService: AddUserService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private rolesService: RolesService) {
  }

  editUserForm = this.fb.group({
    name: ['', [Validators.required,]],
    lastName: ['', [Validators.required,]],
    dni: ['', [Validators.required,]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required,]],
    roles: [[], [Validators.required,]],
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getUserById(this.id).subscribe(user => {
        this.user = user;
        if (user) {
          this.editUserForm.patchValue({
            name: this.user.name,
            lastName: this.user.lastName,
            dni: this.user.dni,
            email: this.user.email,
            phone: this.user.phone,
            roles: this.user.roles.map((role: any) => role.id) // Asume que los roles son un array de objetos con un campo id
          });
        }
      });
      this.rolesService.getRoles().subscribe(
        listaRoles => {
          this.roles = listaRoles.map(role => ({ label: role.nombre, value: role.id }));
        },
        err => {
        }
      );
    });
  }

  updateUser() {
    if (this.editUserForm.valid) {
      this.userService.updateUser(this.id, this.editUserForm.value).subscribe(() => {
        this.messageService.add({severity: 'success', summary: 'Updating User', icon: 'pi pi-spin pi-spinner'});
        setTimeout(() => {
          this.router.navigate(['/administration/list-users']);
        }, 1500);
      });
    }
  }
}
