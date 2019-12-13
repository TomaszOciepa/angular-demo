import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldEditorComponent } from './form-field-editor.component';

describe('FormFieldEditorComponent', () => {
  let component: FormFieldEditorComponent;
  let fixture: ComponentFixture<FormFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
