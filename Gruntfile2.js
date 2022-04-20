/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */
var pkg = require('./package.json');
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        jshint: {
            files: ['Gruntfile.js', 'util/**/*.js'],
            options: {

                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
            foo: {
                src: ['src']
            }
        },
        concat: {
            //concat taks
            options: {
                separator: ';'

            },
            dist: {
                src: ['util/**/*.js'],
                dest: 'dist'
            },
            foo: {
                files: [
                    { src: ['util'], dest: 'dest/' },
                    { src: [], dest: '' }
                ]
            }
        },
        clean: {
            foo: {
                src: ['root/build/**/*'],
                filter: 'isFile'
            }
        },
        uglify: {
            static_mappings: {
                files: []
            },
            options: {

            },
            bar: {

            }
        },
        build: {
            src: 'util/*.js',
            dest: 'root/Assets/util/*.js'
        },

        watch: {
            files: ['<%= jshint.files  %>'],
            tasks: ['jshint']
        },
        log:{
            foo:{},
            bar: '',
            baz:false            
        },
        util: ['util/*.js']
    });
    //    grunt.registerTask
    //    grunt.registerTask('default', 'build',function(){
    //        grunt.log.write('building')
    //    });
    //    grunt.loadNpmTasks('build');
    //    grunt.loadNpmTasks('clean');
    //Default tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['uglify','jshint']);
//    grunt.registerTasks('clean build', 'clean and build', function(){
//        
//    });
//    grunt.registerTask('log', 'Log Configuration Actions', function(){
//       var done = this.async();
//        grunt.log.writeln('task: '+grunt.task);
//    });
    //    grunt.registerTask('default', 'build', function(){
    //        grunt.log.write();
    //    });
    //    grunt.registerTask('default');
};
