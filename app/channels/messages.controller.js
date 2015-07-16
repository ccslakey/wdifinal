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
            
            Spotify.search(messagesCtrl.spotSearchText, 'artist', 0)
                .then(function(data){
                    console.log(data);
                    messagesCtrl.songRes = data;
                });
    
    }



}]);