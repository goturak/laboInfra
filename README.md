# Step 3

## Architecture
* We now use Apache's httpd as a reverse proxy, still listening on port 80.
* The static server used is the same as in step 1.
* The dynamic server used is the same as in step 2.
* The `Dockerfile` is once again used to copy sources from the `conf` folder to the `/etc/apache2` folder.
* The general architecture is that, depending on the request, the first container chooses one of both servers, and display its content. (I.E. GET / HTTP/1.1 access the static server, GET /api/students HTTP/1.1 with the demo.res.ch as hostname).

## Configuration files
* In `001-reverse-proxy.conf`, we give the server a name, s.t. we have to specify the host name.
* The proxy forwards the request to one of both servers specified in the same file.
* We have hardcoded IP adresses there, so make sure to change them accordingly.

## Usage
* docker run -d --name apache-static res/apache-static
* docker run -d --name express-dynamic res/express-dynamic
* docker build -t res/apache-rp 
* docker run -d res/apache-rp
* To access the content use on of both requests specified in Architecture.
