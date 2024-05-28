import {Component, OnInit} from '@angular/core';
import {AddUserService} from "../services/add-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  id: any;
  user: any;


  constructor(private userService: AddUserService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
  }

  editUserForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    lastName: ['', [Validators.required, Validators.nullValidator]],
    dni: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.nullValidator, Validators.email]],
    phone: ['', [Validators.required, Validators.nullValidator]],
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
          });
        }
      });
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

