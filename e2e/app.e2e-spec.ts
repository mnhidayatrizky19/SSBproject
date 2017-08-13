import { SSBprojectPage } from './app.po';

describe('ssbproject App', () => {
  let page: SSBprojectPage;

  beforeEach(() => {
    page = new SSBprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
