// 'use strict';

const request = require('request');


// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '9dc68c94854f4ee192f689619dda5b93';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
    "https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en";

const imageUrl =
    "https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Health/June/CR-Health-InlineHero-Foods-That-Are-Healthier-Cooked-09-17";

// Request parameters.
const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});