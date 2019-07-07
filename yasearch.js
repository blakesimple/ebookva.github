(function(w,d,c){
	            var s=d.createElement('script'),h=d.getElementsByTagName('script')[0],e=d.documentElement;
	            if((' '+e.className+' ').indexOf(' ya-page_js_yes ')===-1){
	                e.className+=' ya-page_js_yes';
	            }
	           s.type='text/javascript';
	           s.async=true;
	           s.charset='utf-8';
	           s.src=(d.location.protocol==='https:'?'https:':'http:')+'//site.yandex.net/v2.0/js/all.js';
	           h.parentNode.insertBefore(s,h);(w[c]||(w[c]=[])).push(function(){Ya.Site.Form.init()})})(window,document,'yandex_site_callbacks');
	    
	       var menuSearch = document.getElementsByClassName('menuSearch')[0];
	       var menuLoop = document.getElementsByClassName('menuLoop')[0];
	       var formY = document.getElementsByClassName('ya-site-form')[0];
	       var i = 1;
	       menuLoop.onclick = function() {
	          
	           if( i%2 ) {
	               formY.style.display = 'block';
	               formY.style.opacity = '1';
	               i++;
	           } else {
	               formY.style.display = 'none';
	               formY.style.opacity = '0';
	               i++;
	           }
	       }