$(function() {
    // more list effect.


    // lazyload
    $("div.sub img").lazyload({
        'effect': 'fadeIn',
        'threshold': 120,
        'skip_invisible': false
    });

    // item click event
    $('.sub').css('cursor', 'pointer').click(function(e) {
        e.stopPropagation();
        var ele = $(this).children('img')[0];
        search(ele);
    });

    // search input focus
    $('#kw').on('focus', function() {
        $(this).css({
            'backgroundColor': '#4C4C4C',
            'transition': 'all 0.5s ease'
        });
        $(this).siblings('.searchicon').hide();
    });

    $('#kw').on('blur', function() {
        $(this).css({
            'backgroundColor': '',
            'transition': 'all 0.5s ease'
        });
    });

    // icon title hover
    $('.sub').hover(function() {
        $(this).css({
            'transition': 'all 0s ease',
            'background': '#00B388'
        }).find('.subname').css('color', 'white');
    }, function() {
        $(this).css('background', '').find('.subname').css({
            'color': '',
            'transition': 'all 0s ease'
        });
    });

    // check enter key
    $('body').on('keydown', function(e) {
        if (e.keyCode === 13) {
            var keyword = $('#kw').val();
            if ($('#kw').is(':focus') && keyword !== '') {
                var url = $().attr('openUrl');
                window.open('https://www.baidu.com/s?wd=' + keyword);
            }
        }
    });

    // catalog hover
    $('div.catalog>.sub:nth-child(9)').mouseenter(function() {
        $(this).siblings('div.more_list').fadeIn(200);
        $(this).find('img.cover_div').hide();
        $(this).parent('div.catalog').css({
            'transition': 'all 0.2s ease 0.04s',
            'boxShadow': '0px 4px 20px rgba(0, 0, 0, 0.6)',
            'background': '#333333'
        });
    });

    // catalog hover effect
    $('div.catalog').mouseleave(function() {
        $(this).find('div.more_list').fadeOut(200).delay(0);
        $(this).find('img.cover_div').fadeIn(200);
        $(this).css({
            'transition': 'all 0.2s ease 0.04s',
            'boxShadow': '',
            'background': ''
        });
    });


    // comment toggle
    $('#comment_box a').click(function(e) {
        $('#disqus_thread').toggle();
        return false;
    });

});