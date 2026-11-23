# Dockerfile - Deploy SchemeSetu with PHP 8.2 & Apache on Render / Fly.io / Cloud Run
FROM php:8.2-apache

# Enable Apache rewrite module
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy all project files
COPY . /var/www/html/

# Expose standard port
EXPOSE 80

CMD ["apache2-foreground"]
