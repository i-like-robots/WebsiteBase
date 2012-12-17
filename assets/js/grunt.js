module.exports = function(grunt) {

  grunt.initConfig({
    meta: {
      banner: '/* WebsiteBase <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM:ss") %> */'
    },
    min: {
      dist: {
        src: ['<banner>', 'src/start.js', 'src/utils/*.js', 'src/components/*.js', 'src/views/*.js', 'src/end.js'],
        dest: 'build/compiled.min.js'
      }
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js']
    },
    jshint: {
      options: {
        trailing: true,
        smarttabs: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    }
  });

  grunt.registerTask('default', 'lint min');

};