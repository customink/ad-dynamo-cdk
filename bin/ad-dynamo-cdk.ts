#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AdDynamoCdkStack } from '../lib/ad-dynamo-cdk-stack';

const app = new cdk.App();
new AdDynamoCdkStack(app, 'AdDynamoCdkStack');
