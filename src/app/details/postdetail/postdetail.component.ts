import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  providers: [PostService]
})
export class PostdetailComponent implements OnInit {

  post:any;

  constructor(
    public postservice:PostService,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {

    const id= this.activatedRoute.snapshot.paramMap.get("id")

    this.postservice.getPostById(id)
    .subscribe(data => {
      console.log(data)
      this.post=data
    })
  }

}
