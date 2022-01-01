#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NewLambdas3Stack } from '../lib/lambdas3-stack';

const app = new cdk.App();
new NewLambdas3Stack(app, 'NewLambdas3Stack', {
   
});