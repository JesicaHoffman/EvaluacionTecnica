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
   comments:any;
   commentsFilter:any
   filteredComments:any

   
  @Input() fecha1:any;
  @Input() id:any;
  @Output() fechaActual:EventEmitter<any>;
  
  getDate(){
    this.fechaActual.emit(this.fecha1);
}
  
   constructor(
    public postservice:PostService,
    private activatedRoute: ActivatedRoute
              ) { 
     this.fechaActual= new EventEmitter();
      }

  ngOnInit() {
    
     this.postservice.getComments()
    .subscribe(data => {
      this.comments=data;
      console.log(this.comments)
      
      this.commentsFilter= this.comments.filter((res:any) => {
        if(res.postId == this.id){
        return  res
        }
  
      });

   });
    
   }

 

}
