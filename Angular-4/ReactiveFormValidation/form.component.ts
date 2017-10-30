import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './form.service';
import {UserInterface} from './interface' ;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
styles:[`
    input.ng-invalid {border-left: 5px red solid  ;}
input.ng-valid {border-left :5px green solid}
    
`]
}) 
export class FormComponent implements OnInit {
    
//    userObj = [{userName : 'hello I am from userObj Array of objects'}] ;
    
    userObj:UserInterface[];    
    
    
     userform  = new FormGroup({        
     userName : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])        
        }); 
    
      onSubmit(data){
            if(this.userform.valid){
            console.log(data);
            this.userObj.unshift(data);
            this.userform.reset();
}
          
            };    
 // dependency injection in the code , used the Dataservice 
 //after importing it at the begining.
constructor(private _dataService : DataService) {
    //autometically called when instance of the class is created
    //used to  intialise object and sub objects
    }
    
  ngOnInit() { 
      // called after the constuctor life cycle hook
      // tasks that are time cosuming place it in ngOnit
    this.userObj = this._dataService.getData();     
  }

}
