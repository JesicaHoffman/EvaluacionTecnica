import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service'; 

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [PostService]
})
export class CommentsComponent implements OnInit {
   comments:any=[]

   
  constructor(
    public postservice:PostService
  ) { 
   
  }

  ngOnInit(): void {
  }

}
