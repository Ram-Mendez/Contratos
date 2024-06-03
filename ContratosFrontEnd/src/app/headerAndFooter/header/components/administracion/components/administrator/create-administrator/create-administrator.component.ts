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

@Component({
  selector: 'app-create-administrator',
  templateUrl: './create-administrator.component.html',
  styleUrl: './create-administrator.component.css'
})
export class CreateAdministratorComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private contratoService: ContratoService,
              private authorityService: EntidadAutoridadService,
              private rolesService: RolesService,
              private administratorService: AdministratorService) {
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

    this.rolesService.getRoles().subscribe((roles: any) => {
      this.roles = roles.map((role: any) => ({
        label: role.nombre,
        value: role.id.toString()
      }));
    });
  }

  createAdministratorForm = this.fb.group({
    contrato: ['', [Validators.required]],
    autoridad: ['', [Validators.required]],
    roles: ['', [Validators.required]]
  });

  contratosOptions = [];

  autoridadOptions = [];

  roles = [];

  crearAdministrador() {
    if (this.createAdministratorForm.valid) {
      this.administratorService.createAdministrator(this.createAdministratorForm.value).subscribe((response: any) => {
        console.log(response, "Administrador creado correctamente");
      });
    }
  }
}
