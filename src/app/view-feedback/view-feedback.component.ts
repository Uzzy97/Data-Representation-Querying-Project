import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.services';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  posts: any = [];

  constructor(private ps: PostService) { }

  ngOnInit() {
    //this.posts = this.ps.getPosts();
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }

  onDelete(id: String) {
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
