$(document).ready(function () {

    jQuery('a[href^="#"]').click(function(e) {

        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000); // kod wykradziony z http://sharethingz.com/js-jquery/jquery-smooth-scrolling-to-an-element-on-page/


        return false;

        e.preventDefault();

    });

});