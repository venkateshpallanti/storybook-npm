import { TestBed } from '@angular/core/testing';

import { StorybookLibraryService } from './storybook-library.service';

describe('StorybookLibraryService', () => {
  let service: StorybookLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorybookLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
