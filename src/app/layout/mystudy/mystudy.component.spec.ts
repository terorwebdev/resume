import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudyComponent } from './mystudy.component';

describe('MystudyComponent', () => {
  let component: MystudyComponent;
  let fixture: ComponentFixture<MystudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
