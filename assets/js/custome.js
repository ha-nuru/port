	  /*section2 이모지 폰트 움직이기*/
      $(document)
      	.ready(function () {
      		let current_class_index = 0;
      		const classes = [
                    'boo', 'hey', 'dude', 'classes', 'and', 'junk'
                ];
      		let current_class = '';
      		const target_element = $('.yo');
      		$('.marquee')
      			.marqueeify({
      				speed: 350,
      				bumpEdge: function () {
      					const new_class = classes[current_class_index++];
      					if (current_class_index > classes.length - 1) {
      						current_class_index = 0;
      					}
      					if (target_element.hasClass(current_class)) {
      						target_element.removeClass(current_class);
      					}
      					target_element.addClass(new_class);
      					current_class = new_class;
      				}
      			});
			  });
			  
      /*section2 이모지 움직이기*/
      (function ($, window, undefined) {
      	$.fn.marqueeify = function (options) {
      		var settings = $.extend({
      			horizontal: true,
      			vertical: true,
      			speed: 60, 
      			container: $(this)
      				.parent(),
      			bumpEdge: function () {}
      		}, options);
      		return this.each(function () {
      			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
      				$el = $(this);

      			getSizes = function () {
      				containerWidth = settings.container.outerWidth();
      				containerHeight = settings.container.outerHeight();
      				elWidth = $el.outerWidth();
      				elHeight = $el.outerHeight();
      			};
      			move = {
      				right: function () {
      					$el.animate({
      						left: (containerWidth - elWidth)
      					}, {
      						duration: ((containerWidth / settings.speed) * 1000),
      						queue: false,
      						easing: 'linear',
      						complete: function () {
      							settings.bumpEdge();
      							move.left();
      						}
      					});
      				},
      				left: function () {
      					$el.animate({
      						left: 0
      					}, {
      						duration: ((containerWidth / settings.speed) * 1000),
      						queue: false,
      						easing: 'linear',
      						complete: function () {
      							settings.bumpEdge();
      							move.right();
      						}
      					});
      				},
      				down: function () {
      					$el.animate({
      						top: (containerHeight - elHeight)
      					}, {
      						duration: ((containerHeight / settings.speed) * 1000),
      						queue: false,
      						easing: 'linear',
      						complete: function () {
      							settings.bumpEdge();
      							move.up();
      						}
      					});
      				},
      				up: function () {
      					$el.animate({
      						top: 0
      					}, {
      						duration: ((containerHeight / settings.speed) * 1000),
      						queue: false,
      						easing: 'linear',
      						complete: function () {
      							settings.bumpEdge();
      							move.down();
      						}
      					});
      				}
      			};
      			getSizes();
      			if (settings.horizontal) {
      				move.right();
      			}
      			if (settings.vertical) {
      				move.down();
      			}
      			$(window)
      				.resize(function () {
      					getSizes();
      				});
      			});
      		};
      })(jQuery, window);

	  /*section2 배너 움직이기*/
      $('.about-marquee').marquee({
      	duration: 21000,
      	gap: 0,
      	delayBeforeStart: 0,
      	direction: 'left',
      	duplicated: true,
      	startVisible: true,
      	pauseOnHover: true,
      });

      /*탭메뉴*/
      $('ul.tabs li').click(function () {
      	var tab_id = $(this).attr('data-tab');

      	$('ul.tabs li').removeClass('current');
      	$('.tab-content').removeClass('current');

      	$(this).addClass('current');
      	$("#" + tab_id).addClass('current');
      });
