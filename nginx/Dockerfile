FROM nginx

RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

#
#Using an external image as a “stage”
#
COPY --from=zallegro/vue-chess-img:latest /usr/src/app/dist/static /var/www/public/static

COPY ./nginx.conf /etc/nginx/nginx.conf
