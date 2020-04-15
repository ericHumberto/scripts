jQuery('a').filter(function( index ) {
    if(this.innerHTML === "Legenda") {
        return true;
    }
  }).each(function( index ) {
    console.log(this);
    window.open(this);
});
