export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6211db29335c6a81f3519a7c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jmn17fme',
                  apiId: '2e4d610e-9bec-4d60-a36d-57d65e640e91'
                },
                {
                  buildHookId: '6211db29b9b1c91e45926a70',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7kqsx4vi',
                  apiId: '755213f8-3f50-44f9-9931-c45c8e05278e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UtkarshHere/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7kqsx4vi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
