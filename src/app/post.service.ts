import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  getPostById(id:any){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id)
  }

  getCommentsById(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments/")
  }
}
