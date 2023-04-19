#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkTypescriptStack } from '../lib/cdk-typescript-stack';

const app = new cdk.App();
new CdkTypescriptStack(app, 'CdkTypescriptStack', {
  env: {
    account: '123456789012',
    region: 'us-west-2',
  },
});
