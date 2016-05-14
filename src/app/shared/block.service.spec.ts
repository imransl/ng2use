import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BlockService } from './block.service';

describe('Block Service', () => {
  beforeEachProviders(() => [BlockService]);

  it('should ...',
      inject([BlockService], (service: BlockService) => {
    expect(service).toBeTruthy();
  }));
});
