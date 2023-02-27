import { Nav } from 'daks-svelte';
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
            href: '/dropdown',
            label: 'Dropdown'
          },
          {
            href: '/select',
            label: 'Selet'
          },
          {
            href: '/yandex',
            label: 'Yandex'
          }
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
        label: 'ic:outline-settings',
        disallow: true
      }
    ],
    }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer.links ?? []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
