import { ObservablePracticePage } from './app.po';

describe('observable-practice App', () => {
  let page: ObservablePracticePage;

  beforeEach(() => {
    page = new ObservablePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
