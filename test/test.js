'use strict';

const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
const superagent = require('superagent');

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
var aboutMe = require('../lib/aboutMe');

describe('should be a function', function() {
  it('aboutMe should return true when checked with typeof function', function() {
    expect(typeof aboutMe).toBe('function');
  });
});

describe('should be a function', function() {
  it('logout should return true when checked with typeof function', function() {
    expect(typeof logout).toBe('function');
  });
});

describe('should be a function', function() {
  it('login should return true when checked with typeof function', function() {
    expect(typeof login).toBe('function');
  });
});

describe('should be a function', function() {
  it('getMemos should return true when checked with typeof function', function() {
    expect(typeof getMemos).toBe('function');
  });
});

describe('should be a function', function() {
  it('getHardware should return true when checked with typeof function', function() {
    expect(typeof getHardware).toBe('function');
  });
});

describe('should be a function', function() {
  it('getGroceries should return true when checked with typeof function', function() {
    expect(typeof getGroceries).toBe('function');
  });
});

describe('should be a function', function() {
  it('getDrugstore should return true when checked with typeof function', function() {
    expect(typeof getDrugstore).toBe('function');
  });
});

describe('should be a function', function() {
  it('dropDownPage should return true when checked with typeof function', function() {
    expect(typeof dropDownPage).toBe('function');
  });
});

describe('should be a function', function() {
  it('deleteMemo should return true when checked with typeof function', function() {
    expect(typeof deleteMemo).toBe('function');
  });
});

describe('should be a function', function() {
  it('deleteAccount should return true when checked with typeof function', function() {
    expect(typeof deleteAccount).toBe('function');
  });
});

describe('should be a function', function() {
  it('createAccount should return true when checked with typeof function', function() {
    expect(typeof createAccount).toBe('function');
  });
});

describe('should be a function', function() {
  it('checkPassword should return true when checked with typeof function', function() {
    expect(typeof checkPassword).toBe('function');
  });
});

describe('should be a function', function() {
  it('beforeGetMemos should return true when checked with typeof function', function() {
    expect(typeof beforeGetMemos).toBe('function');
  });
});

describe('should be an object', function() {
  it('Client should create a new client through pg.Client() that is an object', function() {
    expect(typeof Client).toBe('object');
  });
});

describe('should be a function', function() {
  it('createMemo should return true when checked with typeof function', function() {
    expect(typeof createMemo).toBe('function');
  });
});

describe('should be a function', function() {
  it('createUser should return true when checked with typeof function', function() {
    expect(typeof createUser).toBe('function');
  });
});
