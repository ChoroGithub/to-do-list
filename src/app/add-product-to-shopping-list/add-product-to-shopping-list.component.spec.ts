import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToShoppingListComponent } from './add-product-to-shopping-list.component';

describe('AddProductToShoppingListComponent', () => {
  let component: AddProductToShoppingListComponent;
  let fixture: ComponentFixture<AddProductToShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductToShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
