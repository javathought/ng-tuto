import { NgTutoPage } from './app.po';

describe('ng-tuto App', () => {
  let page: NgTutoPage;

  beforeEach(() => {
    page = new NgTutoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
