import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';

@NgModule({
  imports: [
    CardModule,
    SidebarModule,
    MenuModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ImageModule,
  ],
  exports: [
    CardModule,
    RouterModule,
    MenuModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ImageModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {
  constructor() {}
}
