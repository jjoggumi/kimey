$(function () {   
  
    $('.hero').slick({ 
        infinite: true, 
        autoplay: false, 
        dots: true,
        arrows:false,
        fade: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i == '0') {
              a = "Unique";
              b = "Idea";
            } else if (i == '1') {
              a = "Trandy";
              b = "Design";
            } else if (i == '2') {
              a = "Smart";
              b = "Code";
            }
            return '<a class="dot"><span class="summary">' + a + '</span><span class="keyword">' + b + '</span><span class="ico"></span></a>';
        },
    });
    
    var slickset = {
        infinite: true, 
        autoplay: false, 
        slidesToShow: 5, 
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 768,
              settings: { 
                slidesToShow: 1, 
                slidesToScroll: 1,
              }
            }
        ]
    };
    $('#p2023').slick(slickset);
    $('#p2021').slick(slickset);
    $('#p2020').slick(slickset);
    $('#p2019').slick(slickset);
    $('#p2017').slick(slickset);
    $('#p2016').slick(slickset);
	
    $('.navbar_toggler').click(function(){
        $('.navWrap').toggleClass("on");
    });

    // nav menu 
    $('.navbar_nav a').on('click', function() {
    $('.navbar_nav a').removeClass('on');
    $(this).addClass('on');
    });

    // fullpage customization
    new fullpage('#fullpage', {
    anchors: ['heroS', 'aboutS', 'historyS', 'portfolioS', 'contactS'],
    credits: { 
              enabled: false, 
              label: 's', 
              position: 'right'
        },
    });
    
  //TAB
    $('.tablinks').click(function(){
        var target = $(this).attr('data-target');
        $(this).siblings('.tablinks').removeClass("active");
        $(this).addClass("active");
        $(this).closest('.tab').siblings('.tabCon').children('.tabcontent').removeClass('active'); 
        $('#' + target).addClass('active')
    });
  
});