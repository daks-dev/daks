const config = {
  navbar: {
    links: [
      {
        href: '/svelte',
        label: 'Svelte'
      },
      {
        href: '/tailwindcss',
        label: 'Tailwind CSS'
      },
      {
        href: '/components',
        label: 'Components',
        links: [
          {
            href: '/carousel',
            label: 'Carousel'
          },
          {
            href: '/lightbox',
            label: 'Lightbox'
          },
          {
            href: '/gallery',
            label: 'Gallery'
          },
          {
            href: '/menu',
            label: 'Menu'
          },
          {
            href: '/select',
            label: 'Selet'
          }
        ],
        pages: [
          '/tailwindcss',
          '/svelte',
          '/components',
          '/components/carousel',
          '/components/lightbox',
          '/components/dropdown',
          '/components/select'
        ]
      }
    ]
  },
  footer: {
    copylink: {
      href: '/',
      label: 'DAKS&nbsp;DEV'
    },
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'ic:outline-settings'
      }
    ]
  }
};

export default config;
