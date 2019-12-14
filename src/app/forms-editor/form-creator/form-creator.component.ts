import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  formTitle: FormControl
  fieldOptions: FormGroup
  optionsForField: FormArray

  constructor(private fb:FormBuilder) {
    this.formTitle = this.fb.control('batman')

    this.fieldOptions = this.fb.group({
        type:this.fb.control('text'),
        label: this.fb.control('')
    })
    
    this.optionsForField = this.fb.array(
      [
        this.createOption("Test 1"),
        this.createOption("Test 2"),
        this.createOption("Test 3"),
      ]
    )

   }

   createOption(defaultValue, selected = false){
     return this.fb.group({
       selected:this.fb.control(selected),
       value: this.fb.control(defaultValue)
     })
   }

  ngOnInit() {
  }

}
