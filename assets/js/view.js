;(function($, self) {
$(function() {
	"use strict";

	self.build = function() {
		var display = self.opt[1];
		if(!display.controls) {
			$('.controls').remove();
		}
		if(!display.fullscreen) {
			$('.controls_fullscreen').remove();
		}
		if(!display.volume) {
			$('.controls_volume').remove();
		}
		if(!display.seekbar) {
			$('.seekbar').remove();
		}
		if(!display.playlist) {
			$('.thumbHolder').remove();
		}
		if(!display.playlistControls) {
			$('.playlistControls').remove();
		}
		if(!display.switch) {
			$('.playlist_switch').remove();
		}

		var set = self.opt[2];
		$('<style type="text/css">').html( set.global_css ).appendTo('head');
		if(!!set.listid) {
			$('.playlistItem').attr('data-path', set.listid);
		}


		$('#componentWrapper').apvb(self.opt[0]);
	}
});
})(jQuery, window);
