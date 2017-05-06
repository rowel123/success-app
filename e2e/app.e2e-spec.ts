import { SuccessAppPage } from './app.po';

describe('success-app App', () => {
  let page: SuccessAppPage;

  beforeEach(() => {
    page = new SuccessAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
