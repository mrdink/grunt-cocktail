/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * {%= title %}
 * {%= theme_url %}
 *
 * Copyright (c) 2015 {%= author_name %}
 * Licensed under the GPLv2+ license.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var {%= js_safe_name_caps %} = {
    // All pages
    common: {
      init: function() {

        /**
         * navigation.js
         *
         * Handles toggling the navigation menu for small screens.
         */
        ( function() {
          var container, button, menu;

          container = document.getElementById( 'site-navigation' );
          if ( ! container ) {
            return;
          }

          button = container.getElementsByTagName( 'button' )[0];
          if ( 'undefined' === typeof button ) {
            return;
          }

          menu = container.getElementsByTagName( 'ul' )[0];

          // Hide menu toggle button if menu is empty and return early.
          if ( 'undefined' === typeof menu ) {
            button.style.display = 'none';
            return;
          }

          menu.setAttribute( 'aria-expanded', 'false' );

          if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
            menu.className += ' nav-menu';
          }

          button.onclick = function() {
            if ( -1 !== container.className.indexOf( 'toggled' ) ) {
              container.className = container.className.replace( ' toggled', '' );
              button.setAttribute( 'aria-expanded', 'false' );
              menu.setAttribute( 'aria-expanded', 'false' );
            } else {
              container.className += ' toggled';
              button.setAttribute( 'aria-expanded', 'true' );
              menu.setAttribute( 'aria-expanded', 'true' );
            }
          };
        } )();

        ( function() {
          var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
              is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
              is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

          if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
            window.addEventListener( 'hashchange', function() {
              var id = location.hash.substring( 1 ),
                element;

              if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
                return;
              }

              element = document.getElementById( id );

              if ( element ) {
                if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
                  element.tabIndex = -1;
                }

                element.focus();
              }
            }, false );
          }
        })();

      }
    },
    // Home page
    home: {
      init: function() {
        // JavaScript to be fired on the home page

      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var namespace = {%= js_safe_name_caps %};
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      UTIL.fire('common');

      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
      });
    }
  };

  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
