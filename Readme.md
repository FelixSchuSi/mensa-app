# Go Image Store
## Build
Using Go: `go build`
Using Docker: `docker build -t gomagestore:latest .`
## Run
Using Go: `./gomagestore`  
Using Docker: `docker run -d -p 3000:3000 -e JWT_SECRET= -e URL= -e SKIP_AUTH=false gomagestore:latest`

### Environment Variables
|Name|Example|Possible Values|Description|
|----|-------|---------------|-----------|
|SKIP_AUTH|true|true|JWT Authentication will be skipped if true. If variable is not set oder not equal to "true" it will treated as "false"|
|URL|https://test.de|URLs w/ protocol|Used for creation of Embed URLs|
|JWT_SECRET|mysecret|-|Secret for JWT Token Validation (HMAC)|

### Authorization
Service does not implement an authentication mechanism. It will only validate already issued tokens. The issuer will be ignored.
Where to send Token?
* "Authorization" Header
* "X-Session-Token" Header
* "jwt-token" Cookie
## Routes
Overall Errors:
* 403 - Forbidden: JWT not valid
* 401 - Unauthorized: JWT not set
### GET /media
Request a list of all stored files metadata

#### Response
Status: 200  
Possible Errors: 500 - Internal Server Error  
Body:  
```
[
   {
      "metadata":{
         "owner":"",
         "id":"c462fe19-0997-452e-950c-dff656bef39c",
         "size":764617,
         "content_type":"image/png",
         "file_extension":"png",
         "created_date":"0001-01-01T00:00:00Z",
         "tags":null
      },
      "embed_url":"http://localhost:3000/raw/c462fe19-0997-452e-950c-dff656bef39c.png"
   }
]
```
### GET /media/[id]
Request metadata of file with [id] (No file extension!)

#### Response
Status: 200  
Possible Errors: 404 - File Not Found, 500 - Internal Server Error  
```
{
   "metadata":{
      "owner":"",
      "id":"c462fe19-0997-452e-950c-dff656bef39c",
      "size":764617,
      "content_type":"image/png",
      "file_extension":"png",
      "created_date":"0001-01-01T00:00:00Z",
      "tags":null
   },
   "embed_url":"http://localhost:3000/raw/c462fe19-0997-452e-950c-dff656bef39c.png"
}
```
### GET /raw/[id].[ext]
Get media as binary content respecting content-type header. Specifing the file extension is optional but this will help some browsers to properly show content. File extension must match the one stored in metadata.

Possible Errors: 404 - File Not Found, 500 - Internal Server Error  

Response: Binary Content

### POST /media
Store a file. You can use <URL>/ HTML Page to test upload.

#### Request
Type: Multipart Form   
Part name: file
Required part header: Content-Type, Filename
### DELETE /media/[id]
Delete media item.

Possible Errors: 404 - File Not Found, 500 - Internal Server Error  