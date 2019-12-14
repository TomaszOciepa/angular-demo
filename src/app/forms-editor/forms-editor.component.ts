import { Component, OnInit, Input } from '@angular/core';

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
    hints: 'Test hints',
    type: {type: 'text', label:'Text Field'}
  }

  formSaved(data){
    this.fieldData = data
    console.log('saved', data)
  }

  constructor() { }

  ngOnInit() {
  }

}
