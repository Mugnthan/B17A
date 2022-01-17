import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextpageComponent } from './nextpage/nextpage.component';
import { ProductcardComponent } from './productcard/productcard.component';

const routes: Routes = [  
  {
    path: 'move/:id' , component: NextpageComponent
  },
  {
    path: '', component: ProductcardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
