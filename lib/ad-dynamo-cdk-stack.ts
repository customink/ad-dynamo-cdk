import * as cdk from "@aws-cdk/core";
import dynamodb = require("@aws-cdk/aws-dynamodb");

export class AdDynamoCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new dynamodb.Table(this, "ad_levers_cdk", {
      tableName: "ad_levers",
      partitionKey: {
        name: "lever",
        type: dynamodb.AttributeType.STRING
      }
    });
  }
}
