(function($) {

    $('.addcomment form').on('submit', function(e) {
        e.preventDefault();
        var form = $(e.target);

        $.post(form.attr('action'), form.serialize(), function(data) {
            $('.comments').html(data);
            form.find('textarea').val('');
        });
    });

    $('pre code').parent().each(function() {
        var pre = $(this);
        if (!pre.hasClass('prettyprint')) {
            pre.addClass('prettyprint');
        }
    });
    prettyPrint();

})(jQuery);
