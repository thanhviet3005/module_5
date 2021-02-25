import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsThComponent } from './hacker-news-th.component';

describe('HackerNewsThComponent', () => {
  let component: HackerNewsThComponent;
  let fixture: ComponentFixture<HackerNewsThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
