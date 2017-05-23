import { SearchWithTagsPage } from './app.po';

describe('search-with-tags App', function() {
  let page: SearchWithTagsPage;

  beforeEach(() => {
    page = new SearchWithTagsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
