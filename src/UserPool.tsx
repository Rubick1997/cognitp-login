import { CognitoUserPool } from "amazon-cognito-identity-js";
const COGNITO_APP_CLIENT_ID = "2lnieqfjkaif2kiv8kjc1sq4n5";
const COGNITO_USER_POOL_ID = "us-east-2_SfzBlXTKl";

const poolData = {
  ClientId: COGNITO_APP_CLIENT_ID as string,
  UserPoolId: COGNITO_USER_POOL_ID as string,
};

export default new CognitoUserPool(poolData);
