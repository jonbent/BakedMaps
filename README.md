# [BakedMaps](http://www.baked-maps.com)

**BakedMaps** is a clone of [WeedMaps](http://www.weedmaps.com), utilizing the technologies found on weedmaps' page.

![page-gif](/bakedmaps-home-gif.gif)

## Getting Started
- To begin using BakedMaps anybody will be able to find bakeries in a designated area, and see what they have to offer.
- Bakeries (dispensaries) and their menus are updated daily. and represent real information.
- If a user finds a bakery they like, they can review or follow it. But they must sign up first.

![search-gif](/searchbar-gif.gif)

## MVP Functionality
* Splash Page with carousels
  * carousels destroy children out of view:
  ```
  componentDidUpdate(prevProps) {
        if (prevProps.rendered && !this.props.rendered){
            setTimeout(() => {
                this.setState({ shouldRender: false })
            }, 300)
        }
        if (!prevProps.rendered && this.props.rendered){
            this.setState({ shouldRender: true })
        }
        
   }
  ```
* Bakery Map with custom markers
* Bakery Show Page
* User Show Page
* Sign up with Demo/Email
* Create Reviews
  * dynamically filled circle svg indicating how well a dispensary is reviewed.
  ```
    const ReviewCircle = ({strokeOffset}) => {
        return (
            <svg
                role="img"
                width="140px"
                height="140px"
                viewBox="0 0 33.6 33.6"
            >
                <title>Circular loading indicator and reviews graph</title>
                <circle cx="16.9" cy="16.9" r="15.91549430918954" fill="transparent" stroke="#E6E6E6" strokeWidth="1.4">
                </circle>
                <circle
                    offset="11"
                    className="path"
                    data-testid="review-circle-svg"
                    cx="16.9"
                    cy="16.9"
                    r="15.91549430918954"
                    fill="transparent"
                    stroke="#F9AE19"
                    strokeWidth="1.4"
                    strokeDasharray="100"
                    transform="rotate(-90, 16.9, 16.9)"
                    style={{
                        strokeDashoffset: strokeOffset,
                        transition: "stroke-dashoffset 1.5s linear 0s"
                    }}
                >
                </circle>
            </svg>
        );
    };
   ```
  ![review-circle](/Jb3wOcv.png)
* Create Follows

![user-show-page](/usershowpage.png)

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

- [x] MenuItem show page
- [ ] Favorites slice
- [ ] Posts slice
- [x] User settings page
- [x] get svg map images for carousels
- [ ] Deals slice
- [ ] News Slice
- [ ] Brands Slice
- [ ] Change from Showing Dispensary information to Bakery Information.

## Setup and Information

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
