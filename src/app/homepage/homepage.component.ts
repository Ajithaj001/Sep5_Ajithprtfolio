import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isVisible = false
  buttonName:any
  isloading =false
  constructor( private router: Router, private route: ActivatedRoute){

  }
  OnClick(){
  this.isloading =true

  setTimeout(() => {
    this.router.navigate(['details'], { relativeTo: this.route })
      this.isVisible =!this.isVisible
      this.isloading = false
    
  }, 1000);
   
      
      

    
    

  }

}
