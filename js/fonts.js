(function() {
  if (sessionStorage.fonts) {
    document.documentElement.classList.add('wf-active');
  }else{
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      google: {
        families: ['Montserrat:300,400,400i,500,600,700','Roboto+Condensed:300,400,400i,500,700']
      },
      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
  }
})();
