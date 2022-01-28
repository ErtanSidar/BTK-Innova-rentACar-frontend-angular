import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink:"home"
      },
      {
        label: 'Color',
        icon: 'pi pi-fw pi-slack',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
            routerLink:"color/add"
          },
          {
            separator: true,
          },
          {
            label: 'Update',
            icon: 'pi pi-fw pi-upload',
          },
          {
            separator: true,
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          
        ],
      },
      {
        label: 'Brand',
        icon: 'pi pi-fw pi-check-square',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
            routerLink:"brand/add"
          },
          {
            separator: true,
          },
          {
            label: 'Update',
            icon: 'pi pi-fw pi-upload',
          },
          {
            separator: true,
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          }
        ],
      },
      {
        label: 'Segment',
        icon: 'pi pi-fw pi-check-square',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
            routerLink:"segment/add"
          },
          {
            separator: true,
          },
          {
            label: 'Update',
            icon: 'pi pi-fw pi-upload',
          },
          {
            separator: true,
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          }
        ],
      },
      {
        label: 'Promotion',
        icon: 'pi pi-fw pi-check-square',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
            routerLink:"promotion/add"
          },
          {
            separator: true,
          },
          {
            label: 'Update',
            icon: 'pi pi-fw pi-upload',
          },
          {
            separator: true,
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          }
        ],
      },
      {
        label: 'Rentals',
        icon: 'pi pi-fw pi-check-square',
        routerLink:"rentals/getrentals"
      },
      {
        label: 'Car',
        icon: 'pi pi-fw pi-car',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
            routerLink:"car/add"
          },
          {
            separator: true,
          },
          {
            label: 'Update',
            icon: 'pi pi-fw pi-upload',
          },
          {
            separator: true,
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
