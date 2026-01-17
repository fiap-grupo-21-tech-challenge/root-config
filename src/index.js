import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@grupo21/shared-react',
  app: () => System.import('@grupo21/shared-react'),
  activeWhen: ['/']
});

registerApplication({
  name: '@grupo21/navbar',
  app: () => System.import('@grupo21/navbar'),
  activeWhen: ['/']
});

registerApplication({
  name: '@grupo21/landing-page',
  app: () => System.import('@grupo21/landing-page'),
  activeWhen: ['/']
});

registerApplication({
  name: '@grupo21/sign-in',
  app: () => System.import('@grupo21/sign-in'),
  activeWhen: ['/sign-in']
});

registerApplication({
  name: '@grupo21/sign-up',
  app: () => System.import('@grupo21/sign-up'),
  activeWhen: ['/sign-up']
});

registerApplication({
  name: '@grupo21/balance',
  app: () => System.import('@grupo21/balance'),
  activeWhen: ['/balance']
});

registerApplication({
  name: '@grupo21/transactions',
  app: () => System.import('@grupo21/transactions'),
  activeWhen: ['/transactions']
});

start();
