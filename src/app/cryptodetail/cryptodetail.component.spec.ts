import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptodetailComponent } from './cryptodetail.component';

describe('CryptodetailComponent', () => {
  let component: CryptodetailComponent;
  let fixture: ComponentFixture<CryptodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptodetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
