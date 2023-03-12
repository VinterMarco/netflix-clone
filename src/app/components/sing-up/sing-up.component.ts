import {Component, OnInit} from '@angular/core';
import {FormGroup , FormControl} from "@angular/forms";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
    loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })

  constructor() {}

  ngOnInit():void {
  }

  OnSubmit() {
      console.log(this.loginForm.value)
  }


}
