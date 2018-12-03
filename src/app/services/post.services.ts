import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts");
  }

  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }
  // Add name, age (String)
  addPost(fname: string, sname: string, number: string, occupation: string, message: string): Observable<any> {
    const post: Post = { fname: fname, sname: sname, number: number, occupation: occupation, message: message };
    return this.http.post("http://localhost:8081/api/posts", post);
  }
  // Delete anything with string ID and return
  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/" + id);
  }

  // getting information 
  getPost(id: string): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/" + id);
  }
  // Updating 
  updatePost(id: string, fname: string, sname: string, number: string, occupation: string, message: string): Observable<any> {
    const post: Post = { fname: fname, sname: sname, number: number, occupation: occupation, message: message };
    return this.http.put("http://localhost:8081/api/posts/" + id, post);

  }
}