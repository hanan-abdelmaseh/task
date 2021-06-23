import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

const routes: Routes = [
{path:'post', component:PostComponent},
{path:'add', component:AddComponent},
{path:'view', component:ViewComponent},
{path :'' , redirectTo:'post' , pathMatch:'full'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
