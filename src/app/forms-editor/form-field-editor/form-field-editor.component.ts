import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'form-field-editor',
  templateUrl: './form-field-editor.component.html',
  styleUrls: ['./form-field-editor.component.css']
})
export class FormFieldEditorComponent implements OnInit {

  @Input('data')
  field_data = {

  }

  @Output()
  dataChange = new EventEmitter()

  compareType(type1, type2){
    return type2 && type1.type == type2.type
  }

  save(formRef){
    this.dataChange.emit(this.field_data)
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
