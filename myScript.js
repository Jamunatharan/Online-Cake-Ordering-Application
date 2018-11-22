

/*-------------------------------------Toggle responsive navigation------------------------------- */

$(document).ready(function(){
	$(".material-icons").on("click", function(){
		$("nav ul").toggleClass("showing");
	});


	$("nav ul li").on("click", function(){
		$("nav ul").removeClass("showing");
	});
});


$(document).scroll(function() {
	if ($(this).scrollbottom() > 10){
		$('nav ul').removeClass("showing");
	}
});


/*-------------------------------------Smooth scroll------------------------------------------------*/

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});


/*--------------------------------------Display about us cake----------------------------------------*/


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[slideIndex-1].style.display = "block";  
}


/*------------------------------------Wedding cake details array-----------------------------------*/

var wedArr = [
	{
		wedSize: '3 Tier / 4", 6", 8"',
		wedServe: '30-50 Servings',
		wedPrice: '£150',					
		wedImgFile: 'images/wedimg1.jpg'
	},

	{
		wedSize: '3 Tier / 4", 6", 8", 10"',
		wedServe: '40-80 Servings',
		wedPrice: '£175',				
		wedImgFile: 'images/wedimg4.png'
	},

	{
		wedSize: '3 Tier / 4", 6", 8"',
		wedServe: '50-100 Servings',
		wedPrice: '£250',				
		wedImgFile: 'images/wedimg5.png'
	}

];


/*-----------------------------------------Birthday cakes details array--------------------------------------------*/


var birthArr = [

	{
		birSize: '2 Tier / 4", 6", 8"',
		birServe: '20-40 Servings',
		birPrice: '£125',					
		birImgFile: 'images/birimg1.png'
	},

	{
		birSize: '2 Tier / 4", 6", 8", 10"',
		birServe: '40-80 Servings',
		birPrice: '£175',				
		birImgFile: 'images/birimg2.jpg'
	},

	{
		birSize: '3 Tier / 4", 6", 8"',
		birServe: '50-100 Servings',
		birPrice: '£250',				
		birImgFile: 'images/wedimg5.png'
	}
];



/*-------------------------------------Special occation cakes details array--------------------------------------*/


var specialArr = [

	{
		splSize: '2 Tier / 4", 6", 8" 10"',
		splServe: '35-60 Servings',
		splPrice: '£150',					
		splImgFile: 'images/birimg2.jpg'
	},

	{
		splSize: '1 Tier / 4", 6", 8"',
		splServe: '20-40 Servings',
		splPrice: '£100',					
		splImgFile: 'images/wedimg3.jpg'
	},

	{
		splSize: '2 Tier / 4", 6", 8"',
		splServe: '20-40 Servings',
		splPrice: '£125',					
		splImgFile: 'images/splcake.png'
	}
];


/*--------------------------------Display product details according to catergiries--------------------------*/

var i = 0;
var sizStr = "Size:";
var portnsStr = "Portions:";
var priStr = "Prices from:";



function nextItemWed() {


	i = i + 1; // increase i by one
	i = i % wedArr.length; // start from `0` again

	document.getElementById('wedcakesize').innerHTML = sizStr.bold() +' '+ wedArr[i].wedSize;
	document.getElementById('wedcakeserve').innerHTML = portnsStr.bold() +' '+ wedArr[i].wedServe;
	document.getElementById('wedcakeprice').innerHTML = priStr.bold() +' '+ wedArr[i].wedPrice;
	document.getElementById('wedcakeimg').innerHTML = '<img src="'+wedArr[i].wedImgFile+'" width="270" height="250">';

}


function prevItemWed() {


	if (i === 0) { 
		i = wedArr.length; 
	}
	i = i - 1;

	document.getElementById('wedcakesize').innerHTML = sizStr.bold() +' '+ wedArr[i].wedSize;
	document.getElementById('wedcakeserve').innerHTML = portnsStr.bold() +' '+ wedArr[i].wedServe;
	document.getElementById('wedcakeprice').innerHTML = priStr.bold() +' '+ wedArr[i].wedPrice;
	document.getElementById('wedcakeimg').innerHTML = '<img src="'+wedArr[i].wedImgFile+'">';

}


