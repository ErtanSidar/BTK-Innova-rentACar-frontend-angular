import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalServiceComponent } from './additional-service.component';

describe('AdditionalServiceComponent', () => {
  let component: AdditionalServiceComponent;
  let fixture: ComponentFixture<AdditionalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
