module.exports = {
    title: 'MAND',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/navhome/' },
            // {
            //     text: 'Languages',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         { text: 'Japanese', link: '/language/japanese/' }
            //     ]
            // },
            { text: 'Dinaaxi', link: 'https://dinaaxi.com' },
        ],
        sidebar: [
            {
                title: 'Navigation',   // required
                collapsable: false, // opti/onal, defaults to true
                sidebarDepth: 2,    // optional, defaults to 1
                children: [
                    '/navhome/',
                    '/navcourse/'
                ]
            },
            {
                title: 'Creating Content',
                collapsable: false, // opti/onal, defaults to true
                sidebarDepth: 2,    // optional, defaults to 1
                children: [
                    '/getting-started/',
                    '/course/',
                    '/chapter/',
                    '/section/',
                    '/lesson/',
                    '/assignment/',
                    '/resource/'
                ]
            }
        ]
    }
}