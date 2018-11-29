// Move article intro into article title

$(".article-intro").appendTo(".article-title .inside").show();

// Move article title image into article content

$(".article-title .at-illust").addClass("article-image").prependTo(".article-content").show();

// Move breadcrumb under article title if on article page

if ( $(".bn-list").length && $(".article-intro").length ) {
    $(".bn-list").prependTo(".article-intro");
    $(".breadcrumb-nav").remove();
}

// Disable scroll on the page when the menu is open //

$(".js-toggle-trigger").click(function(){
    $('html').toggleClass('noscroll');
});

// Add menu span for navigation animation 
$("button.sb-menu-trigger.js-toggle-trigger.unstyled").append("<span class='line line-1'></span><span class='line line-2'></span><span class='line line-3'></span>");
