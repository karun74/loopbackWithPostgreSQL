var server = require('./server');
var ds = server.dataSources.accountDS;
var lbTables = ['User', 'customers', 'address', 'customers_address_link', 'AccessToken', 'ACL', 'Account',  'RoleMapping', 'Role'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
    console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
      ds.disconnect();
      });
