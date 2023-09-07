import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSKillsComponent {

  value:any
  skillId:any
  submitquery!:FormGroup
  nameerror:any
  mailerror:any
  commentserror:any
  popup = false

  technicalSkills = [
    {id:'1', skillName: "Angular" , progress : 95 , imagePath:'../assets/angular2.png'},
    {id:'2', skillName: "HTML", progress : 95, imagePath:'../assets/html.png'},
    {id:'3', skillName: "CSS", progress:80, imagePath:'../assets/CSS.png'},
    {id:'4', skillName: "JavaScript", progress: 80,imagePath:'../assets/js.png'},
    {id:'5', skillName: "Bootstrap",progress:75,imagePath:'../assets/bootstrap.png'},
    {id:'6', skillName: "SQL", progress: 65,imagePath:'../assets/sqllogo.png'}
  ]

  constructor( private formbuilder: FormBuilder){
    this.submitquery = this.formbuilder.group({
      fname:[null ,Validators.required],
      email:[null, Validators.required],
      comments:[null,Validators.required],

    })
    


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
  Onsubmit(){
   
    
  

    if(this.submitquery.value.fname == null || this.submitquery.value.fname == '' ){
      this.nameerror = "please enter name"
     
      
    }
    else{
      this.nameerror = null
    }
    if(this.submitquery.value.email == null || this.submitquery.value.email == '' ){
      this.mailerror ="please enter mail id"
    }
    else{
      this.mailerror = null
    }
    if(this.submitquery.value.comments ==null || this.submitquery.value.comments == '' ){
      this.commentserror = "please type any message"
    }
    else{
     this.commentserror = null
    }
    // if(this.submitquery.valid){
    //   console.log("submitted", this.submitquery.value);
      
      
    // }
    
      if(this.submitquery.value.fname == null || this.submitquery.value.fname == '' && this.submitquery.value.email == null || this.submitquery.value.email == '' && this.submitquery.value.comments ==null || this.submitquery.value.comments == ''){
        this.popup = false
      }
      else{
        this.popup = true
      }
   
    
    
  
  }
}
