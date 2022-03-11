import { Route, RouterModule, Routes } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"
import { ServantsComponent } from "./servants/servants.component"

const routes: Routes = [
  { path: "servants", component: ServantsComponent},
  { path: "**", redirectTo: "servants" },
]

export const RoutingModule: ModuleWithProviders<Route> =
  RouterModule.forChild(routes)
