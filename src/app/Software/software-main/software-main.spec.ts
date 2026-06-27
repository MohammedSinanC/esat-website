import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareMain } from './software-main';

describe('SoftwareMain', () => {
  let component: SoftwareMain;
  let fixture: ComponentFixture<SoftwareMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareMain],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
