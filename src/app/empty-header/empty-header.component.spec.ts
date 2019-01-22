import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyHeaderComponent } from './empty-header.component';

describe('EmptyHeaderComponent', () => {
  let component: EmptyHeaderComponent;
  let fixture: ComponentFixture<EmptyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
