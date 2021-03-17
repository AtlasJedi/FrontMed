import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandiSheetComponent } from './handi-sheet.component';

describe('HandiSheetComponent', () => {
  let component: HandiSheetComponent;
  let fixture: ComponentFixture<HandiSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandiSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandiSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
