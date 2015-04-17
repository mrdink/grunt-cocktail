/**
 * grunt-notify
 *
 * Automatic desktop notifications for Grunt errors and warnings using
 * Growl for OS X or Windows, Mountain Lion and Mavericks Notification
 * Center, and Notify-Send.
 *
 * @link https://www.npmjs.com/package/grunt-notify
 */
module.exports = {
  sass: {
    options: {
      title: 'Grunt, grunt!',
      message: 'Sass is Sassy.'
    }
  },
  js: {
    options: {
      title: 'Grunt, grunt!',
      message: 'JS is all good.'
    }
  },
  dev: {
    options: {
      title: 'Grunt, grunt!',
      message: 'Development processed without errors.'
    }
  },
  prod: {
    options: {
      title: 'Grunt, grunt!',
      message: 'We\'ll do it live!'
    }
  },
  package: {
    options: {
      title: 'Grunt, grunt!',
      message: 'Zip file created.'
    }
  },
  deployed: {
    options: {
      title: 'Grunt, grunt!',
      message: 'Deployed to production.'
    }
  }
};
