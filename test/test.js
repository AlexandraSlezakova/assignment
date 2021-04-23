const assert = require('assert');
const Main = require('../dist/main');

describe('#main()', function() {
    describe('Valid input', function() {
        it('input string: abCD12', function() {
            assert.equal(Main.main("abCD12"), "21dcBA");
        });

        it('input string: 12345', function() {
            assert.equal(Main.main("12345"), "54321");
        });

        it('input string: MARKET124place', function() {
            assert.equal(Main.main("MARKET124place"), "ECALP421tekram");
        });

        it('input string: MaRKeT124pLacE', function() {
            assert.equal(Main.main("MaRKeT124pLacE"), "eCAlP421tEkrAm");
        });

        it('input string: marketplace', function() {
            assert.equal(Main.main("marketplace"), "ECALPTEKRAM");
        });

        it('input string: ASSignMEnt2021', function() {
            assert.equal(Main.main("ASSignMEnt2021"), "1202TNemNGIssa");
        });

        it('input string: LogRocket', function() {
            assert.equal(Main.main("LogRocket"), "TEKCOrGOl");
        });
    })

    describe('Invalid input', function() {
        it('input string: abC*D12', function() {
            assert.equal(Main.main("abC*D12"), "");
        });

        it('input string: 12345?', function() {
            assert.equal(Main.main("12345?"), "");
        });

        it('input string: MARKET124)place', function() {
            assert.equal(Main.main("MARKET124)place"), "");
        });

        it('input string: &MaRKeT124pLacE', function() {
            assert.equal(Main.main("&MaRKeT124pLacE"), "");
        });

        it('input string: M_aRKeT124pLacE', function() {
            assert.equal(Main.main("&MaRKeT124pLacE"), "");
        });

        it('input string: marketplace+', function() {
            assert.equal(Main.main("marketplace+"), "");
        });

        it('input string: ASSignMEnt2021%', function() {
            assert.equal(Main.main("ASSignMEnt2021%"), "");
        });

        it('input string: ASSi_gnMEnt2021%', function() {
            assert.equal(Main.main("ASSi_gnMEnt2021%"), "");
        });

        it('input string: ./{', function() {
            assert.equal(Main.main("./{"), "");
        });
    })
});

describe('#isNumber()', function() {
    describe('character is number', function() {
        it('should return true for character 4', function() {
            assert.equal(Main.isNumber('4'), true);
        });

        it('should return true for character 7', function() {
            assert.equal(Main.isNumber('7'), true);
        });

        it('should return true for character 0', function() {
            assert.equal(Main.isNumber('0'), true);
        });
    })

    describe('character is not number', function() {
        it('should return false because . is not number', function() {
            assert.equal(Main.isNumber('.'), false);
        });

        it('should return false because letter A is not number', function() {
            assert.equal(Main.isNumber('A'), false);
        });

        it('should return false because .4 is not a single character', function() {
            assert.equal(Main.isNumber('.4'), false);
        });

        it('should return false because 36 is not a single character', function() {
            assert.equal(Main.isNumber('36'), false);
        });
    })
});

describe('#isLetter()', function() {
    describe('character is letter', function() {
        it('should return true for character M', function() {
            assert.equal(Main.isLetter('M'), true);
        });

        it('should return true for character w', function() {
            assert.equal(Main.isLetter('w'), true);
        });

        it('should return true for character z', function() {
            assert.equal(Main.isLetter('z'), true);
        });
    })

    describe('character is not letter', function() {
        it('should return false because 4 is not letter', function() {
            assert.equal(Main.isLetter('4'), false);
        });

        it('should return false because . is not letter', function() {
            assert.equal(Main.isLetter('.'), false);
        });

        it('should return false because & is not a letter', function() {
            assert.equal(Main.isLetter('&'), false);
        });

        it('should return false because AB is not a single letter', function() {
            assert.equal(Main.isLetter('AB'), false);
        });
    })
});

describe('#isInputValid()', function() {
    describe('check if string contains only alphanumeric characters', function() {
        it('should return true for string ampersand', function() {
            assert.equal(Main.isInputValid('ampersand'), true);
        });

        it('should return true for string alphanumeric34', function() {
            assert.equal(Main.isInputValid('alphanumeric34'), true);
        });

        it('should return true for string 114101100', function() {
            assert.equal(Main.isInputValid('114101100'), true);
        });

        it('should return false for string ampersand&', function() {
            assert.equal(Main.isInputValid('ampersand&'), false);
        });

        it('should return false for string alphanumeric_34', function() {
            assert.equal(Main.isInputValid('alphanumeric_34'), false);
        });

        it('should return false for string 114 101 100', function() {
            assert.equal(Main.isInputValid('114 101 100'), false);
        });
    })
});