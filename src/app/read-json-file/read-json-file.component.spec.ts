import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonFileComponent } from './read-json-file.component';

describe('ReadJsonFileComponent', () => {
  let component: ReadJsonFileComponent;
  let fixture: ComponentFixture<ReadJsonFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJsonFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJsonFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
