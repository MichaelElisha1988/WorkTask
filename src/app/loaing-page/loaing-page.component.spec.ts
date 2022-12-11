import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaingPageComponent } from './loaing-page.component';

describe('LoaingPageComponent', () => {
  let component: LoaingPageComponent;
  let fixture: ComponentFixture<LoaingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
