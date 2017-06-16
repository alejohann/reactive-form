import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectOutputComponent } from './object-output.component';

describe('ObjectOutputComponent', () => {
  let component: ObjectOutputComponent;
  let fixture: ComponentFixture<ObjectOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
