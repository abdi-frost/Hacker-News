import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestComponent } from './best.component';

describe('BestComponent', () => {
  let component: BestComponent;
  let fixture: ComponentFixture<BestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestComponent]
    });
    fixture = TestBed.createComponent(BestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
