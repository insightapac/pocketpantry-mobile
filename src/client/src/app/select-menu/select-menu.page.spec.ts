import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMenuPage } from './select-menu.page';

describe('SelectMenuPage', () => {
  let component: SelectMenuPage;
  let fixture: ComponentFixture<SelectMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
