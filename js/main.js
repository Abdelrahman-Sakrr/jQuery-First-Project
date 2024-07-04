$('.openBtn').on('click' , function(){
	$('.myNav').animate({translate:'100%'} , 1000)
	
})
$('.exitButton').on('click' , function(){
	$('.myNav').animate({translate:'0%'} , 1000)	
})

$('.myTitleClick').on('click' , function(ele){
$('.myText').not($(ele.target).next()).slideUp(500);
$(ele.target).next().slideToggle(500)
})


// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function(){
	  // Get today's date and time
	  let now = new Date().getTime();

	  // Find the distance between now and the count down date
	  const distance = countDownDate - now;
	
	  // Time calculations for days, hours, minutes and seconds
	  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	  // Display the result in the element with id="demo"
	$('#days').text(`${days} D`)
	$('#hours').text(`${hours} H`)
	$('#minutes').text(`${minutes} M`)
	$('#seconds').text(`${seconds} S`)
},)

//textarea count characters


$('#textarea').on('input' , function(){
	let x = $('#textarea').val().length
	
	$('.charsCount').text(100 - x)


})



// $('.myNavItem > a').on('click' , function(e){
// 	const eleId = $(e.target).attr('href');
// 	console.log($(eleId).offset());
// })