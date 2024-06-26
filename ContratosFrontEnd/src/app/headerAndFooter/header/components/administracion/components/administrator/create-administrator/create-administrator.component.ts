import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContratoService} from "../../../../../../../main/components/contratosAll/service/contrato.service";
import {
  EntidadesAutoridadComponent
} from "../../../../../../../main/components/entidadAutoridad/components/entidades-autoridad/entidades-autoridad.component";
import {
  EntidadAutoridadService
} from "../../../../../../../main/components/entidadAutoridad/service/entidad-autoridad.service";
import {RolesService} from "../../roles/services/roles.service";
import {AdministratorService} from "../services/administrator.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {UserService} from "../../../../../../../login/services/user.service";
import {AddUserService} from "../../users/services/add-user.service";

@Component({
  selector: 'app-create-administrator',
  templateUrl: './create-administrator.component.html',
  styleUrl: './create-administrator.component.css'
})
export class CreateAdministratorComponent implements OnInit {
   users: any;

  constructor(private fb: FormBuilder,
              private contratoService: ContratoService,
              private authorityService: EntidadAutoridadService,
              private userService: AddUserService,
              private administratorService: AdministratorService,
              private router: Router,
              private messageService: MessageService,) {
  }

  ngOnInit() {
    this.contratoService.getContratos().subscribe((contratos: any) => {
      this.contratosOptions = contratos.map((contrato: any) => ({
        label: contrato.name,
        value: contrato.id.toString()
      }));
    });

    this.authorityService.getEntidadesAutoridades().subscribe((authorities: any) => {
      this.autoridadOptions = authorities.map((authority: any) => ({
        label: authority.name,
        value: authority.id.toString()
      }));
    });
    this.getUsers();
  }

  createAdministratorForm = this.fb.group({
    contrato: ['', [Validators.required]],
    autoridad: ['', [Validators.required]],
    user: ['', [Validators.required]]
  });

  contratosOptions = [];
  autoridadOptions = [];

  crearAdministrador() {
    if (this.createAdministratorForm.valid) {
      const formValues = this.createAdministratorForm.value;
      this.administratorService.createAdministrator(formValues).subscribe((response: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creating Administrator',
          icon: 'pi pi-spin pi-spinner'
        });
        setTimeout(() => {
          this.router.navigate(['/administration/list-administrators']);

        }, 1500);
      });
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (users: any) => {
        this.users = users.map((user: any) => ({
          label: user.name,
          value: user.id.toString()
        }));
      }
    );

  }

}
