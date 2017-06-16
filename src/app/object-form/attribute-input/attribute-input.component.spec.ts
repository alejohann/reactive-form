import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeInputComponent } from './attribute-input.component';

describe('AttributeInputComponent', () => {
  let component: AttributeInputComponent;
  let fixture: ComponentFixture<AttributeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
