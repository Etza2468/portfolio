var homepage = $('#homePage'),
    error    = $('.error'),
	width = $(window).width();
if(width <= 767){
	homepage.css({
		background: '#333333a8',
		'background-image':'url("https://images.unsplash.com/photo-1493492473127-f5b4cafeb0b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89c53202806cff7b75eee834c9608ed7&auto=format&fit=crop&w=751&q=80")',	' background-size': 'cover',
    	'background-blend-mode':'overlay',
    	'background-position': 'center center',
		'background-size': 'cover'
	});
}else{
	try {
    homepage.ripples({
        resolution : 500,
        dropRadius : 20,
        perturbance : 0.04,        
        imageUrl	: 'https://images.unsplash.com/photo-1493492473127-f5b4cafeb0b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89c53202806cff7b75eee834c9608ed7&auto=format&fit=crop&w=751&q=80',
   }); 
    homepage.ripples('play');    
    homepage.ripples('updateSize');
}
catch (e) {
    error.show().text(e);
}
}