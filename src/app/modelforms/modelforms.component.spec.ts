import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelformsComponent } from './modelforms.component';

describe('ModelformsComponent', () => {
  let component: ModelformsComponent;
  let fixture: ComponentFixture<ModelformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
