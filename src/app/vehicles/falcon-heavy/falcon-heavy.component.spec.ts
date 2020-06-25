import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconHeavyComponent } from './falcon-heavy.component';

describe('FalconHeavyComponent', () => {
  let component: FalconHeavyComponent;
  let fixture: ComponentFixture<FalconHeavyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalconHeavyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconHeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