window.addEventListener('load', function () {

	document.getElementById('wedcakesize').innerHTML = sizStr.bold() +' '+ wedArr[i].wedSize;
	document.getElementById('wedcakeserve').innerHTML =  portnsStr.bold() +' '+ wedArr[i].wedServe;
	document.getElementById('wedcakeprice').innerHTML =  priStr.bold() +' '+ wedArr[i].wedPrice;
	document.getElementById('wedcakeimg').innerHTML = '<img src="'+wedArr[i].wedImgFile+'" width="270" height="250">';

	document.getElementById('wedleftArrBtn').addEventListener(
		'click', 
		function (e) { 
			prevItemWed();

		}
	);

	document.getElementById('wedrightArrBtn').addEventListener(
		'click', 
		function (e) { 
			nextItemWed();

		}
	);
});



/*------------------------------------Birthday cakes display------------------------------------------*/



function nextItemBirth() {

	i = i + 1; 
	i = i % birthArr.length; 

	document.getElementById('bircakesize').innerHTML = sizStr.bold() +' '+ birthArr[i].birSize;
	document.getElementById('bircakeserve').innerHTML = portnsStr.bold() +' '+ birthArr[i].birServe;
	document.getElementById('bircakeprice').innerHTML = priStr.bold() +' '+ birthArr[i].birPrice;
	document.getElementById('bircakeimg').innerHTML = '<img src="'+birthArr[i].birImgFile+'">';
}


function prevItemBirth() {
	if (i === 0) { 
		i = birthArr.length; 
	}
	i = i - 1; 

	document.getElementById('bircakesize').innerHTML = sizStr.bold() +' '+ birthArr[i].birSize;
	document.getElementById('bircakeserve').innerHTML = portnsStr.bold() +' '+ birthArr[i].birServe;
	document.getElementById('bircakeprice').innerHTML = priStr.bold() +' '+ birthArr[i].birPrice;
	document.getElementById('bircakeimg').innerHTML = '<img src="'+birthArr[i].birImgFile+'">';

}


window.addEventListener('load', function () {

	document.getElementById('bircakesize').innerHTML = sizStr.bold() +' '+ birthArr[i].birSize;
	document.getElementById('bircakeserve').innerHTML = portnsStr.bold() +' '+ birthArr[i].birServe;
	document.getElementById('bircakeprice').innerHTML = priStr.bold() +' '+ birthArr[i].birPrice;
	document.getElementById('bircakeimg').innerHTML = '<img src="'+birthArr[i].birImgFile+'">';

	document.getElementById('birleftArrBtn').addEventListener(
		'click', 
		function (e) { 
			prevItemBirth();

		}
	);

	document.getElementById('birrightArrBtn').addEventListener(
		'click', 
		function (e) { 
			nextItemBirth();

		}
	);
});




/*---------------------------------------Special cakes display-----------------------------------------*/


function nextItemSpecial() {
	i = i + 1; // increase i by one
	i = i % specialArr.length; // start from `0` again

	document.getElementById('splcakesize').innerHTML = sizStr.bold() +' '+ specialArr[i].splSize;
	document.getElementById('splcakeserve').innerHTML = portnsStr.bold() +' '+ specialArr[i].splServe;
	document.getElementById('splcakeprice').innerHTML = priStr.bold() +' '+ specialArr[i].splPrice;
	document.getElementById('splcakeimg').innerHTML = '<img src="'+specialArr[i].splImgFile+'">';
}


function prevItemSpecial() {
	if (i === 0) { 
		i = specialArr.length; 
	}
	i = i - 1; // decrease by one
	document.getElementById('splcakesize').innerHTML = sizStr.bold() +' '+ specialArr[i].splSize;
	document.getElementById('splcakeserve').innerHTML = portnsStr.bold() +' '+ specialArr[i].splServe;
	document.getElementById('splcakeprice').innerHTML = priStr.bold() +' '+ specialArr[i].splPrice;
	document.getElementById('splcakeimg').innerHTML = '<img src="'+specialArr[i].splImgFile+'">';

}


