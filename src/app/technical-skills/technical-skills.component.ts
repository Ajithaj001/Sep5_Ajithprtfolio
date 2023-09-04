import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSKillsComponent {

  value:any
  skillId:any

  technicalSkills = [
    {id:'1', skillName: "Angular" , progress : 95 , imagePath:'../assets/angular2.png'},
    {id:'2', skillName: "HTML", progress : 95, imagePath:'../assets/html.png'},
    {id:'3', skillName: "CSS", progress:80, imagePath:'../assets/CSS.png'},
    {id:'4', skillName: "JavaScript", progress: 80},
    {id:'5', skillName: "Bootstrap",progress:75},
    {id:'6', skillName: "SQL", progress: 65}
  ]

  constructor(){
    


  }
  ngOnInit(){
    this.Progress()
    console.log(this.value);
    
  }
  Progress(){
   this.technicalSkills.forEach((skilset)=>{
    if(skilset.id == '1'){
      this.value = 90
    }
    else{
      this.value = 60
    }
   })
  }
}
