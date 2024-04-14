import { NodeSDK } from '@opentelemetry/sdk-node';
import { Resource } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import {
  SentrySpanProcessor,
  SentryPropagator,
} from '@sentry/opentelemetry-node';

const sdk = new NodeSDK({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'next-app',
  }),
  spanProcessors: [new SentrySpanProcessor()],
  textMapPropagator: new SentryPropagator(),
});

sdk.start();
