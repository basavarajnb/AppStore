import { SmartPriceComparePage } from './app.po';

describe('smart-price-compare App', () => {
  let page: SmartPriceComparePage;

  beforeEach(() => {
    page = new SmartPriceComparePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
