import * as cdk from "@aws-cdk/core";

import * as Buckets from "./stacks/buckets";

/* tslint:disable:no-unused-expression */

const app = new cdk.App();

const stageBucketProps: Buckets.Props = {
  artifacts: { s3BucketName: "aws-cognito-sam-pipeline-artifacts" },
  ui: { s3BucketName: "aws-cognito-sam-ui-staging" },
  env: { region: "us-west-2" },
  tags: {
    project: "Gauntlet BP Tracker",
    stage: "Staging"
  },
  description: "S3 Buckets"
};
new Buckets.Stack(app, "aws-cognito-sam-buckets", stageBucketProps);

app.synth();
