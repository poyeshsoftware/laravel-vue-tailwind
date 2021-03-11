module.exports = {
    important: true,
    prefix: 'tw-',
    purge: [
        './resources/**/*.php',
        './resources/**/*.vue',
        './resources/**/*.jsx',
        './resources/**/*.js',
        './resources/**/*.scss',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/custom-forms'),
    ],
    corePlugins: {}
}
