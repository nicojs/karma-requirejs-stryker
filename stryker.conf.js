module.exports = function (config) {
    config.set({
        files: [
            // Add your files here, this is just an example:
            { pattern: 'relative/**/*.js', mutated: true, included: false },
            { pattern: 'test-main.js', mutated: false, included: true },
            { pattern: '+(dependency.js|legacy-library.js|test.js)', mutated: false, included: false },
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        reporter: ['clear-text', 'progress'],
        logLevel: 'info',
        karmaConfig: {
            frameworks: ['jasmine', 'requirejs'],
            browsers: ['Chrome']
        }
    });
}