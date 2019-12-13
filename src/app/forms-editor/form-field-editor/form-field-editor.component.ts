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
    enabled: true
  }

  constructor() { }

  ngOnInit() {
  }

}
