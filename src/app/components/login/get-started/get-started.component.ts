import {Component, OnInit} from '@angular/core';
import {FormGroup , FormControl} from "@angular/forms";
import {SharedEmailService} from "./shared-email.service";

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})






export class GetStartedComponent implements OnInit{
  signUpForm :FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  constructor(private  sharedEmail:SharedEmailService) {
  }

  ngOnInit() {
    // alert(this.sharedEmail.sharedData)
    // this.sendEmail()
  }

  sendEmail() {
    this.sharedEmail.sharedData = this.signUpForm.get('email')?.value
  }


  OnSubmit() {
    alert(this.sharedEmail.sharedData)
    alert(this.signUpForm.get('email')?.value)
    this.sendEmail()
    console.log(this.signUpForm.value)
  }

}
