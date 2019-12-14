import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  fieldOptions: FormGroup

  constructor() {
    this.formTitle = new FormControl('batman')

    this.fieldOptions = new FormGroup({
        type: new FormControl('text'),
        label: new FormControl('')
    })
    

    console.log(this.fieldOptions)
   }

  ngOnInit() {
  }

}
