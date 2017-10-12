(function() {
    var documentVar = $(document);
    var parallax = $('header.box');
    var parallaxText = $('div.logo');

    documentVar.on('scroll', function() {
        var currScrollPos = documentVar.scrollTop();
        parallax.css('background-position', '0 ' + -currScrollPos/3 + 'px');
        parallaxText.css({
            'transform' : 'translate(0px, '+ currScrollPos /20 + '%)'
        });
    });
})();
