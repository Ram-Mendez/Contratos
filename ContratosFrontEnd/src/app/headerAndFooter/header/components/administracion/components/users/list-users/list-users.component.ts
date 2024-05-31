import {Component, OnInit} from '@angular/core';
import {AddUserService} from '../services/add-user.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  isUserSelected: boolean = false;
  id: any;

  constructor(
    private userService: AddUserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  mapRoles(listaRoles: any) {
    return listaRoles.map((role: any) => role.nombre).join(', ');
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (listUsers) => {
        this.users = listUsers;
        console.log(listUsers);
      },
      (err) => {
        console.log(err, 'Error fetching users');
      }
    );
  }

  editUser() {
    this.router.navigate(['/administration/edit-user', this.id]);
  }


  deleteUser() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this user? This action cannot be undone',
      accept: () => {
        this.userService.deleteUser(this.id).subscribe(
          (res) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleting User',
              icon: 'pi pi-spin pi-spinner',
            });
            this.getUsers();
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

  onRowSelect(event: any) {
    this.isUserSelected = true;
    this.id = event.data.id;
  }

  onRowUnselect(event: any) {
    this.isUserSelected = false;
  }
}
