import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsaddService } from './../services/commentsadd.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isVisible = false
  buttonName:any
  isloading =false
  getalldata:any
  @Output() footerData = new EventEmitter<boolean>();
  constructor( private router: Router, private route: ActivatedRoute, private service:CommentsaddService){

  }
  OnClick(){
  this.isloading =true
  this.footerData.emit(this.isloading);

  setTimeout(() => {
    this.router.navigate(['details'], { relativeTo: this.route })
      this.isVisible =!this.isVisible
      this.isloading = false
    
  }, 1000);
  this.service.fetchData().subscribe((resonse)=>{
    this.getalldata = resonse
    console.log(this.getalldata);
    
    
  })
   
      
      

    
    

  }
//   ngOnInit(){
// this.getdata()
//   }

  getdata(){
    // this.service.fetchData().subscribe((resonse)=>{
    //   this.getalldata = resonse
    //   console.log(this.getalldata);
      
      
    // })

  }



}
