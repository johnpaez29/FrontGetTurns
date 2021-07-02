import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetturnsComponent } from './getturns/getturns.component';

const routes: Routes = [
  { path: 'generateTurn', component: GetturnsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
