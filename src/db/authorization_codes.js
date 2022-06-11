'use strict';

const codes = {};

module.exports.find = (key, done) => {
  console.log('find authorization code:', key);
  if (codes[key]) return done(null, codes[key]);
  return done(new Error('Code Not Found'));
};

module.exports.save = (code, clientId, redirectUri, userId, userName, done) => {
  codes[code] = { clientId, redirectUri, userId, userName };
  done();
};