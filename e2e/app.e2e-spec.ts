import { FilteringHotelsWebpackPage } from './app.po';

describe('filtering-hotels-webpack App', () => {
  let page: FilteringHotelsWebpackPage;

  beforeEach(() => {
    page = new FilteringHotelsWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
