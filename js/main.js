// function getAjax(key) {
//     var _data;
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             $.ajax({
//                 url: "http://139.129.108.5:8090/api/web/configObject",
//                 type: "POST",
//                 data: {
//                     objKey: key,
//                 },
//                 dataType: 'json',
//                 success: function (res) {
//                     _data = res.data.objValue
//                     resolve($.parseJSON(_data))
//                 }
//             })
//         }, 10)
//     });
$('.desc').click(function(){
    $('.app').css('display','none')
    $('.web').css('display','block')
})
$('.no_desc').click(function(){
    $('.web').css('display','none')
    $('.app').css('display','block')
})



// }
// (function getJson() {
//     getAjax("WWW").then(json => {
//         $('.brand-heading').text(json.title) +
//             $('.intro-text').text(json.title_slogan)
//         var pages = $("a[class='page-scroll']");
//         for (var i = 0; i < pages.length; i++) {
//             pages[i].textContent = json.navigation[i].title
//         }
//     })
//     services()
//     about()
// })()
// function services() { //服务分布 
//     getAjax("services").then(json => {
//         create_node(json)
//     })
// }
// function create_node(json) {
//     var row = $(".services_node")
//     var arr = []
//     var _div = []
//     var className = ["fa-bullseye", "fa-code", "fa-laptop", "fa-rocket", "fa-bullseye", "fa-code", "fa-laptop", "fa-rocket"]; //支持8个
//     for (var key in json) {
//         arr = json[key]
//     }
//     for (var i = 0; i < arr.length; i++) {
//         _div.push(`<div class="col-md-3 col-sm-6 service"><i class="fa ${className[i]}"></i>
//                         <h4><strong>${json[key][i].business}</strong></h4>
//                         <p>${json[key][i].introduce}</p>
//                     </div>`)
//         // $("p:first").addClass("intro");
//     }
//     row.html(_div)
// }
// function about() { //  关于我们
//     var arr = []
//     getAjax("about").then(json => {
//         for (var key in json) {
//             arr = json[key]
//         }
//         var a = $("p[class='about-inf']")
//         arr.forEach((v, i) => {
//             $(".about-inf")[i].textContent = v.tell;
//         })
//     })
// }
// function portfolio() { // 公司简介

// }
// function team() { //技术团队

// }
// function testimonials() {   //公司发展

// }
// function contact() {  //给予建议

// }
function main() {

    (function () {
        'use strict';

        // jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        // Testimonial Slider
        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        $(document).ready(function () {
            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });

        });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
        $(window).load(function () {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function () {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });

        // ****************************************************************
        // counterUp
        // ****************************************************************

        $(document).ready(function ($) {
            if ($("span.count").length > 0) {
                $('span.count').counterUp({
                    delay: 10, // the delay time in ms
                    time: 1000 // the speed time in ms
                });
            }
        });

  	/*====================================
    Pretty Photo
    ======================================*/
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });

    }());


}
main();




// $.ajax({
//     url: "http://139.129.108.5:8090/api/web/configObject",
//     type: "POST",
//     username: 'ugghoho',
//     data: {
//         "originuri": "Lw==",
//         "username": "ugghoho",
//         "password": "wangsen110"
//     },
//     dataType: 'json',
//     success: function (res) {
//         _data = res.data.objValue
//         resolve($.parseJSON(_data))
//     }
// })