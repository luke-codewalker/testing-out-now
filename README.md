# Testing out NOW

This repository contains two tiny projects I made over my morning coffee to test out deployment with [NOW](https://zeit.co/now).

## node-app

`node-app` is a really simple [NodeJS](https://nodejs.org/) app utilizing [micro](https://www.npmjs.com/package/micro) that just gives you back a random UNIX timestamp every time you call it.

To run it locally:

    cd node-app
    npm i && npm start

Then you should be able to request yourself a random date at `http://localhost:3000`.

To deploy it:

    cd node-app
    now

Yes, that's how easy it is! Granted you have downloaded the `now` CLI and registered an account.

## static-site

I also wanted to try out deploying a static website to [NOW](https://zeit.co/now) so I whipped up this page. It even makes use of our random date microservice! You can check it out here (random-date.now.sh)[https://random-date.now.sh].

You can also view it locally. Just spin up the server as described above and then for example:

    cd static-site
    python -m http.server

Or use any other tool you like for locally hosting static sites.

Deployment is as easy as with `node-app`. Just go inside the directory and use `now`.
