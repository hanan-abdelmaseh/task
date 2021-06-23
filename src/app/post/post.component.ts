import { MangeService } from './../mange.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postsData:any = [];
  constructor(private mangeService:MangeService  , private router: Router) {

  }


  ngOnInit() {
   this.mangeService.getData().subscribe(data=>{
 this.postsData =data;
 console.log(this.postsData)

   });
  }

add(){
    this.router.navigate(['add']);
}
viewPage(){
  this.router.navigate(['view']);
}

}
