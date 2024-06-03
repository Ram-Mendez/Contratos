import {Component} from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
  data: TreeNode[] = [
    {
      label: 'Authorities ',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Add Authority', data: {path: '/administration/create-authority', icon: 'pi pi-plus'}, expanded: true},
        {label: 'List Authorities', data: {path: '/administration/list-authorities', icon: 'pi pi-list'}, expanded: true},
      ]
    },
    {
      label: 'Contractors',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Add Contractor', data: {path: '/administration/create-contractor', icon: 'pi pi-briefcase '}, expanded: true},
        {label: 'List Contractors', data: {path: '/administration/list-contractors', icon: 'pi pi-list'}, expanded: true},
      ]
    },
    {
      label: 'Users',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Add User', data: {path: '/administration/create-user', icon: 'pi pi-user-plus'}, expanded: true},
        {label: 'List Users', data: {path: '/administration/list-users', icon: 'pi pi-users'}, expanded: true},
      ]
    },
    {
      label: 'Roles',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Create Role', data: {path: '/administration/create-role', icon: 'pi pi-plus'}, expanded: true},
        {label: 'List Roles', data: {path: '/administration/list-roles', icon: 'pi pi-list'}, expanded: true},
      ]
    },
    {
      label: 'Administrators',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {label: 'Designate Administrator', data: {path: '/administration/create-administrator', icon: 'pi pi-user-edit'}, expanded: true},
        {label: 'List Administrators', data: {path: '/administration/list-administrator', icon: 'pi pi-list'}, expanded: true},
      ]
    }

  ];
}

