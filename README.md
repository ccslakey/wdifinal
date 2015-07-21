# angularfire SongShare Project
Hosted at: 
https://angchatter.firebaseapp.com
(Not working yet)

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development
* Clone the repo
* Bower install
* Update Firebase Url constant to accept your own firebase endpoint
* Run `grunt` for building and `grunt serve` for preview.


## Testing

Running `grunt test` will run the unit tests with karma.


##Inspiration

"Why might you want to create a collaborative playlist? There are lots of reasons, including the following scenarios:

You're creating a playlist for a big event and want input from several people who'll be attending.
You and a group of friends want to put together a playlist that reflects your collective listening habits at this point in time.
You and your spouse or significant other want to create a playlist to listen to jointly while you're traveling together.
You like and trust the musical taste of your friends, and want them to help broaden your own listening choices." -Jan. 2008, Spotify releases collaborative playlists


Unfortunately, this is not quite what my app does. Originally I had envisioned a chatroom where people could talk about and collaborate on a playlist

Currently, we can only get json data from spotify's api


##Technologies used
* Angular
* Firebase/AngularFire
* Bootstrap
* Grunt
* Auth0/OAuth authentication but it's temporarily being a dummy
* Spotify API
* Angular Spotify Wrapper(https://github.com/eddiemoore/angular-spotify)
* Ui-Router(Angular)

## Unsolved/I didn't get to it
* Rendering out spotify media
* Handling different types of search requests
* Spotify should have had its own custom service in my app to handle these requests

## Pitch Deck-Trello
https://trello.com/b/ea2lbkL7/music-sharing-app

