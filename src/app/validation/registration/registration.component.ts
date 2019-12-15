import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.form.group({
    username: this.form.control('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: this.form.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.form.control('', [
      Validators.required,
      Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'),
    ]),
    repeat_password: this.form.control(''),
  })

  constructor(private form:FormBuilder) { }

  ngOnInit() {
    console.log(this.registrationForm)
  }

}
