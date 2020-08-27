import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { browser, logging, element } from 'protractor';
import { Repo } from '../PageObjects/repo.po';


describe('CreateListComponent', () => {

  let repo: Repo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', async () => {
    await repo.testaddNewListButton();
    await browser.sleep(10000);
    await expect(await repo.getHeader()).toBe('Name of the list');
  });
});
