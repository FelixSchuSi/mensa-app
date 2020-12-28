# Go Image Store
# Build
# Run
## Environment Variables
|Name|Example|Possible Values|Description|
|----|-------|---------------|-----------|
|SKIP_AUTH|true|true|JWT Authentication will be skipped if true. If variable is not set oder not equal to "true" it will treated as "false"|
|URL|https://test.de|URLs w/ protocol|Used for creation of Embed URLs|
|JWT_SECRET|mysecret|-|Secret for JWT Token Validation (HMAC)|

# Routes
## GET /media
## GET /media/<id>
## GET /raw/<id>.<ext>
## POST /media
## DELETE /media/<id>