window.addEventListener('load', function () {

	document.getElementById('splcakesize').innerHTML = sizStr.bold() +' '+ specialArr[i].splSize;
	document.getElementById('splcakeserve').innerHTML = portnsStr.bold() +' '+ specialArr[i].splServe;
	document.getElementById('splcakeprice').innerHTML = priStr.bold() +' '+ specialArr[i].splPrice;
	document.getElementById('splcakeimg').innerHTML = '<img src="'+specialArr[i].splImgFile+'">';

	document.getElementById('splleftArrBtn').addEventListener(
		'click', 
		function (e) { 
			prevItemSpecial();

		}
	);

	document.getElementById('splrightArrBtn').addEventListener(
		'click', 
		function (e) { 
			nextItemSpecial();

		}
	);
});

/*---------------------------------------Product details array--------------------------------------*/


var cakeDetails = [

	{
		id1: "1",
		cakeimage: "images/cup3.png",
		cakename: "White chocolate cheese cake",
		price: 25
	}, 

	{
		id1: "2",
		cakeimage: "images/cup2.png",
		cakename: "Angel cup cake",
		price: 1
	}, 

	{
		id1: "3",
		cakeimage: "images/cup5.png",
		cakename: "Lemon cup cake",
		price: 1
	},

	{
		id1: "4",
		cakeimage: "images/cup1.png",
		cakename: "Strawberry cup cake",
		price: 1
	}, 

	{
		id1: "5",
		cakeimage: "images/cup6.png",
		cakename: "Micky and mini mouse cake",
		price: 45
	}, 

	{
		id1: "6",
		cakeimage: "images/cup7.png",
		cakename: "Orange & cranberry Christmas cake",
		price: 55
	}

];



/*-----------------------------------Display product details from cakedetails array------------------------------*/


window.addEventListener('load', function () {

	var container = "<div class='productMainContainer'>";

	for (var i = 0; i < cakeDetails.length; i++) {

		container+="<div class='productContainers'>";
		container+="<div class='productImgContainer'>";
		container+='<img src="'+cakeDetails[i].cakeimage+'">';	
		container+="</div>";
		container+="<div class='productName'>"+cakeDetails[i].cakename+"</div>";
		container+="<div class='productPrice'>"+"£"+cakeDetails[i].price+"</div>";
		var cakeid= cakeDetails[i].id1;
		//		container+="<div class=''>"+cakeid+"</div>";


		container+='<button id="' +cakeid+ '" onclick="" class="addToCartBtn">'
		"</button>"

		container+="</div>";

	}

	container+="</div>";
	document.getElementById("productDisplay").innerHTML = container;

});

var cartCakeImage, cartCakeName, cartCakeId, cartCakePrice; 

/*---------------------------------Empty array to store the shopping items----------------------------*/

var cartItems = [{}];

/*---------------------------------Find shopping total-----------------------------*/

function findTotal() {

	var findSum = 0;

	for (var findTtl = cartItems.length - 1; findTtl > 0; --findTtl) {

		//	for(var findTtl = 1; findTtl<cartItems.length; findTtl++) {

		findSum =  findSum + parseInt(cartItems[findTtl].cartpprice);
		
		findQty = cartItems.length;		
		
	}

	document.getElementById("displayTtl").innerHTML = "£"+findSum+" .00";
	document.getElementById("quantityDisplay").innerHTML = findQty-1;
}


/*------------------------------------Add an item to the shopping cart-----------------------------------*/

