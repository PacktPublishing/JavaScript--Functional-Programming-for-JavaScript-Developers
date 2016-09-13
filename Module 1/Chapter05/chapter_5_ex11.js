function Tweeter() {
     var subject = new Subject();
     this.addObserver = function ( observer ) {
       subject.add_observer( observer );
     };
     this.removeObserver = function (observer) {
       subject.remove_observer(observer);
     };
     this.fetchTweets = function fetchTweets() {
       // tweet
       var tweet = {
         tweet: "This is one nice observer"
       };
       // notify our observers of the stock change
       subject.notify( tweet );
     };
}

var TweetUpdater = {
     update : function() {
       console.log( 'Updated Tweet -  ', arguments );
     }
 };
var TweetFollower = {
  update : function() {
    console.log( '"Following this tweet -  ', arguments );
  }
};

var tweetApp = new Tweeter();
tweetApp.addObserver( TweetUpdater );
tweetApp.addObserver( TweetFollower );
tweetApp.fetchTweets();
tweetApp.removeObserver(TweetUpdater);
tweetApp.removeObserver(TweetFollower);
