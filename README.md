# DKAN to CSV
A middleware / reverse-proxy that converts DKAN DataStore responses to CSV. CKAN
and DKAN only support JSON, XML, and JSONP response formats. This microservice
converts those responses to CSV format.

## Usage
1. [Install serverless][1]
2. Run `serverless deploy` to deploy to AWS

Note: This could also be deployed to Azure or OpenWhisk per the [serverless docs][2].

[1]: https://serverless.com/framework/docs/providers/aws/guide/installation/
[2]: https://serverless.com/framework/docs/
