FROM php:7.2-apache


RUN apt-get update && \
	apt-get install -y vim
	

ADD setup.sh /var/setup.sh
COPY template /var/apache2/template

COPY conf/ /etc/apache2
CMD ["chmod","+x","/var/setup.sh"]
CMD ["/var/setup.sh"]

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*

