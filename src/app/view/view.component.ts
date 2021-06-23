import { MangeService } from './../mange.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
newpostdata :any=[];
  constructor(private mangeService:MangeService,private router: Router) { }


  ngOnInit() {
    this.mangeService.getPost().subscribe(mypost=>{
  this.newpostdata =mypost;
  console.log(this.newpostdata)
    });
   }
   goHome(){
    this.router.navigate(['post']);
   }
}
