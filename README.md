# [BakedMaps](http://www.baked-maps.com)

**BakedMaps** is a clone of [WeedMaps](http://www.weedmaps.com), utilizing the technologies found on weedmaps' page.

![page-gif](/bakedmaps-home-gif.gif)

## Getting Started
- To begin using BakedMaps anybody will be able to find bakeries in a designated area, and see what they have to offer.
- Bakeries (dispensaries) and their menus are updated daily. and represent real information.
- If a user finds a bakery they like, they can review or follow it. But they must sign up first.

## MVP Functionality
* Splash Page with carousels
* Bakery Map with custom markers
* Bakery Show Page
* User Show Page
* Sign up with Demo/Email
* Create Reviews
* Create Follows

## Authors
- [Jon Bent](https://github.com/jonbent)

## Dynamics
* Schedule
 * 9am - 10pm
* Stand-Up
 * 10am

* Check-In Protocol
  * Previous work
  * Future work
  
## Next Steps

- MenuItem show page
- Favorites slice
- Posts slice
- User settings page
- get svg map images for carousels
- Deals slice
- News Slice
- Brands Slice

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
  * ruby 2.5.1
  * rails 5.2.4.1
* System dependencies
  * node >= 10
* Configuration
  * General
    * Add master.key to config folder
  * Development
    * bundle install
    * yarn install
  * Production
    * create user on linux system
    * RAILS_ENV=production bundle install --deployment --without development test
    * RAILS_ENV=production bundle exec rails assets:precompile
    * create PassengerFile.json with ```
        {
          port:80, 
          demonize: true, 
          envvars: {
            DB_PASSWORD: 'XXXX...'
          },
          user: linux-username
* Database creation
  * Development
    * rails db:create
    * rails db:migrate
  * Production
    * create ROLE and database
       * ROLE HAS to be the same as linux-username
       * ROLE should have password, which is given to PassengerFile.json
       * ROLE should have all permissions for given database
       * configure database.yml to have new DB username

* Deployment instructions
  * `ssh adminuser@yourserver.com`
  * `sudo adduser myappuser`
  * `sudo mkdir -p /var/www/myapp`
  * `sudo chown myappuser: /var/www/myapp`
  * `cd /var/www/myapp`
  * `sudo -u myappuser -H git clone git://github.com/username/myapp.git code`
  * `sudo -u myappuser -H bash -l`
  * `rvm use ruby-2.5.1`
  * `cd /var/www/myapp/code`
  * `bundle install --deployment --without development test`
  * `nano config/database.yml`
    * edit with given info above
  * `bundle exec rake secret`
    * add given secret to master.key for SECRET_KEY_BASE
  * `chmod 700 config db`
  * `chmod 600 config/database.yml`
  * `bundle exec rake assets:precompile db:migrate RAILS_ENV=production`
  * `cd /var/www/myapp/code`
  * `nano Passengerfile.json`
    * Give info above.
  * `exit`
  * `cd /var/www/myapp/code`
  * `rvmsudo bundle exec passenger start`
* ...
