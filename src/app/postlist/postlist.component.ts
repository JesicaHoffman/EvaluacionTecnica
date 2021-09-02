import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  providers: [PostService]
})
export class PostlistComponent implements OnInit {
  posts:any=[]

  
  constructor(
    public postservice:PostService
  ) { 
     this.postservice.getList()
    .subscribe(data => {
      console.log(data)
      this.posts=data
    })
  }

  ngOnInit(): void {
  }

}
