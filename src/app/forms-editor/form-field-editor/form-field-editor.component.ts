import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-field-editor',
  templateUrl: './form-field-editor.component.html',
  styleUrls: ['./form-field-editor.component.css']
})
export class FormFieldEditorComponent implements OnInit {

  field_data = {
    name: 'Default value',
    active: true,
    enabled: true,
    hints: '',
    type: {type: 'text', label:'Text Field'}
  }

  compareType(type1, type2){
    return type2 && type1.type == type2.type
  }

  fieldTypes = [
    {type: 'text', label:'Text Field'},
    {type: 'checkbox', label:'Checkbox Field'},
    {type: 'select', label:'Select Field'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
