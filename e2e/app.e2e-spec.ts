import { DecadePage } from './app.po';

describe('decade App', function() {
  let page: DecadePage;

  beforeEach(() => {
    page = new DecadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
