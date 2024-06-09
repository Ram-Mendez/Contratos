import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdministratorService} from "../services/administrator.service";
import {FormBuilder, Validators} from "@angular/forms";
import {RolesService} from "../../roles/services/roles.service";
import {
  EntidadAutoridadService
} from "../../../../../../../main/components/entidadAutoridad/service/entidad-autoridad.service";
import {ContratoService} from "../../../../../../../main/components/contratosAll/service/contrato.service";
import {AddUserService} from "../../users/services/add-user.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-administrator',
  templateUrl: './edit-administrator.component.html',
  styleUrls: ['./edit-administrator.component.css']
})
export class EditAdministratorComponent implements OnInit {
  id: any;
  administrator: any;
  users: any;

  constructor(private contratoService: ContratoService,
              private autoridadService: EntidadAutoridadService,
              private fb: FormBuilder, private messageService: MessageService,
              private route: ActivatedRoute, private administratorService: AdministratorService,
              private router: Router, private userService: AddUserService
  ) {
  }

  editAdministratorForm = this.fb.group({
    contrato: ['', Validators.required],
    autoridad: ['', Validators.required],
    user: ['', Validators.required],
  });

  contratosOptions = [];
  autoridadOptions = [];
  userOptions = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getContratos();
      this.getAutoridad();
      this.getUsers();

      this.administratorService.getAdministratorById(this.id).subscribe(administrator => {
        this.administrator = administrator;
        console.log(this.administrator, "obtiene todos los datos pertinentes");

        if (administrator) {
          // Ensure the IDs match the expected types
          const userId = this.administrator.user.id.toString();
          this.editAdministratorForm.patchValue({
            autoridad: this.administrator.autoridad.id,
            contrato: this.administrator.contratos.id, // Assuming there's only one contract
            user: userId
          });
          console.log(this.editAdministratorForm.value);
        }
      });
    });
  }

  getContratos() {
    this.contratoService.getContratos().subscribe(
      (contratos: any) => {
        this.contratosOptions = contratos.map((contrato: any) => ({label: contrato.name, value: contrato.id}));
      },
      err => {
        console.log(err);
      }
    );
  }

  getAutoridad() {
    this.autoridadService.getEntidadesAutoridades().subscribe(
      (autoridades: any) => {
        this.autoridadOptions = autoridades.map((autoridad: any) => ({label: autoridad.name, value: autoridad.id}));
      },
      err => {
        console.log(err);
      }
    );
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: any) => {
      console.log('Fetched users:', users);
      this.userOptions = users.map((user: any) => ({
        label: user.name,
        value: user.id.toString()
      }));
      console.log('User options:', this.userOptions);
    }, err => {
      console.log('Error fetching users:', err);
    });
  }

  updateAdministrator() {
    if (this.editAdministratorForm.valid) {
      this.administratorService.updateAdministrator(this.id, this.editAdministratorForm.value).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Updating Administrator', icon: 'pi pi-spin pi-spinner'});
          setTimeout(() => {
            this.router.navigate(['/administration/list-administrators']);
          }, 1500);
        },
        err => {
          console.log(err);
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Failed to update administrator!'});
        });
    }
  }
}
