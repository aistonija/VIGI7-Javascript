/**
What is HTTP?

HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.

HTTP is the command language that the devices on both sides of the connection must follow in order to communicate.

In this situation, your computer, which is making the request, is called the client. The URL you are requesting is the address that belongs to the server.

Once the TCP connection is established, the client sends a HTTP GET request to the server to retrieve the webpage it should display. 
 */

/**

Making Requests

REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

an HTTP verb, which defines what kind of operation to perform

a header, which allows the client to pass along information about the request

a path to a resource
    
an optional message body containing data
 */

/**
 *
HTTP Verbs

There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

GET — retrieve a specific resource (by id) or a collection of resources
    
POST — create a new resource
    
PUT — update a specific resource (by id)
    
DELETE — remove a specific resource by id

 */

/**
HTTP status codes

200 (OK) 	This is the standard response for successful HTTP requests.

201 (CREATED) 	This is the standard response for an HTTP request that resulted in an item being successfully created.

204 (NO CONTENT) 	This is the standard response for successful HTTP requests, where nothing is being returned in the response body.

400 (BAD REQUEST) 	The request cannot be processed because of bad request syntax, excessive size, or another client error.

403 (FORBIDDEN) 	The client does not have permission to access this resource.

404 (NOT FOUND) 	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.

500 (INTERNAL SERVER ERROR) 	The generic answer for an unexpected failure if there is no more specific information available.
 */

/**
For each HTTP verb, there are expected status codes a server should return upon success:

GET — return 200 (OK)
    
POST — return 201 (CREATED)
    
PUT — return 200 (OK)
    
DELETE — return 204 (NO CONTENT) If the operation fails, return the most specific status code possible corresponding to the problem that was encountered.

 */

/**
What is CRUD?

Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.

CRUD and REST

In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively. These are the fundamental elements of a persistent storage system.

 */
