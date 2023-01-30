import { addCollection } from '@iconify/svelte/offline';
import { building } from '$app/environment';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom: string[] = [
  // 'svelte-logo'
  // 'bars-scale-bottom',
  // 'blocks-scale',
  // 'blocks-wave'
  // 'dots-scale-rotate'
];
// import.meta.env?.DEV && custom.forEach(async (val) => await import(`./custom/${val}`));

// import './custom/svelte-logo';
// import './custom/bars-scale-bottom';
// import './custom/blocks-scale';
// import './custom/blocks-wave';
// import './custom/dots-scale-rotate';

export default custom;

console.debug('CSR iconify');
