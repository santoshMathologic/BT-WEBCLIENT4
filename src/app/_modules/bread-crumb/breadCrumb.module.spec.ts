import { BreadCrumbModule } from './breadCrumb.module';

describe('PageHeaderModule', () => {
  let pageHeaderModule: BreadCrumbModule;

  beforeEach(() => {
    pageHeaderModule = new BreadCrumbModule();
  });

  it('should create an instance', () => {
    expect(pageHeaderModule).toBeTruthy();
  });
});
