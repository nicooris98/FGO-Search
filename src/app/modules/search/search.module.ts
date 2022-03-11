import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from 'src/core/lib/components/home/home.module';
import { SharedModule } from 'src/core/lib/components/shared.module';
import { RoutingModule } from './search.routes';
import { ServantsComponent } from './servants/servants.component';


@NgModule({
  declarations: [
    ServantsComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    RouterModule,
    RoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class SearchModule {}