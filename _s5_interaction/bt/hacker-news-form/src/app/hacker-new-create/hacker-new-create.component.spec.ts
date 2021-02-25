import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewCreateComponent } from './hacker-new-create.component';

describe('HackerNewCreateComponent', () => {
  let component: HackerNewCreateComponent;
  let fixture: ComponentFixture<HackerNewCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
