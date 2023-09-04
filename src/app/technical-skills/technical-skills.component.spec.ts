import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSKillsComponent } from './technical-skills.component';

describe('TechnicalSKillsComponent', () => {
  let component: TechnicalSKillsComponent;
  let fixture: ComponentFixture<TechnicalSKillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSKillsComponent]
    });
    fixture = TestBed.createComponent(TechnicalSKillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
