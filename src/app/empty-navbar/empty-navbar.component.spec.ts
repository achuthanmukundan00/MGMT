import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNavbarComponent } from './empty-navbar.component';

describe('EmptyNavbarComponent', () => {
  let component: EmptyNavbarComponent;
  let fixture: ComponentFixture<EmptyNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
