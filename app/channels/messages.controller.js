app.controller('MessagesCtrl', ['profile', 'channelName', 'messages', 'Spotify', '$scope', 'modalService',
    function(profile, channelName, messages, Spotify, $scope, modalService){
    
    var messagesCtrl = this;

    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;

    messagesCtrl.message = '';

    messagesCtrl.sendMessage = function () {
    	if(messagesCtrl.message.length > 0) {
    		messagesCtrl.messages.$add({
    			uid:profile.$id,
    			body: messagesCtrl.message,
    			timestamp: Firebase.ServerValue.TIMESTAMP
    		}).then(function () {
    			messagesCtrl.message = '';
    		});
    	}
        Spotify.search('Nirvana', 'artist').then(function (data) {
          console.log(data);
        });
    };

    messagesCtrl.spotSearch = function () {
                // save this stuff- it gives you the basic json blob and resets search text
            Spotify.search(messagesCtrl.spotSearchText, messagesCtrl.spotSearchType, 0)
                .then(function(data){
                    // cake
                    console.log(data);
                    messagesCtrl.songRes = data;
                    messagesCtrl.spotSearchText = '';
                    messagesCtrl.spotSearchType = '';
                });
    // handle with functions
     // Spotify.search(messagesCtrl.spotSearchText, messagesCtrl.spotSearchType, 0)
     //            .then(handleData(data){
                    
     //            });

    }


     messagesCtrl.handleData = function (searchObject){
        if(searchObject.artists){messagesCtrl.handleArtist(searchObject)}
        if(searchObject.tracks){messagesCtrl.handleTrack(searchObject)}
        if(searchObject.playlists){messagesCtrl.handlePlaylist(searchObject)}
        if(searchObject.albums){messagesCtrl.handleAlbum(searchObject)}
        }

    messagesCtrl.handleArtist = function (){
        console.log(data.artists);
        messagesCtrl.songRes = data;
        messagesCtrl.spotSearchText = '';
        messagesCtrl.spotSearchType = '';
    }



    messagesCtrl.handleTrack = function (){
        console.log(data.tracks);
        messagesCtrl.songRes = data;
        messagesCtrl.spotSearchText = '';
        messagesCtrl.spotSearchType = ''; 
    }


    messagesCtrl.handleAlbum = function (){
        console.log(data.albums);
        messagesCtrl.songRes = data;
        messagesCtrl.spotSearchText = '';
        messagesCtrl.spotSearchType = '';
    }
    messagesCtrl.handlePlaylist = function (){
        console.log(data.playlists);
        messagesCtrl.songRes = data;
        messagesCtrl.spotSearchText = '';
        messagesCtrl.spotSearchType = '';
    }



}]);