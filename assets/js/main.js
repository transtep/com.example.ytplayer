;(function($, self) {
	"use strict";

	var options = (function() {		//xml config
		var options = [];
		var list = {
			yt: ['mediaId', 'defaultVolume', 'autoPlay', 'randomPlay', 'loopingOn', 'defaultGallerySide', 'scrollType', 'autoOpenPlaylist', 'closePlaylistOnVideoSelect', 'onPlaylistEndGoToUrl', 'onPlaylistEndUrl', 'onPlaylistEndTarget', 'useCookieDetection', 'useKeyboardNavigation', 'ytAppId', 'useDeeplink', 'startUrl', 'activePlaylist'],
			display: ['controls', 'fullscreen', 'volume', 'seekbar', 'playlist', 'playlistControls', 'switch'],
			set: ['listid', 'global_css']

		};
		for(var k1 in list) {
			var opt = {};
			if('getPreference' in self) {
				for(var k2 in list[k1]) { 
					var i = self.getPreference(k1+'_'+list[k1][k2]);
					if(typeof i!='undefined') {
						switch (i) {
							case "false" :
								opt[list[k1][k2]] = !1;
							break;
							case 'true' :
								opt[list[k1][k2]] = !0;
							break;
							case String(Number(i)) :
								opt[list[k1][k2]] = Number(i);
							break;
							default:
								if(i.slice(0, 1)=='{' && i.slice(-1)=='}') {		//為了讓json可以使用
									opt[list[k1][k2]] = i.replace(/\'/g, '"');
								} else {
									opt[list[k1][k2]] = i;
								}
						}
					}
				}
			}
			options.push(opt);
		}

		//options
		options[0] = $.extend(true,{
			/* mediaId: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
			mediaId: 'player1',
			/* componentFixedSize: true/false. Responsive = false, fixed = true */
			componentFixedSize: false,
			/*defaultVolume: 0-1 */
			defaultVolume: 1,
			/*autoPlay: true/false (default false on mobile) */
			autoPlay: true,
			/*randomPlay: true/false */
			randomPlay: false,
			/* loopingOn: on playlist end rewind to beginning (last item in playlist) */
			loopingOn: true,
			/* defaultGallerySide: bottom / right (default thumbnail side)  */
			defaultGallerySide: 'right',
			/* scrollType: buttons / scroll  */
			scrollType: 'buttons',
			/* autoOpenPlaylist: true/false. Auto open playlist on beginning */
			autoOpenPlaylist: true,
			/* closePlaylistOnVideoSelect: close playlist on video select */
			closePlaylistOnVideoSelect: false,
			/* onPlaylistEndGoToUrl: true/false, navigate to url on playlist end (last item in playlist). Note: this will override loopingOn! */
			onPlaylistEndGoToUrl: false,
			/* onPlaylistEndUrl: url to redirect to */
			onPlaylistEndUrl: 'http://www.google.com/',
			/* onPlaylistEndTarget: _blank (open in new window) / _parent (open in same window) */
			onPlaylistEndTarget: '_parent',
			/*useCookieDetection; use detection with local storage/cookies of skipping intro if already visited (true/false). 'onPlaylistEndGoToUrl' must be 'true' for this to happen. */
			useCookieDetection: false,
			/* useKeyboardNavigation: true/false (left arrow=previous media, right arrow=next media, space=pause/play, m=mute/unmute) */
			useKeyboardNavigation: false,
			ytAppId: 'AIzaSyBSNYowyIK429tUBU_PxCdAeNKTehLC9ZA',/* youtube api key */

			/* DEEPLINKING SETTINGS */
			/* useDeeplink: true, false */
			useDeeplink: false,
			/* startUrl: deeplink start url, enter 'ul' data-address/'li' data-address (two levels). Or just 'ul' data-address (single level). */
			startUrl: 'playlist3/youtube_playlist1',
			
			/* NO DEEPLINKING SETTINGS */
			/*activePlaylist: enter element 'id' attributte */
			activePlaylist: 'playlist'
		}, options[0] );

		options[1] = $.extend(true,{
			controls: true,
			fullscreen: true,
			volume: true,
			seekbar: true,
			playlist: true,
				playlistControls: true,
				switch: true
		}, options[1] );

		options[2] = $.extend(true,{
			listid: 'PL0WSSNQ6FtMG8K8h2JlUZIJdEdkG_CoqD',
			global_css: '#componentWrapper .thumbHolder_v{width: 100px;background-color: #fff} #componentWrapper .thumbContainer_v {left: 0px}',
		}, options[2] );



		return options;
	}());

	var YT = function() {
		this.el = undefined;
		this.list = [];
	};

	YT.prototype = {	//負責跑馬燈相關處理
		build: function() {
			if(this.el)  document.body.removeChild(this.el);

			this.el = document.createElement("iframe");
			this.el.setAttribute('src', 'view.html');
			document.body.appendChild(this.el);

			this.el.onload = function() {
				var win = this.contentWindow;

				win.ctrl = ctrl;
				win.opt = options;

				win.build();
			};
		}
	}
	
var ctrl = new YT();
$(function() {
	ctrl.build();
});
})(jQuery, window);