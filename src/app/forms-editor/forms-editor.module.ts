import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsEditorComponent } from './forms-editor.component';
import { FormFieldEditorComponent } from './form-field-editor/form-field-editor.component';



@NgModule({
  declarations: [FormsEditorComponent, FormFieldEditorComponent],
  exports: [FormsEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormsEditorModule { }
