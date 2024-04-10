import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPageComponent } from './dialog-page.component';

describe('DialogPageComponent', () => {
  let component: DialogPageComponent;
  let fixture: ComponentFixture<DialogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPageComponent]
    });
    fixture = TestBed.createComponent(DialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
