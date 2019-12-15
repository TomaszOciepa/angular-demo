import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'form-field-editor',
  templateUrl: './form-field-editor.component.html',
  styleUrls: ['./form-field-editor.component.css']
})
export class FormFieldEditorComponent implements OnInit {

  extra_fields = []

  addExtra(key){
    this.extra_fields.push(key)
  }

  extraChanged(extra){
    console.log(extra)
  }

  @Input('data')
  field_data = {

  }

  @Output()
  dataChange = new EventEmitter()

  // @ViewChild(NgForm)
  form: NgForm

  ngOnInit() {
    setTimeout(()=>{
      // this.form.setValue(this.field_data)
      this.form.resetForm(this.field_data)
    }, 0)
  }

  cancel(){
    this.form.setValue(this.field_data)
    // this.form.reset()
  }

  compareType(type1, type2){
    return type2 && type1.type == type2.type
  }

  save(){
    this.dataChange.emit(this.form.value)
  }

  fieldTypes = [
    {type: 'text', label:'Text Field'},
    {type: 'checkbox', label:'Checkbox Field'},
    {type: 'select', label:'Select Field'}
  ]

  constructor() { }



}
