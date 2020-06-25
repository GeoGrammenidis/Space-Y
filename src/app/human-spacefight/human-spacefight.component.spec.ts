import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanSpacefightComponent } from './human-spacefight.component';

describe('HumanSpacefightComponent', () => {
  let component: HumanSpacefightComponent;
  let fixture: ComponentFixture<HumanSpacefightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanSpacefightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanSpacefightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
