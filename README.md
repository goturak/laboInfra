# Step 2

## Architecture
* We used Node.js and Express.js to have dynamic content displayed.
* The folder `src` contains the sources of the website.
* The `Dockerfile` is used to copy the content of `node` into `/opt/app/index.js`
* `index.js` is used to generate the content arrays that will be displayed.

## Website
* The website generate up to ten random students using the chance module.

## Usage
* In the src folder, run `npm install` to install dependencies.
* Run `docker build -t res/express-dynamic` where the `Dockerfile` is located.
* Run `docker run -d res/express-dynamic`
* You can now use an http client to connect at the IP delivered by docker to access the website.
