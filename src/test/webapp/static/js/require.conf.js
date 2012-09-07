require.config({
    baseUrl: EnvJasmine.rootDir,
    paths: {
        // mocks:      EnvJasmine.mocksDir,

        // Plugins
        // text:       'lib/require/text-2.0.0',

        // Libraries
        // FIXME: we don't want to depend on jQuery necessarily, but for
        // now the sbt plugin requires it
        jquery:     'lib/jquery-1.8.1'
    },

    shim: {
        // underscore: {
        //     exports: '_'
        // }
        // backbone: {
        //     deps:    ['underscore', 'jquery'],
        //     exports: 'Backbone'
        // },
        // sanitize: {
        //     exports: 'Sanitize'
        // }
    }
});
