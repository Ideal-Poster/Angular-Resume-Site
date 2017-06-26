import { AngularResumeSitePage } from './app.po';

describe('angular-resume-site App', () => {
  let page: AngularResumeSitePage;

  beforeEach(() => {
    page = new AngularResumeSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
