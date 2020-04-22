var assert = require('assert');
var createUser = require('../lib/createUser');
var createMemo = require('../lib/createMemo');
var Client = require('../lib/Client');
var beforeGetMemos = require('../lib/beforeGetMemos');
var checkPassword = require('../lib/checkPassword');
var createAccount = require('../lib/createAccount');
var deleteAccount = require('../lib/deleteAccount');
var deleteMemo = require('../lib/deleteMemo');
var dropDownPage = require('../lib/dropDownPage');
var getDrugstore = require('../lib/getDrugstore');
var getGroceries = require('../lib/getGroceries');
var getHardware = require('../lib/getHardware');
var getMemos = require('../lib/getMemos');
var login = require('../lib/login');
var logout = require('../lib/logout');

describe('logout', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof logout).toBe('function');
    });
  });
});

describe('login', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof login).toBe('function');
    });
  });
});

describe('getMemos', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof getMemos).toBe('function');
    });
  });
});

describe('getHardware', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof getHardware).toBe('function');
    });
  });
});

describe('getGroceries', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof getGroceries).toBe('function');
    });
  });
});

describe('getDrugstore', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof getDrugstore).toBe('function');
    });
  });
});

describe('dropDownPage', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof dropDownPage).toBe('function');
    });
  });
});

describe('deleteMemo', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof deleteMemo).toBe('function');
    });
  });
});

describe('deleteAccount', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof deleteAccount).toBe('function');
    });
  });
});

describe('createAccount', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof createAccount).toBe('function');
    });
  });
});

describe('checkPassword', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof checkPassword).toBe('function');
    });
  });
});

describe('beforeGetMemos', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof beforeGetMemos).toBe('function');
    });
  });
});

describe('Client.js', function() {
  describe('should be an object', function() {
    it('should create a new client through pg.Client() that is an object', function() {
      expect(typeof Client).toBe('object');
    });
  });
});

describe('createMemo.js', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof createMemo).toBe('function');

    });
  });
});

describe('createUser.js', function() {
  describe('should be a function', function() {
    it('should return true when checked with typeof function', function() {
      expect(typeof createUser).toBe('function');
    });
  });
});

