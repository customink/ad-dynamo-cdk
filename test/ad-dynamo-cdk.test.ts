import {
	expect as expectCDK,
	matchTemplate,
	MatchStyle
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import AdDynamoCdk = require("../lib/ad-dynamo-cdk-stack");

test("Empty Stack", () => {
	const app = new cdk.App();
	// WHEN
	const stack = new AdDynamoCdk.AdDynamoCdkStack(app, "MyTestStack", {
		buildTimestamp: "timestamp",
		stackName: "test"
	});
	// THEN
	expectCDK(stack).to(
		matchTemplate(
			{
				Resources: {}
			},
			MatchStyle.EXACT
		)
	);
});
