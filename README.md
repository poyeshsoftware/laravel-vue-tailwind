## Setup Project

A sample boilerplate simple book store project including the following technologies :
 
`php / Laravel backend , mysql db , vue.js , vuex , vuetify and tailwind.css`

###Backend :

Using JsonResource to shape apis , Request objects to validate inputs ,phpmyadmin to login to database without using any paid software. laravel sanctum for having cookie session login method at the same time having bearer token method for mobile users.

###Front-end :

Using vuetify , Vuex store , i18n for vue translations , tailwind css with prefix to make it working with vuetify and the ability to have authorized routes only for logged in users.

### Setup steps :

1. run `composer install`
2. run `npm install`
3. run docker-compose command : `docker-compose -f docker-compose-dev.yaml up -d`
4. make a `.env` file and set it up with your mysql info or use existing env file
5. run `php artisan key:generate`
6. run `php artisan storage:link`
7. run `php artisan migrate:fresh`
8. run `php artisan db:seed` to seed the database
9. run `php artisan serve`
10. run in a new command line tab `npm run watch`
11. open the app and have some fun :)
 - username : `info@test.com`
 - password : `123123`
