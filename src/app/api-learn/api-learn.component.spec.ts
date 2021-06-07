import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLearnComponent } from './api-learn.component';

describe('ApiLearnComponent', () => {
  let component: ApiLearnComponent;
  let fixture: ComponentFixture<ApiLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
