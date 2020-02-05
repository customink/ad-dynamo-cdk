import * as cdk from "@aws-cdk/core";
import dynamodb = require("@aws-cdk/aws-dynamodb");

interface AdDynamoCdkStackProps extends cdk.StackProps {
  buildTimestamp: string;
  stackName: string;
}

export class AdDynamoCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: AdDynamoCdkStackProps) {
    super(scope, id, props);

    const dynamodbTable = new dynamodb.Table(this, props.stackName, {
      tableName: `ad_levers_${props.stackName}`,
      partitionKey: {
        name: "lever",
        type: dynamodb.AttributeType.STRING
      }
    });
  }
}
