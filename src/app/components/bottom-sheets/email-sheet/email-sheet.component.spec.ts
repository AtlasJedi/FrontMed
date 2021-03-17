import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSheetComponent } from './email-sheet.component';

describe('EmailSheetComponent', () => {
  let component: EmailSheetComponent;
  let fixture: ComponentFixture<EmailSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
