import * as Sentry from '@sentry/nuxt';

Sentry.init({
  dsn: 'https://aeb86c65c0f8bc43f849b547b2d62db7@o75154.ingest.us.sentry.io/4507295736594432',

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.2,
});