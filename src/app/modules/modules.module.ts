import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MessageService } from "primeng/api"
import { ToastModule } from "primeng/toast"
import { ModuleRoutingModule } from "./modules.routes"

import { HomeModule } from "src/core/lib/components/home/home.module"

@NgModule({
  imports: [
    CommonModule,
    ModuleRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ModulesModule { }
