jQuery('a').filter(function( index ) {
    if(this.innerHTML === "1080p") {
        let a = jQuery(this).attr("href");
        return a.startsWith("http://portal");        
    }
  }).each(function( index ) {
    console.log(this);
    window.open(this);
});
