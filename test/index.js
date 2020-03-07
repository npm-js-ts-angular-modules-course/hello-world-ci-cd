const expect = require("chai").expect;
const lib = require('./../index');
describe('Test de datos de diferentes usuarios de Github', () => {
  
    it('Mensaje de bienvenida correcto', () => {
        expect(typeof lib.hello()).to.equal('string');
        expect(lib.hello()).to.equal('Hello World');
    });

    it('Mensaje de bienvenida personalizado correcto', () => {
        expect(typeof lib.helloCustom('Anartz')).to.equal('string');
        expect(lib.helloCustom('Anartz')).to.equal('Hello World Anartz');
    });
});