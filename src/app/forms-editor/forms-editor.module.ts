import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsEditorComponent } from './forms-editor.component';
import { FormFieldEditorComponent } from './form-field-editor/form-field-editor.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';



@NgModule({
  declarations: [FormsEditorComponent, FormFieldEditorComponent, FormCreatorComponent],
  exports: [FormsEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsEditorModule { }
