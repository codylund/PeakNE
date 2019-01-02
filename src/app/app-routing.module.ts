import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components for routing
import { WelcomeComponent } from './welcome/welcome.component'
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'list', 
    component: ListComponent 
  },
  { 
    path: 'map', 
    component: MapComponent 
  },
  {
    path: "**",
    component: WelcomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
}
