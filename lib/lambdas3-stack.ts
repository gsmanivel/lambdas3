import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3}  from 'aws-cdk-lib';
import { aws_lambda as lambda} from 'aws-cdk-lib';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications'
 

export class Lambdas3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create S3 Bucket
    const bucket = new s3.Bucket(this,"mylambdabucket",{
      bucketName:"mylambdabucket001"
    });

    //Create Lambda Function
    const mylambda = new lambda.Function(this, "s3eventtriggerLambda",{
      runtime:lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset("./lambda"),
      handler:"myfirstlambda.handle"
    });

    //Add Bucket Notification to trigger Lambda when object is created in S3 bucket
    bucket.addEventNotification(s3.EventType.OBJECT_CREATED,new s3n.LambdaDestination(mylambda));
 
  }
}
