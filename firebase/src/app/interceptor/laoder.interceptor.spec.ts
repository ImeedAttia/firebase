import { TestBed } from '@angular/core/testing';

import { LaoderInterceptor } from './laoder.interceptor';

describe('LaoderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LaoderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LaoderInterceptor = TestBed.inject(LaoderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
