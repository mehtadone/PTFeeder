module.exports = {
    title: 'PT Feeder Docs',
    description: 'Everything you need to know about Profit Trailer\'s best buddy',
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
          { text: 'Problem Solving', link: '/problem-solving' },
          { text: 'Release Notes', link: '/release-notes' },
        ],
        sidebar: [
            '/',
            '/configuration'
          ]
      }
}