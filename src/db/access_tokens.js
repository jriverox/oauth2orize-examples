const tokens = {};

module.exports.find = (key, done) => {
  console.log(`access_token.find key:${key}`);
  
  if (tokens[key]) return done(null, tokens[key]);
  return done(new Error('Token Not Found'));
};

module.exports.findByUserIdAndClientId = (userId, clientId, done) => {
  console.log(`access_token.findByUserIdAndClientId userId:${userId} clientId:${clientId}`);
  
  for (const token in tokens) {
    if (tokens[token].userId === userId && tokens[token].clientId === clientId) return done(null, token);
  }
  return done(new Error('Token Not Found'));
};

module.exports.save = (token, userId, clientId, done) => {
  console.log(`access_token.save token:${token} userId:${userId} clientId:${clientId}`);

  tokens[token] = { userId, clientId };
  done();
};

module.exports.removeByUserIdAndClientId = (userId, clientId, done) => {
  console.log(`access_token.removeByUserIdAndClientId userId:${userId} clientId:${clientId}`);

  for (const token in tokens) {
      if (tokens[token].userId === userId && tokens[token].clientId === clientId) {
          delete tokens[token];
          return done(null);
      }
  }
  return done(new Error('Token Not Found'));
};