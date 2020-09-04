import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveListsToJsonComponent } from './save-lists-to-json.component';

describe('SaveListsToJsonComponent', () => {
  let component: SaveListsToJsonComponent;
  let fixture: ComponentFixture<SaveListsToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveListsToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveListsToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
