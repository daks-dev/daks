import type { NavSite } from 'daks-svelte/types';

const config: NavSite = {
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
        ]
      }
    ],
    pages: [
      '/svelte',
      '/tailwindcss',
      '/components',
      '/components/carousel',
      '/components/lightbox',
      '/components/gallery',
      '/components/menu',
      '/components/select'
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
    ],
    pages: [
      '/privacy'
    ]
    }
};

export const map = [
  ...(config.navbar.pages ?? config.navbar.links.map((el) => el.href)),
  ...(config.footer.pages ?? [])
];

export default config;
