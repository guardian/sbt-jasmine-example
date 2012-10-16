// jasmine conf

seq(jasmineSettings : _*)

appJsDir <+= sourceDirectory { src => src / "main" / "webapp" / "static" / "js" }

appJsLibDir <+= sourceDirectory { src => src / "main" / "webapp" / "static" / "js" / "lib" }

jasmineTestDir <+= sourceDirectory { src => src / "test" / "webapp" / "static" / "js" }

jasmineConfFile <+= sourceDirectory { src => src / "test" / "webapp" / "static" / "js" / "test.dependencies.js" }

jasmineRequireJsFile <+= sourceDirectory { src => src / "main" / "webapp" / "static" / "js" / "lib" / "require" / "require-2.0.6.js" }

jasmineRequireConfFile <+= sourceDirectory { src => src / "test" / "webapp" / "static" / "js" / "require.conf.js" }

(test in Test) <<= (test in Test) dependsOn (jasmine)
