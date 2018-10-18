'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dog2 = exports.dog1 = undefined;

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

var _dog = require('../class/dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dog1 = exports.dog1 = new _dog2.default("レオ", 4, "チワワ");

var name = _readlineSync2.default.question('名前を入力してください: ');
var age = _readlineSync2.default.questionInt('年齢を入力してください: ');
var breed = _readlineSync2.default.question('犬種を入力してください: ');
var dog2 = exports.dog2 = new _dog2.default(name, age, breed);