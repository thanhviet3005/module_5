import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewBtComponent } from './hacker-new-bt.component';

describe('HackerNewBtComponent', () => {
  let component: HackerNewBtComponent;
  let fixture: ComponentFixture<HackerNewBtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewBtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
