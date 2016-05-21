import { Ng2usePage } from './app.po';

describe('ng2use App', function() {
  let page: Ng2usePage;

  beforeEach(() => {
    page = new Ng2usePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2use works!');
  });
});
