import { CommonModule } from "@angular/common"
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core"
import { RouterModule } from "@angular/router"
import { SharedModule } from "../shared.module"

import { HomeMainComponent } from "./home-main/home-main.component"
import { HomeMenuComponent } from "./home-menu/home-menu.component"
import { HomeTopBarComponent } from "./home-topbar/home-topbar.component"

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeTopBarComponent,
    HomeMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeMainComponent,
    HomeTopBarComponent,
    HomeMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {

}
