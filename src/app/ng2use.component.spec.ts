import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2useAppComponent } from '../app/ng2use.component';

beforeEachProviders(() => [Ng2useAppComponent]);

describe('App: Ng2use', () => {
  it('should create the app',
      inject([Ng2useAppComponent], (app: Ng2useAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2use works!\'',
      inject([Ng2useAppComponent], (app: Ng2useAppComponent) => {
  }));
});
