import { Component, HostListener } from '@angular/core';
import { CommentsaddService } from './services/commentsadd.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import {  OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { TimecaptureService } from './services/timecapture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myModalContent') myModalContent: any;
  title = 'ajithportfolio';
  value:any
  skillId:any
  submitquery!:FormGroup
  nameerror:any
  mailerror:any
  commentserror:any
  popup = false
  formdata:any;
  name:any;
  showButton: boolean = false;
  myTemplate:any;

  constructor( private formbuilder: FormBuilder, private service: CommentsaddService,private dialog: MatDialog, private popupStateService:TimecaptureService){
    this.submitquery = this.formbuilder.group({
      fname:[null ,Validators.required],
      email:[null, Validators.required],
      comments:[null,Validators.required],


    })
    this.openPopup()
    
  }
  ngOnInit() {
   
  }
  openPopup(): void {
    if (this.popupStateService.shouldDisplayPopup()) {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
      });

      dialogRef.afterClosed().subscribe(() => {
        this.popupStateService.setPopupClosed();
      });
    }
  }

  

 

 
 

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
   
    // forms_code
       
    const newUuid = uuidv4();
    const body={
      id:newUuid,
      name:this.submitquery.value.fname,
      email:this.submitquery.value.email,
      comments:this.submitquery.value.comments,

    }
    console.log(body);
    this.name= this.submitquery.value.fname
    console.log(this.name);
    
    
    this.service.postdata(body).subscribe({
      next: (response) => {
        this.formdata=response
        
        console.log(response);
        

    
      },
      error: (error) => {
        console.error(error.message);
        
      }
    })
    
  
  }
  refresh(){
    location.reload()
  }

  formsubmit(){
   
 

    
  }
  
}




