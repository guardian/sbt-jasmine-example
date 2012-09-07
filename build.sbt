// jasmine conf

seq(jasmineSettings : _*)

appJsDir <+= sourceDirectory { src => src / "main" / "webapp" / "static" / "js" }

appJsLibDir <+= sourceDirectory { src => src / "main" / "webapp" / "static" / "js" / "lib" }

jasmineTestDir <+= sourceDirectory { src => src / "test" / "webapp" / "static" / "js" }

jasmineConfFile <+= sourceDirectory { src => src / "test" / "webapp" / "static" / "js" / "test.dependencies.js" }

(test in Test) <<= (test in Test) dependsOn (jasmine)
