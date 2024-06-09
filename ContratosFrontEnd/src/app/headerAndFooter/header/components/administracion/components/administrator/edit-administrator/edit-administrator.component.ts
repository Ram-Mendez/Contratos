import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdministratorService} from "../services/administrator.service";
import {FormBuilder, Validators} from "@angular/forms";
import {RolesService} from "../../roles/services/roles.service";
import {
  EntidadAutoridadService
} from "../../../../../../../main/components/entidadAutoridad/service/entidad-autoridad.service";
import {ContratoService} from "../../../../../../../main/components/contratosAll/service/contrato.service";

@Component({
  selector: 'app-edit-administrator',
  templateUrl: './edit-administrator.component.html',
  styleUrl: './edit-administrator.component.css'
})
export class EditAdministratorComponent implements OnInit {
  id: any;
  administrator: any;

  constructor(private contratoService: ContratoService,
              private autoridadService: EntidadAutoridadService,
              private fb: FormBuilder, private rolesService: RolesService,
              private route: ActivatedRoute, private administratorService: AdministratorService,
  ) {
  }

  editAdministratorForm = this.fb.group({
    contrato: ['', Validators.required],
    autoridad: ['', Validators.required],
    roles: [[], Validators.required],
  });

  contratosOptions = [];
  autoridadOptions = [];
  roles: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getContratos();
      this.getAutoridad();

      this.administratorService.getAdministratorById(this.id).subscribe(administrator => {
        this.administrator = administrator;
        console.log(this.administrator, "hasta aqui esta bien");

        if (administrator) {
          this.editAdministratorForm.patchValue({
            autoridad: this.administrator.autoridad.id,
            contrato: this.administrator.contratos.id,// Asumiendo que solo hay un contrato
            roles: this.administrator.roles.map((role: any) => role.id)
          });
        }
      });

      this.rolesService.getRoles().subscribe(
        listaRoles => {
          this.roles = listaRoles.map(role => ({label: role.nombre, value: role.id}));
        },
        err => {
          console.log(err);
        }
      );
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


  updateAdministrator() {

  }
}
