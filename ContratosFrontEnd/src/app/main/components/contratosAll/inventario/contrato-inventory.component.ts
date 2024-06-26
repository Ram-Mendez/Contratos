import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ConfirmationService, Message, MessageService, TreeNode, TreeTableNode} from 'primeng/api';
import {NodeService} from '../service/node.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-contrato-inventory',
  templateUrl: './contrato-inventory.component.html',
  styleUrls: ['./contrato-inventory.component.css']
})
export class ContratoInventoryComponent implements OnInit, OnDestroy {
  files: TreeNode[] = [];
  selectedNode!: TreeNode;
  visible: boolean = false;
  description = '';
  unsubscribe: Subscription | undefined;
  id: any;

  constructor(public nodeService: NodeService, private route: ActivatedRoute, private router: Router,
              private messageService: MessageService, private confirmationService: ConfirmationService) {
  }



  ngOnInit() {
    this.unsubscribe = this.route.parent?.params.subscribe(params => {
      this.id = params['id'];

      this.getNodes();
    });
  }


  onNodeSelect(event: any) {
    console.log('Node selected:', this.selectedNode);
    this.nodeService.selectedNode$.next(this.selectedNode.data);
    this.nodeService.contratoId$.next(this.selectedNode.data.contrato.id);
  }

  mostrarDialogo() {
    this.visible = true;
  }

  createNode() {
    this.visible = false;
    this.nodeService.createNode(this.id, {
      parent: this.selectedNode?.data.id,
      description: this.description
    })
      .subscribe(() => {
        this.messageService.add({severity: 'success', summary: 'Creating Node', icon: 'pi pi-spin pi-spinner'});
        this.getNodes();
      });
  }

  getNodes(parentId?: any) {
    this.nodeService.getNodes(this.id, parentId)
      .subscribe((nodes: any) => {
        console.log('Nodes:', nodes);
        if (!parentId) {
          this.files = this.mapNodes(nodes);
        } else {
          const children = this.mapNodes(nodes);
          this.addChildrenToNode(parentId, children, this.files);
        }
        this.resetNodeSelection();
      });
  }

  addChildrenToNode(parentId: number, children: any[], nodes: TreeNode[]): void {
    for (let node of nodes) {
      if (node.data.id === parentId) {
        node.children = children;
        return;
      }
      if (node.children) {
        this.addChildrenToNode(parentId, children, node.children);
      }
    }
  }

  onNodeExpand(event: any) {
    const node = event.node;
    console.log('Expanding node:', node);
    this.getNodes(node.data.id);
  }

  mapNodes(nodes: any[]): TreeNode[] {
    return nodes.map(node => {
      return {
        data: {
          ...node
        },
        children: node.children ? this.mapNodes(node.children) : []
      };
    });
  }

  resetNodeSelection() {
    this.selectedNode = {
      data: {
        id: undefined,
        description: ''
      },
      children: []
    };
  }


  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

  deleteNode() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this node? This action is permanent.',
      header: 'Delete Node',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.selectedNode) {
          this.nodeService.deleteNode(this.selectedNode.data.id)
            .subscribe(() => {
              this.messageService.add({severity: 'success', summary: 'Deleting Node', icon: 'pi pi-spin pi-spinner'});
              this.getNodes();


            });
        }
      }
    });
  }


  editNode() {
    if (this.selectedNode) {
      this.router.navigate(['/gestiones', this.id, 'inventario', 'detalles']);
    }
  }
}

