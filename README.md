# RESTCMS
A Lightweight, Simple, RESTful API CMS system

## Setup

## Dependencies
   - MongoDB v3.4+
   - NodeJS v9.3.0+
   
### Configuration
   - Copy `config.js.example` to `config.js` 
   - Edit `config.js`
        - `database`:MongoDB Connection URI, default:`mongodb://localhost:27017/restcms`
        - `jwtSecret`:Secret for JWT Token, default:`restcms` **HIGHLY RECOMMEND CHANGE THIS DUE TO SECURITY ISSUE!**
   - `npm install`
   - `node migrate.js`
### Run
   
#### Run API Server
   (No `npm install`,assume you did everything in [Configuration](#configuration))
   
    $ npm run start
    
API Server Listen @ port `3000` (Port can be changed in `/bin/www`)

#### Compile API Documentation

    $ cd docs
    $ npm install
    $ npm run build
    
Compiled API Documentation @ `/docs/index.html`
