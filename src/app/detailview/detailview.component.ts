import { Component } from '@angular/core';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent {


  projectdetails = [
    {id:"1", projectname:"Yoga teaching platform", description:"worked with the team in designing and developing a dynamic web application for a onine yoga teaching platforn, enhancing user engagement and accessibility. Levetaged html,css,javascrit,Angular,Bootstrap, and material UI to create an intutive and responsive user interface", duration:": January 2023 – May 2023"},
    {id:"2", projectname:"Gym portfolio", description:" Designed and developed a dynamic web application showcasing gym details using html,css,javascript. created an interactive platform that effectively communicated gym offerings, class schedule, trauners profiles, and membership information to potentialclients"}
  ]
  indexid = this.projectdetails.map((a)=>a.id)
  currentindex =0
  isExpanded = false;

  
  constructor(){
    console.log(this.indexid);
  

  }
 
  ngOnInit(){
    setInterval(()=>{
      this.nextSlide()

    },10000)
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

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   // Check the screen size and toggle description accordingly
  //   if (window.innerWidth <= 768) {
  //     this.isExpanded = false; // Collapse description in mobile view
  //   } else {
  //     this.isExpanded = true; // Expand description on larger screens
  //   }
  // }

  // toggleDescription() {
  //   this.isExpanded = !this.isExpanded;
  // }

}
