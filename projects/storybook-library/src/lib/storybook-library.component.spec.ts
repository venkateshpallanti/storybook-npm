import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookLibraryComponent } from './storybook-library.component';

describe('StorybookLibraryComponent', () => {
  let component: StorybookLibraryComponent;
  let fixture: ComponentFixture<StorybookLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorybookLibraryComponent]
    });
    fixture = TestBed.createComponent(StorybookLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