$(document).on('click', '.addToCartBtn', function() {


	/*-------------------------Find an item from cakedetails array using its id------------------------*/

	cartCakeImage = cakeDetails.find(x => x.id1 == this.id).cakeimage;
	cartCakeId = cakeDetails.find(x => x.id1 == this.id).id1;
	cartCakeName = cakeDetails.find(x => x.id1 == this.id).cakename;
	cartCakePrice = cakeDetails.find(x => x.id1 == this.id).price;	


	/*------------------------------Insert an item to the cartItems array------------------------------*/

	cartItems.push({"cartimage":cartCakeImage, "cartpname":cartCakeName, cartpprice:cartCakePrice, "cartid":cartCakeId});


	/*------------------------------Display cartItems details in shopping cart-------------------------*/

	var cartContainer = "<div class='cartOuterContainer'>";

	for (var i = 1; i < cartItems.length; i++) {

		cartContainer+="<div class='cartInnerContainer'>";

		cartContainer+="<div class='cartImgContainer'>";

		cartContainer+='<img src="'+cartItems[i].cartimage+'" width="70" height="70">';	
		cartContainer+="</div>";

		cartContainer+="<div class='cartProductName'>"+cartItems[i].cartpname+"</div>";

		cartContainer+="<div class='cartProductPrice'>"+"£"+cartItems[i].cartpprice+"</div>";

		//cartContainer+="<div class='cartProductId'>"+cartItems[i].cartid+"</div>";

		cartContainer+="<div class='cartProductId' id='quantity'>";
		cartContainer+="<button class='quantityPlus' id='plusbtn' onclick='quantityIncrease()'>";
		cartContainer+="</button>"+1+"<button class='quantityMinus'>";
		cartContainer+="</button>";
		cartContainer+="</div>";

		var cartId= cartItems[i].cartid;

		cartContainer+='<button id="'+cartId+'" onclick="" class="removeItemBtn">';
		cartContainer+="</button>";

		cartContainer+="</div>";


	}	

	cartContainer+="<div class='totalContainer'>"+"Total"+"<span id='displayTtl'>";
	cartContainer+="</span>";
	cartContainer+="</div>";
	cartContainer+="</div>";	

	document.getElementById("cartDisplay").innerHTML = cartContainer;

	findTotal();

});


/*-------------------------------------Remove an item from the shopping cart----------------------------------*/

$(document).on('click', '.removeItemBtn', function() {


	var removedCartPrice = cartItems.find(x => x.cartid == this.id).cartpprice;

	/*---------------------------------Remove a specific item from cartItems array using id-------------------*/

	for (var j = cartItems.length - 1; j >= 0; --j) {
		if (cartItems[j].cartid == this.id) {
			cartItems.splice(j,1);			

		}
	}
	this.id
	alert(this.id)


	var cartContainer = "<div class='cartOuterContainer'>";	

	/*---------------------------------Update shopping cart after an item removed---------------------------------*/

	for (var i = 1; i < cartItems.length; i++) {

		cartContainer+="<div class='cartInnerContainer'>";

		cartContainer+="<div class='cartImgContainer'>";

		cartContainer+='<img src="'+cartItems[i].cartimage+'" width="70" height="70">';	
		cartContainer+="</div>";

		cartContainer+="<div class='cartProductName'>"+cartItems[i].cartpname+"</div>";

		cartContainer+="<div class='cartProductPrice'>"+"£"+cartItems[i].cartpprice+"</div>";

		//cartContainer+="<div class='cartProductId'>"+cartItems[i].cartid+"</div>";

		cartContainer+="<div class='cartProductId' id='quantity'>";
		cartContainer+="<button class='quantityPlus' id='plusbtn' onclick='quantityIncrease()'>";
		cartContainer+="</button>"+1+"<button class='quantityMinus'>";
		cartContainer+="</button>";
		cartContainer+="</div>";

		var cartId= cartItems[i].cartid;

		cartContainer+='<button id="'+cartId+'" onclick="" class="removeItemBtn">';
		cartContainer+="</button>"

		cartContainer+="</div>";


	}	

	cartContainer+="<div class='totalContainer'>"+"Total"+"<span id='displayTtl'>"+"£"+"</span>"

	cartContainer+="</div>"

	cartContainer+="</div>";

	document.getElementById("cartDisplay").innerHTML = cartContainer;

	findTotal();

});

function showShoppingCart() {

	var showCart = document.getElementById("cartDisplay");
	if(showCart.style.display === "none") {
		showCart.style.display = "block";
	} else {
		showCart.style.display = "none";
	}	

}


document.getElementById("shopBasketBtn").addEventListener('click', showShoppingCart);
document.getElementById("quantityDisplay").addEventListener('click', showShoppingCart);

//function quantityIncrease() {
//	var quantityUp;
//	var currentQuantity = document.getElementById("quantity").innerHTML;
//	quantityUp = currentQuantity + 1;
//	
//}






