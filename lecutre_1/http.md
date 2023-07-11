# HTTP

Hyper _Text_ Transfer Protocol

Client-server protocol for transferring web resources: (HTML files, images, styles, etc.)

Text based protocol. You can transfer music, pictures and other data.

It is request-response based. The client makes request and the server returns a response.

## HTTP Methods:

HTTP defines methods to indicate the desired action to be performed on the identified resource.

- GET: Retrieve/ load a resource
- POST: Creat / store a resource
- PUT: Update a resource
- DELETE: Delete (remove) a resource
- PATCH: Updated resource partially
- HEAD: Retrieve the resource's headers
- OPTIONS: Returns the HTTP methods that the server support for the specified URL

## GET Request:

Request Line: First row has the: http method, uri/ url, and the HTTP protocol version.

Headers:
Meta information about the request:

- Host: api.github.com/
- Accept-Language: en
- Accept-Encoding: gzip, deflate
- User-Agent: Mozzilla/5.0
- Connection: Keep-Alive
- Cache-Control: no-cache

Body: data we want to send to the server.
Empty in the get request

## POST Request:

Same headers and structure

But we have the body.

## HTTP Response

Response line: Protocol version, status code, status message

Response headers:

- Date
- Server: Apache/2.2.14 (Linux)
- Accept-Ranges: bytes
- Content-Length: 84
- Content-Type: text/html

Response body:
some html

## Status Codes

200 - OK
201 - Create
204 - No content
301 - Moved
400 - Bad Request
401 / 403 - Unauthorized
404 - Not Found
409 - Conflict
500 / 503 - Server Error

## Content-Type and Disposition

The Content-Type / Content-Disposition headers specify how the
HTTP request / response body should be processed.

Content-Type: application/json
Content-Type: text/html; charset=utf-8
Content-Type: application/pdf

Content-Disposition: attachement;
filename="Financial-Report-April-2016.pdf
