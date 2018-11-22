//import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.services';

/*@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }
  */

 import {Component,  OnInit } from '@angular/core';

 /**
  * @title Basic expansion panel
  */
 @Component({
   selector: 'app-post-create',
   templateUrl: './post-create.component.html',
   styleUrls: ['./post-create.component.css'],
 })
 //export class PostCreateComponent {
   //panelOpenState = false;
 //}

 export class PostCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.Name, form.value.Number).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



 }

}