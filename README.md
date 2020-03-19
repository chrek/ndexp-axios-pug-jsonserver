# ndexp-axios-pug-jsonserver

A Node/Express project with Pug as the template engine
------------------------------------------------------

This site is using Node.js with Express Web Server and the json-server package

Json-server
-----------
With the json-server, a db.json file populated with json data is created and used in a REST API in oder to perform CRUD operations.

Pug
---
Pug is a template engine for Node and for the browser. 

## Implementation:

1. Set up Express with Pug as template engine
2. Populate the db.json file with json data
3. Use axios - a popular HTTP client to fetch the data from the json-server
4. Make the data available to the Pug template for display
5. Template inheritance (The index.pug extends the layout.pug and also includes a reusable block with mixins (views\mixins\_tableRow.pug)

## To test the site locally:

1. Start the Express Server using:
`node app.js`
Or
 this with nodemon installed:
`nodemon app.js`

2. Start json-server on port 3001 and watch the database file for changes using the following commands:

  - `json-server --watch db.json -p=3001`

3. With the two servers running, use the browser to access the app at `http://localhost:3000`

<hr>

## References

1. [sitepoint](https://www.sitepoint.com/a-beginners-guide-to-pug/)
2. [zetcode](http://zetcode.com/javascript/jsonserver/)



