import { ObjectMakerPage } from './app.po';

describe('object-maker App', () => {
  let page: ObjectMakerPage;

  beforeEach(() => {
    page = new ObjectMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
