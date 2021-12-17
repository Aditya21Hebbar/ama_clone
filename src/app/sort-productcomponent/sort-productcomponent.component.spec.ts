import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProductcomponentComponent } from './sort-productcomponent.component';

describe('SortProductcomponentComponent', () => {
  let component: SortProductcomponentComponent;
  let fixture: ComponentFixture<SortProductcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortProductcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortProductcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
