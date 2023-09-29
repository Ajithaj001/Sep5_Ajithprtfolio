import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsaddService } from '../services/commentsadd.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  isVisible = false
  buttonName:any
  isloading =false
  currentindex =0
  isExpanded = false;
  panelOpenState = false;
  technicalSkills = [
    {id:'1', skillName: "Angular" , progress : 95 , imagePath:'../assets/angular2.png'},
    {id:'2', skillName: "HTML", progress : 95, imagePath:'../assets/html.png'},
    {id:'3', skillName: "CSS", progress:80, imagePath:'../assets/CSS.png'},
    {id:'4', skillName: "JavaScript", progress: 80,imagePath:'../assets/js.png'},
    {id:'5', skillName: "Bootstrap",progress:75,imagePath:'../assets/bootstrap.png'},
    {id:'6', skillName: "SQL", progress: 65,imagePath:'../assets/sqllogo.png'}
  ]
  projectdetails = [
    {id:"1", projectname:"Yoga teaching platform", description:"worked with the team in designing and developing a dynamic web application for a onine yoga teaching platforn, enhancing user engagement and accessibility. Levetaged html,css,javascrit,Angular,Bootstrap, and material UI to create an intutive and responsive user interface", duration:": January 2023 – May 2023"},
    {id:"2", projectname:"Gym portfolio", description:" Designed and developed a dynamic web application showcasing gym details using html,css,javascript. created an interactive platform that effectively communicated gym offerings, class schedule, trauners profiles, and membership information to potentialclients"}
  ]
  constructor( private router: Router, private route: ActivatedRoute, private service:CommentsaddService){
  

  }
  ngOnInit(){
    setInterval(()=>{
      this.nextSlide()
  
    },10000)
  }
  OnClick(){
  
  this.isloading =true
  

  setTimeout(() => {
    this.router.navigate(['details'], { relativeTo: this.route })
      this.isVisible =!this.isVisible
      this.isloading = false
    
  }, 1000);
 
   
} 


nextSlide(){
  if(this.currentindex < this.projectdetails.length -1){
    this.currentindex ++;
  }
  else{
    this.currentindex = 0
  }
  

}
prevSlide() {
  if (this.currentindex > 0) {
    this.currentindex--;
  } else {
    this.currentindex = this.projectdetails.length - 1;
  }
}   

      


}
