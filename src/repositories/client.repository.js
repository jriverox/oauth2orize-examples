const { dbPool } = require('./db_connector');

module.exports.findByClientId = async (clientId) => {
  const pool = dbPool();
  console.log('findByClientId 1');
  const [rows, fields] = await pool.query('SELECT client_id, name, client_secret, redirect_uri, is_trusted FROM oauth2.oauth_clients WHERE client_id = ?', [clientId]);
  console.log('findByClientId 2 rows length', rows.length);
  if (rows.length === 0) {
    throw new Error(`Client ${clientId} Not Found`);
  }
  console.log('datos', rows[0]);
  console.log('campos', fields);
  const client = {
    id: rows[0].client_id,
    clientId: rows[0].client_id,
    name: rows[0].name,
    clientSecret: rows[0].client_secret,
    redirectUri: rows[0].redirect_uri,
    isTrusted: rows[0].is_trusted
  };
  console.log(client);
  return client;
}