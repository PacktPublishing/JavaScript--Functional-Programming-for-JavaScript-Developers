var Subject = ( function(  ) {
   function Subject() {
     this.observer_list = [];
   }
   // this method will handle adding observers to the internal list
   Subject.prototype.add_observer = function ( obj ) {
     console.log( 'Added observer' );
     this.observer_list.push( obj );
   };
   Subject.prototype.remove_observer = function ( obj ) {
     for( var i = 0; i < this.observer_list.length; i++ ) {
       if( this.observer_list[ i ] === obj ) {
         this.observer_list.splice( i, 1 );
         console.log( 'Removed Observer' );
       } 
    }
  };
  Subject.prototype.notify = function () {
     var args = Array.prototype.slice.call( arguments, 0 );
     for( var i = 0; i<this.observer_list.length; i++ ) {
       this.observer_list[i].update(args);
     } 
  };
  return Subject;
})();