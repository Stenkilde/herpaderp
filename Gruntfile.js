// Gruntfile.js
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        shell: {
            options: {
                stderr: false
            },
            target: {
                command: 'node server.js'
            }
        },
        typescript: {
            base: {
                src: ['app/modules/**/*.ts'],
                dest: 'app/build/app.js',
                options: {
                    watch: 'app/modules/**/*.ts',
                    target: 'es5'
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/build/main.css': 'app/styles/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['app/styles/**/*.scss'],
                tasks: ['sass']
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['watch', 'typescript', 'shell']
        }
    });

    grunt.registerTask('serve', ['sass', 'concurrent']);
};