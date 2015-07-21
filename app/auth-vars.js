var tokenGenerator = new FirebaseTokenGenerator("1BD0iLrcpDDiyOu6l3xqZvOFuRvcbKmWibEGjUwC");
var token = tokenGenerator.createToken({ "uid": "1"});


// spotify secrets
// var SPOTIFY_CLIENT_ID = "b1e80c85dc8641d28988fdd20766485f";
// var SPOTIFY_CALLBACK_URI = 'http://localhost:4000';
// var SPOTIFY_SCOPE = 'user-read-private playlist-read-private playlist-modify-private playlist-modify-public';
 var SPOTIFY_AUTH_TOKEN = token;

