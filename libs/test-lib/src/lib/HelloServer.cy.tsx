import { HelloServer } from './hello-server';
import * as Router from 'next/router';

describe('HelloServer', () => {
  let router;

  beforeEach(() => {
    router = {
      back: cy.stub().as('routerBack'),
    };

    cy.stub(Router, 'useRouter').returns(router);
  });

  it('', () => {
    cy.mount(<HelloServer />);
  });
});
