#setup for res
echo "setup"
echo "static app url: $STATIC_APP"
echo "dynamic app url: $DYNAMIC_APP"

php /var/apache2/template/config_template.php > /etc/apache2/sites-available/001-reverse-proxy.conf
