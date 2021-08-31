const Sentry = require('@sentry/serverless');

const handler = (event, context) => {
    return {
      statusCode: 200 ,
      body: "works"
    };
};

exports.handler = Sentry.AWSLambda.wrapHandler(handler, {
  captureTimeoutWarning: false,
});
