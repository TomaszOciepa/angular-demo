import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-editor',
  templateUrl: './forms-editor.component.html',
  styleUrls: ['./forms-editor.component.css']
})
export class FormsEditorComponent implements OnInit {

  fieldData = {
    name: 'Default value',
    active: true,
    enabled: true,
    hints: '',
    type: {type: 'text', label:'Text Field'}
  }

  formSaved(data){
    console.log('saved', data)
  }

  constructor() { }

  ngOnInit() {
  }

}
