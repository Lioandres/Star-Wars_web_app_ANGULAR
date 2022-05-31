import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxStartshipService } from '../servicces/aux-startship.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  
  constructor(private fb:FormBuilder,private auxServ:AuxStartshipService) { }

  ngOnInit(): void {
  }

  logInForm:FormGroup= this.fb.group({
    name:["",[Validators.required,Validators.minLength(5)]],
    password:["",[Validators.required,Validators.minLength(8)]],
  })

  logIn() {
    if (this.logInForm.valid) {
      let name=this.logInForm.get('name')?.value
      let password=this.logInForm.get('password')?.value
      this.auxServ.logIn(name,password)
      console.log(this.logInForm.value)
    
    }
    else{
      alert("Rellene todo los campos correctamente")
    }
  }
}



