import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQAddComponent } from './faq-add.component';

describe('FAQAddComponent', () => {
  let component: FAQAddComponent;
  let fixture: ComponentFixture<FAQAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
