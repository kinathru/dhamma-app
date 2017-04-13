import { DhammaAppPage } from './app.po';

describe('dhamma-app App', () => {
  let page: DhammaAppPage;

  beforeEach(() => {
    page = new DhammaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
