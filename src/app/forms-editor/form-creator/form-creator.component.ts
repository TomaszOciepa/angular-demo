import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  fieldOptions: FormGroup
  optionsForField: FormArray

  constructor() {
    this.formTitle = new FormControl('batman')

    this.fieldOptions = new FormGroup({
        type: new FormControl('text'),
        label: new FormControl('')
    })
    
    this.optionsForField = new FormArray(
      [
        this.createOption("Test 1"),
        this.createOption("Test 2"),
        this.createOption("Test 3"),
      ]
    )

    console.log(this.fieldOptions)
   }

   createOption(defaultValue, selected = false){
     return new FormGroup({
       selected: new FormControl(selected),
       value: new FormControl(defaultValue)
     })
   }

  ngOnInit() {
  }

}
