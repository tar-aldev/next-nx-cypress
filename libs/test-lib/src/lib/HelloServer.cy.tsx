import * as helloServer from './hello-server';

describe('HelloServer', () => {
  it('', () => {
    cy.stub(helloServer, 'someFunction').returns('stubbed value');
    cy.mount(<helloServer.HelloServer />);
  });
});
