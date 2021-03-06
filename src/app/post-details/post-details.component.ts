import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.services';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {


  posts: any = [];

  constructor(private ps: PostService) { }
  // Gets data and saves it
  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }
  // Delete Function Called
  onDelete(id: String) {
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}