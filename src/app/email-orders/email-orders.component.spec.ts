import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOrdersComponent } from './email-orders.component';

describe('EmailOrdersComponent', () => {
  let component: EmailOrdersComponent;
  let fixture: ComponentFixture<EmailOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
