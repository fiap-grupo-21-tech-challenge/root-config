import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@grupo21/shared-react',
  app: () => System.import('@grupo21/shared-react'),
  activeWhen: ['/']
});

registerApplication({
  name: '@grupo21/navbar',
  app: () => System.import('@grupo21/navbar'),
  activeWhen: ['/navbar']
});

registerApplication({
  name: '@grupo21/landing-page',
  app: () => System.import('@grupo21/landing-page'),
  activeWhen: ['/landing-page']
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
  name: '@grupo21/upload-files',
  app: () => System.import('@grupo21/upload-files'),
  activeWhen: ['/upload-files']
});

start();
