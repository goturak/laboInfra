# Step 1

## Architecture
* In this step, we use the Apache's httpd web server to serve content on port 80.
* It uses the `php:7.2-apache` docker image, as stated in the `Dockerfile`.
* The `Dockerfile` is used to transfer the content of the `content` folder into  `/var/www/html/`.
* The `content` folder contains our sources.

## Website
* Our website consists on some jokes displayed.
* Our website uses the Grayscale theme that can be found there: https://startbootstrap.com/themes/grayscale/

## Usage
* Go to the folder containing the `Dockefile` and write the following command `docker build -t res/apache-static`.
* Then, run `docker run -d res/apache-static`.
* The docker container is now running at the default address that docker uses, and can be used to serve the content of the website on port 80.
