import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsUpdateComponent } from './hacker-news-update.component';

describe('HackerNewsUpdateComponent', () => {
  let component: HackerNewsUpdateComponent;
  let fixture: ComponentFixture<HackerNewsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
