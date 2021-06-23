import { MangeService } from './../mange.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 id:number=0;
 body:string='';
 title:string=''
  postInput:string ='';
  inputValue:string=''
  constructor(private router: Router, private mangeService:MangeService) { }

  ngOnInit() {

   }

   newPost(){
    console.log(this.mangeService.addNewPost(this.inputValue))
   }




  back(){

    this.router.navigate(['post']);
  }


}
