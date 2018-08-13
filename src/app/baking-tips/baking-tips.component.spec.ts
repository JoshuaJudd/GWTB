import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingTipsComponent } from './baking-tips.component';

describe('BakingTipsComponent', () => {
  let component: BakingTipsComponent;
  let fixture: ComponentFixture<BakingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
