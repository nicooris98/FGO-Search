import {MenuItem} from 'primeng/api';

export const sidebarMenu: Array<MenuItem> = [
  {
    label: 'Search',
    icon: 'pi pi-fw pi-file',
    routerLink: ['/search'],
    items: [
      { label: 'Servants', routerLink: ['/search/servants'] },
    ],
  },
];
