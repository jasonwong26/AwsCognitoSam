
sam package \
    --template-file lib/template.yaml \
    --s3-bucket aws-cognito-sam-pipeline-artifacts

sam deploy \
    --template-file lib/template.yaml \
    --stack-name aws-cognito-sam \
    --capabilities CAPABILITY_IAM \
    --s3-bucket aws-cognito-sam-pipeline-artifacts \
    --parameter-overrides UserEmail=jasonwong.26@gmail.com
