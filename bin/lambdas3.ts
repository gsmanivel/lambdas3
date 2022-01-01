#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Lambdas3Stack } from '../lib/lambdas3-stack';

const app = new cdk.App();
new Lambdas3Stack(app, 'Lambdas3Stack', {
   
});