module.exports = {
    plugins: [require.resolve("prettier-plugin-astro")],
    printWidth: 120,
    tabWidth: 4,
    singleQuote: false,
    useTabs: false,
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
