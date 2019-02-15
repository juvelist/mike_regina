// Youtube iframe
getYoutubeVideo = function ( self ) {

    if ( self.hasClass('activated') ) {
        return;
    }

    self.addClass('loading activated');
    var selfId = self.attr('data-id');

    var iframe = $('<iframe/>', {
        // 'class'        : 'dn',
        'wmode'           : 'transparent',
        'width'           : '100%',
        'frameborder'     : '0',
        'src'             : 'https://www.youtube.com/embed/' + selfId + '?autoplay=1&controls=0',
        'allowfullscreen' : 'true',
        'height'          : 234
    });

    self.html( iframe );

    iframe.on('load', function(){
        iframe.fadeIn('slow', function(){
            self.removeClass('loading');
        });
    });

};

$('.podcast__video').click(function(){
    getYoutubeVideo( $(this) );
});