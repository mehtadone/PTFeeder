module.exports = {
    title: 'PT Feeder Docs',
    description: 'Everything you need to know about Profit Trailer\'s best buddy. Be sure to read their wiki too.',
    base: '/PTFeeder/',
    themeConfig: {
        repo: 'mehtadone/PTFeeder',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: 'true',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'General', link: '/general' },
          { text: 'Installation', link: '/installation' },
          { text: 'Configuration', link: '/configuration' },
          { text: 'Problem Solving', link: '/problemsolving' },
          { text: 'Release Notes', link: '/releasenotes' },
          { text: 'PT Wiki', link: 'https://wiki.profittrailer.com/doku.php' },
        ],
        sidebar: [
            '/',
            '/configuration'
          ]
      }
}