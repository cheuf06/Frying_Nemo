import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShoppingComponent } from './page-shopping.component';

describe('PageShoppingComponent', () => {
  let component: PageShoppingComponent;
  let fixture: ComponentFixture<PageShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
