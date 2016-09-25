import { QwcalcPage } from './app.po';

describe('qwcalc App', function() {
  let page: QwcalcPage;

  beforeEach(() => {
    page = new QwcalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
