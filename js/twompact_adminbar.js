(function ($, Drupal, window, document, undefined) {
	// To understand behaviors, see https://drupal.org/node/756722#behaviors
	Drupal.behaviors.twompact_adminbar = {
	  attach: function(context, settings) {
	  	$(document).ready(function() {
            // START ADMIN BLOK TRIGGERS
            $('.edit_toggle').click(function() {
              $('.twompact_adminbar_tab_data').css('display', 'none');
              $('.twompact_adminbar_tab').removeClass('active');
              if($('.edit_toggle').parent('li').hasClass('active')) {
                $('.edit_toggle').parent('li').removeClass('active');
              }
              else {
                $('.edit_toggle').parent('li').addClass('active');
              }
            });

            $('.page_info_toggle').click(function() {
              $('.twompact_adminbar_tab_data').css('display', 'none');
              if($('.page_info_toggle').parent('li').hasClass('active')) {
                $('.page_info_toggle').parent('li').removeClass('active');
                $('#twompact_adminbar_page_info').hide('slow');
              }
              else {
                $('.page_info_toggle').parent('li').addClass('active');
                $('#twompact_adminbar_page_info').show('slow');
              }
            });

            $('.site_admin_toggle').click(function() {
              $('.twompact_adminbar_tab_data').css('display', 'none');
              if($('.site_admin_toggle').parent('li').hasClass('active')) {
                console.log('foo');
                $('.site_admin_toggle').parent('li').removeClass('active');
                $('#twompact_adminbar_site_admin').hide('slow');
              }
              else {
                console.log('bar');
                $('.site_admin_toggle').parent('li').addClass('active');
                $('#twompact_adminbar_site_admin').show('slow');
              }
            });

            $('#admin_blok_nieuw_link').click(function() {
              $('#admin_blok_widget_queues').css('display', 'none');
              $('#admin_blok_menus').css('display', 'none');
              $('#admin_blok_nodetypes').toggle('slow');
            });

            $('#admin_blok_inhoud_link').click(function() {
              $('#admin_blok_nodetypes').css('display', 'none');
            });

            $('#admin_blok_media_link').click(function() {
              $('#admin_blok_nodetypes').css('display', 'none');
            });

            $('#admin_blok_gebruiker_link').click(function() {
              $('#admin_blok_nodetypes').css('display', 'none');
            });

            $('#admin_blok_settings_link').click(function() {
              $('#admin_blok_nodetypes').css('display', 'none');
            });

            $('#admin_blok_widget_link').click(function() {
              $('#admin_blok_nodetypes').css('display', 'none');
              $('#admin_blok_menus').css('display', 'none');
              $('#admin_blok_widget_queues').toggle('slow');
            });
            $('#admin_blok_menu_link').click(function() {
              $('#admin_blok_nodetypes').css('display', 'none');
              $('#admin_blok_widget_queues').css('display', 'none');
              $('#admin_blok_menus').toggle('slow');
            });
            // EINDE ADMIN BLOK TRIGGERS
        });
	  }
	};
})(jQuery, Drupal, this, this.document);