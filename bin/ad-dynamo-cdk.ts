#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { AdDynamoCdkStack } from "../lib/ad-dynamo-cdk-stack";
require("dotenv").config();

const { CF_STACK_NAME, ENV, OWNER } = process.env;
const suffix = ENV === "dev" ? `${ENV}-${OWNER}` : `${ENV}`;
const buildTimestamp = Date.now().toString();

const app = new cdk.App();

const deployDynamodb = new AdDynamoCdkStack(app, `${CF_STACK_NAME}-${suffix}`, {
  buildTimestamp,
  stackName: `${CF_STACK_NAME}-${suffix}`,
  tags: {
    application: "assisted-design",
    env: ENV || "dev",
    group: "shared",
    owner: OWNER || "kcheng"
  }
});
