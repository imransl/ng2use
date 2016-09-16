/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Ng2useAppComponent } from './ng2use.component';

describe('App: Ng2use', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Ng2useAppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(Ng2useAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(Ng2useAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(Ng2useAppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
