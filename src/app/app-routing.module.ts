import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsEditorComponent } from './forms-editor/forms-editor.component';


const routes: Routes = [
  {path:'form', component: FormsEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
