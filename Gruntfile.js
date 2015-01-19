module.exports = function(grunt){

  

  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json')
    watch: {
      grunt: {
        files: ['Gruntfile.js', 'package.json'],
        tasks: "default"
      },
      javascript: {
        files: ['tests/*.js'],
        tasks: 'test'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        }
      },
      src: ['tests/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');


  
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask("default", ['test']);
};