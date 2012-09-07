// Require.js + config
EnvJasmine.loadGlobal(EnvJasmine.libDir + "/require/require-2.0.6.js");
EnvJasmine.loadGlobal(EnvJasmine.testDir + "/require.conf.js");

// "Global" singleton
define('environment/user', {
    firstName: 'Jon',
    lastName:  'Blogger',
    email:     'jon@guardian.co.uk'
});
