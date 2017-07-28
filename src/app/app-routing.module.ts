import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { D1Component } from './pages/d1/d1.component';
import { D2Component } from './pages/d2/d2.component';
import { D3Component } from './pages/d3/d3.component';
import { D4Component } from './pages/d4/d4.component';

const routes: Routes = [
  { path: '',       component: LandingComponent,    pathMatch: 'full' },
  { path: 'd1',     component: D1Component,    pathMatch: 'full' },
  { path: 'd2',     component: D2Component,    pathMatch: 'full' },
  { path: 'd3',     component: D3Component,    pathMatch: 'full' },
  { path: 'd4',     component: D4Component,    pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class D10RoutingModule { }
