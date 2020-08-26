import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectorComponent } from './list-projector.component';

describe('ListProjectorComponent', () => {
  let component: ListProjectorComponent;
  let fixture: ComponentFixture<ListProjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
