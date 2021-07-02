import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetturnsComponent } from './getturns.component';

describe('GetturnsComponent', () => {
  let component: GetturnsComponent;
  let fixture: ComponentFixture<GetturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
