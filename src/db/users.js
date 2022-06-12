const users = [
  { id: '1', username: 'bob', password: 'secret', name: 'Bob Smith' },
  { id: '2', username: 'joe', password: 'password', name: 'Joe Davis' },
  { id: '3', username: 'test', password: 'test', name: 'Pepe Trueno' },
];

module.exports.findById = (id, done) => {
  console.log(`users.findById: id: ${id}`);

  for (let i = 0, len = users.length; i < len; i++) {
    if (users[i].id === id) return done(null, users[i]);
  }
  return done(new Error('User Not Found'));
};

module.exports.findByUsername = (username, done) => {
  console.log(`users.findByUsername: username: ${username}`);

  for (let i = 0, len = users.length; i < len; i++) {
    if (users[i].username === username) return done(null, users[i]);
  }
  return done(new Error('User Not Found'));
};
