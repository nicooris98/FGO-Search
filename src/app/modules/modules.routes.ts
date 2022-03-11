import { Route, RouterModule, Routes } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { HomeMainComponent } from "src/core/lib/components/home/home-main/home-main.component"

const routes: Routes = [
  {
    path: "",
    component: HomeMainComponent,
    children: [
      { path: "search", loadChildren: () => import("../modules/search/search.module").then(m => m.SearchModule) },
      { path: "**", redirectTo: "search" }
    ],
  },
]

export const ModuleRoutingModule: ModuleWithProviders<Route> = RouterModule.forChild(routes)
