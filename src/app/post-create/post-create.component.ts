import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PostService } from '../services/post.services';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  // Calling the service component
  constructor(private service: PostService) { }

  onAddPost(form: NgForm) {
    
    // Submitting and storing values
    this.service.addPost(form.value.fname, form.value.sname, form.value.number, form.value.occupation, form.value.message).subscribe();
    // Stores and pushes values
    console.log(form.value);
    // Resets the form for new user
    form.resetForm();
  }

  ngOnInit() {

  }

}