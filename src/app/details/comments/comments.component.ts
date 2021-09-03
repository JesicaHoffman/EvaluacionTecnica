import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/post.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [PostService]
})
export class CommentsComponent implements OnInit {
   comments:any=[]
  @Input() fecha1:any
  @Output() fechaActual:EventEmitter<any>;
  
  
   
  constructor(
    public postservice:PostService,
    private activatedRoute: ActivatedRoute
  ) { 
     this.fechaActual= new EventEmitter();
  }

  ngOnInit(): void {
    
    const id= this.activatedRoute.snapshot.paramMap.get("id")
    

    this.postservice.getCommentsById(id)
    .subscribe(data => {
      console.log(data)
      this.comments=data
    })
  }

  getDate(){
      this.fechaActual.emit(this.fecha1)
  }

}
