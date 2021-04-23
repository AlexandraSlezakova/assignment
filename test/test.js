const assert = require('assert');
const main = require('../dist/main');


describe('#main()', function() {
    describe('Valid input', function() {
        it('input string: abCD12', function() {
            assert.equal(main.main("abCD12"), "21dcBA");
        });

        it('input string: 12345', function() {
            assert.equal(main.main("12345"), "54321");
        });

        it('input string: MARKET124place', function() {
            assert.equal(main.main("MARKET124place"), "ECALP421tekram");
        });

        it('input string: MaRKeT124pLacE', function() {
            assert.equal(main.main("MaRKeT124pLacE"), "eCAlP421tEkrAm");
        });

        it('input string: marketplace', function() {
            assert.equal(main.main("marketplace"), "ECALPTEKRAM");
        });

        it('input string: ASSignMEnt2021', function() {
            assert.equal(main.main("ASSignMEnt2021"), "1202TNemNGIssa");
        });

        it('input string: LogRocket', function() {
            assert.equal(main.main("LogRocket"), "TEKCOrGOl");
        });
    })

    describe('Invalid input', function() {
        it('input string: abC*D12', function() {
            assert.equal(main.main("abC*D12"), "");
        });

        it('input string: 12345?', function() {
            assert.equal(main.main("12345?"), "");
        });

        it('input string: MARKET124)place', function() {
            assert.equal(main.main("MARKET124)place"), "");
        });

        it('input string: &MaRKeT124pLacE', function() {
            assert.equal(main.main("&MaRKeT124pLacE"), "");
        });

        it('input string: M_aRKeT124pLacE', function() {
            assert.equal(main.main("&MaRKeT124pLacE"), "");
        });

        it('input string: marketplace+', function() {
            assert.equal(main.main("marketplace+"), "");
        });

        it('input string: ASSignMEnt2021%', function() {
            assert.equal(main.main("ASSignMEnt2021%"), "");
        });

        it('input string: ASSi_gnMEnt2021%', function() {
            assert.equal(main.main("ASSi_gnMEnt2021%"), "");
        });

        it('input string: ./{', function() {
            assert.equal(main.main("./{"), "");
        });
    })
});