/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tienda Negocio',
  tagline: 'Tienda Negocio',
  url: 'https://ayuda.tiendanegocio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Tienda Negocio', // Usually your GitHub org/user name.
  projectName: 'Tienda Negocio', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Tienda Negocio',
        src: 'img/logo-complete-invert.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'primeros-pasos',
          position: 'right',
          label: 'Tutoriales',
        },
        {
          href: 'https://panel.tiendanegocio.com',
          label: 'Ir al panel', 
          position: 'right',
          className: 'button button-header'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tienda Negocio`,
    },
    /**
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: 'var(--ifm-color-primary-dark)', // Defaults to `#fff`.
      textColor: 'var(--ifm-color-primary-light)', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },*/
    colorMode: {
      disableSwitch: true
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'tutoriales',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        language: 'es',
        translations: {
          "search_placeholder": "Buscar...",
          "see_all_results": "Ver todos los resultados",
          "no_results": "Sin resultados.",
          "search_results_for": "Resultados de búsqueda \"{{ keyword }}\"",
          "search_the_documentation": "Buscar en la documentación",
          "count_documents_found": "{{ count }} documento encontrado",
          "count_documents_found_plural": "{{ count }} documentos encontrados",
          "no_documents_were_found": "No se encontraron documentos"
        }
      }
    ]
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es']
  }
};
