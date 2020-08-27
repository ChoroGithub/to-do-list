import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaverComponent } from './list-saver.component';

describe('ListSaverComponent', () => {
  let component: ListSaverComponent;
  let fixture: ComponentFixture<ListSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
