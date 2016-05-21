export class Ng2usePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2use-app h1')).getText();
  }
}
