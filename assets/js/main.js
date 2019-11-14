$(document).ready(function() {
	
    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);


    /* Activate scrollspy menu */
    $('body').scrollspy({target: '.active-spy', offset: 100});
    
    /* Smooth scrolling */

	$('.doc-sub-menu>a.scrollto').on('click', function(e){
		//store hash
		var target = this.hash;    
		e.preventDefault();

	$('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, {
    duration: 500,
    start: function() {
      $("#doc-menu").removeClass("active-spy");
    },
    complete: function() {
      $("#doc-menu").addClass("active-spy");
      $(".doc-sub-menu .active").removeClass("active");
      $('.doc-sub-menu .scrollto[href="'+target+'"]').addClass("active");
    }
  });
});

$('.doc-menu>li>a.scrollto').on('click', function(e){
	//store hash
	var target = this.hash;    
	e.preventDefault();

$('html, body').animate({
	scrollTop: $($.attr(this, 'href')).offset().top
}, {
	duration: 500,
	start: function() {
		$("#doc-menu").removeClass("active-spy");
	},
	complete: function() {
		$("#doc-menu").addClass("active-spy");
		$(".doc-menu>li>.active").removeClass("active");
		$('.doc-menu>li>.scrollto[href="'+target+'"]').addClass("active");
	}
});
});
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    


});