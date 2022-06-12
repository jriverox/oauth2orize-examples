const codes = {};

module.exports.find = (key, done) => {
  console.log(`authorization_codes.find key: ${key}`);

  if (codes[key]) return done(null, codes[key]);
  return done(new Error('Code Not Found'));
};

module.exports.save = (code, clientId, redirectUri, userId, userName, done) => {
  console.log(`authorization_codes.save code: ${code} clientId: ${clientId} redirectUri: ${redirectUri} userId: ${userId} userName: ${userName}`);

  codes[code] = { clientId, redirectUri, userId, userName };
  done();
};
