'use strict';

const clients = [
  { id: '1', name: 'Samplr', clientId: 'abc123', clientSecret: 'ssh-secret', isTrusted: false },
  { id: '2', name: 'Samplr2', clientId: 'xyz123', clientSecret: 'ssh-password', isTrusted: true },
];

module.exports.findById = (id, done) => {
  console.log(`clients.findById: id: ${id}`);

  for (let i = 0, len = clients.length; i < len; i++) {
    if (clients[i].id === id) return done(null, clients[i]);
  }
  
  return done(new Error(`Client ${id} Not Found`));
};

module.exports.findByClientId = (clientId, done) => {
  console.log(`clients.findByClientId: clientId: ${clientId}`);

  for (let i = 0, len = clients.length; i < len; i++) {
    if (clients[i].clientId === clientId) return done(null, clients[i]);
  }
  
  return done(new Error(`Client ${clientId} Not Found`));
};
