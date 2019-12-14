import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl

  constructor() {
    this.formTitle = new FormControl('batman')
    console.log(this.formTitle)
   }

  ngOnInit() {
  }

}
