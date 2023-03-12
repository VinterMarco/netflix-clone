import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedEmailService} from "../shared-email.service";


@Component({
  selector: 'app-pre-get-start2',
  templateUrl: './pre-get-start2.component.html',
  styleUrls: ['./pre-get-start2.component.css']
})
export class PreGetStart2Component implements OnInit{

  receivedData: any
  ngOnInit() {
    this.setFormValue()
    alert(this.shareEmail.sharedData)
    // this.signUpForm.value['email'] = this.shareEmail.sharedData
  }


  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  setFormValue() {
    this.signUpForm.get('email')?.setValue(this.shareEmail.sharedData)
  }


  constructor(private shareEmail:SharedEmailService) {
  }




  OnSubmit() {
    console.log(this.signUpForm.value)
  }
}
