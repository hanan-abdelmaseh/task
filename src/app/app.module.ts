import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { MangeService } from './mange.service';
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    PostComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [MangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
