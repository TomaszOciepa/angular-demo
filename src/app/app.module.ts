import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsEditorModule } from './forms-editor/forms-editor.module';
import { ValidationModule } from './validation/validation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsEditorModule,
    ValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
