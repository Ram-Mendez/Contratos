import { Component } from '@angular/core';
import { TreeNode } from "primeng/api";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
  data: TreeNode[] = [
    {
      label: 'Authority',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        { label: 'Add Authority', data: { path: '/administration/create-authority', icon: 'pi pi-plus' }, expanded: true },
        { label: 'List Authority', data: { path: '/administration/list-authorities', icon: 'pi pi-list' }, expanded: true },
      ]
    },
    {
      label: 'Users',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        { label: 'Add User', data: { path: '/administration/create-user', icon: 'pi pi-user-plus' }, expanded: true },
        { label: 'List Users', data: { path: '/administration/list-users', icon: 'pi pi-users' }, expanded: true },
      ]
    },
    {
      label: 'Roles',
      selectable: false,
      expanded: true,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        { label: 'Create Role', data: { path: '/administration/create-role', icon: 'pi pi-plus' }, expanded: true },
        { label: 'List Roles', data: { path: '/administration/list-roles', icon: 'pi pi-list' }, expanded: true },
      ]
    },
  ];

}

