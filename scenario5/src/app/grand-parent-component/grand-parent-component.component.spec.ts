import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandParentComponentComponent } from './grand-parent-component.component';

describe('GrandParentComponentComponent', () => {
  let component: GrandParentComponentComponent;
  let fixture: ComponentFixture<GrandParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
