$(function () {


    /*-------------------------------------------
    Load Page
    ---------------------------------------------*/

    $('body').waitForImages({
        finished: function () {
            Website();
            $('body').jKit();
        },
        waitForAll: true
    });


    /*-------------------------------------------
    Ajax link page transitions
    ---------------------------------------------*/

    $("a.ajax-link").live("click", function () {
        $this = $(this);
        var link = $this.attr('href');
        var current_url = $(location).attr('href');

        if (link != current_url && link != '#') {
            $.ajax({
                url: link,
                processData: true,
                dataType: 'html',
                success: function (data) {
                    document.title = $(data).filter('title').text();
                    current_url = link;
                    if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);

                    setTimeout(function () {
                        $('#preloader').delay(50).fadeIn(600);
                        $('html, body').delay(1000).animate({scrollTop: 0}, 1000);

                        setTimeout(function () {

                            $('#ajax-content').html($(data).filter('#ajax-content').html());
                            $('#ajax-sidebar').html($(data).filter('#ajax-sidebar').html());

                            $('body').waitForImages({
                                finished: function () {
                                    Website();
                                    backLoading();
                                    $('.opacity-nav').delay(50).fadeOut(600);
                                },
                                waitForAll: true
                            });
                        }, 1000);
                    }, 0);
                }
            });
        }
        return false;
    });


    /*-------------------------------------------
    When you click back arrow
    ---------------------------------------------*/


    function backLoading() {
        $(window).on("popstate", function () {
            $('body').fadeOut('slow', function () {
                location.reload();
            });
            $('body').fadeIn();
        });
    }

    /*-------------------------------------------
    Load Page - next Open Site
    ---------------------------------------------*/

    function Website() {
        CheckScripts();
        Masonry();
        $('body').jKit();
        backgroundmenu();
        setTimeout(function () {
            $(".preloader").fadeOut(500);
        }, 2000);
        setTimeout(function () {
            $('header').fadeIn();
        }, 500);
    }


    /*-------------------------------------------
    Init and check list scripts
    ---------------------------------------------*/

    function CheckScripts() {

        $(document).ready(function () {
            preloaderCheck();
            Typewriting();
            showGrid();
            sidebarhero();

        });

    }


    /*-------------------------------------------
    Masonry Check Script
    ---------------------------------------------*/

    function Masonry() {
        var $container = $('.portfolio-grid');

        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector: 'li'
            });
        });
    }


    /*-------------------------------------------
    Multi purpose init Background menu
    ---------------------------------------------*/

    function backgroundmenu() {

        $(document).ready(function () {
            if ($("#header-fade").length) {

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 10) {
                        $('header').fadeOut();
                    } else {
                        $('header').fadeIn();
                    }
                });
            }

            if ($("#header-white").length) {

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 10) {
                        $('header').css("background", "white");
                        $('header .logo > a').css("borderBottom", "0");

                    } else {
                        $('header').css("background", "none");
                    }
                });
            }


        });

    }

    /*-------------------------------------------
    Typewriting init script
    ---------------------------------------------*/

    function Typewriting() {

        $(document).ready(function () {
            setTimeout(function () {
                    if ($("#site-type").length) {
                        $(".typewrite span").typed({
                            strings: ['Hi, welcome to my website. <br>' +
                            'Below you will find a showcase of my work including projects and hobbies. <br>' +
                            'You can click on the pictures or view the projects sorted by topic using the menu. <br>' +
                            'I hope you enjoy (-; <br> <br>For best viewing experience please use a desktop version of Google Chrome.'],
                            //<span style='font-size:50px;'>&#128579;</span>
                            typeSpeed: 15,
                            backDelay: 500,
                            loop: false,
                            contentType: 'html', // or text
                            // defaults to false for infinite loop
                            loopCount: false
                        });
                    }

                },
                2500

                // function callback() {
                //     document.getElementById('typeWriteDelay').style.visibility = "visible";
                // }

            );
        });


    }

    //
    // /*-------------------------------------------
    // Typewriting init script
    // ---------------------------------------------*/
    //
    // function TypewritingProj() {
    //
    //
    //     $(document).ready(function(){
    //         setTimeout( function(){
    //             if($("#site-type").length) {
    //                 $(".typeProj span").typed({
    //                     strings: ["Hi, welcome to my website. Below you can find a showcase of my work and hobbies. You can also view project based on specific topics using the menu. I hope you enjoy &#128579;\n"],
    //                     typeSpeed: 1000,
    //                     backDelay: 100,
    //                     loop: false,
    //                     contentType: 'html', // or text
    //                     // defaults to false for infinite loop
    //                     loopCount: false,
    //
    //                 });
    //             }
    //         }, 3000);
    //     });
    // }


    /*-------------------------------------------
    Amazing Fade with scroll Sidebar
    ---------------------------------------------*/

    function sidebarhero() {

        if ($("#hero").length) {
            var fadeStart = 100, fadeUntil = 800, fading = $('#hero');

            $(window).bind('scroll', function () {
                var offset = $(document).scrollTop()
                    , opacity = 0
                ;
                if (offset <= fadeStart) {
                    opacity = 1;
                } else if (offset <= fadeUntil) {
                    opacity = 1 - offset / fadeUntil;
                }
                fading.css('opacity', opacity);
            });
        }
    }


    /*-------------------------------------------
    Open Check Scription
    ---------------------------------------------*/

    function OpenCheck() {
        setTimeout(function () {
            hidePreloader();
        }, 1000);
    }


    /*-------------------------------------------
    Check Preloader
    ---------------------------------------------*/

    function preloaderCheck() {
        showPreloader();
        $(window).load(function () {
            hidePreloader();
        });
    }

    /*-------------------------------------------
    Functions Show / Hide Preloader
    ---------------------------------------------*/

    function showPreloader() {
        $(".preloader").fadeIn("slow");
    }

    function hidePreloader() {
        $(".preloader").delay(2000).fadeOut("slow");
    }

    /*-------------------------------------------
    Delay the appearance of the content by constant time
    ---------------------------------------------*/

    function showGrid() {

        $(document).ready(function () {
            setTimeout(function () {document.getElementById('fullscreen').style.visibility = "visible";},0)
            setTimeout(function () {document.getElementById('full').style.visibility = "visible";},0)
            setTimeout(function () {document.getElementById('button').style.visibility = "visible";},0)
            setTimeout(function () {document.getElementById('close-button').style.visibility = "visible";},0)
            setTimeout(function () {document.getElementById('buttons').style.visibility = "visible";},0)
            setTimeout(function () {document.getElementById('typeWriteDelay').style.visibility = "visible";},0)
        })
    }

})//End