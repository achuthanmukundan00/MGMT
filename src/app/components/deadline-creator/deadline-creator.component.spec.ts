import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineCreatorComponent } from './deadline-creator.component';

describe('DeadlineCreatorComponent', () => {
  let component: DeadlineCreatorComponent;
  let fixture: ComponentFixture<DeadlineCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlineCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
