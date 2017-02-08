
var cats = [{
		catId: 1, 
		catName: 'Cat One',
		imgSrc: 'images/catOne.jpg', 
		count: 0
	},{
		catId: 2,
		catName: 'Cat Two', 
		imgSrc: 'images/catTwo.jpg', 
		count: 0
	},{
		catId: 3, 
		catName: 'Cat Three', 
		imgSrc: 'images/catThree.jpg', 
		count: 0
	}, {
		catId: 4, 
		catName: 'Cat Four', 
		imgSrc: 'images/catFour.jpg', 
		count: 0
	}
];

var catsLen = cats.length;

var controller = function(){

}

var view = function(){
	//init cat array
	cats.forEach(function(catsObj){
		$('#catArrayRow').append(
			'<div class="col-xs-3">'+
				'<button type="button" class="btn btn-primary">' + catsObl.catName + '</button>'
			'</div>'
		)
	}
}

/*		
var catsLen = cats.length;
//append image to dom
for (var i =0; i < catsLen; i++){
	$('#catRow').append(
		'<div class="col-xs-6">'+ 
			'<h1>' + cats[i].catName + '</h1>' +
			'<img src="' + cats[i].imgSrc + '" id="' + cats[i].catId +'">' +
			'<br>' +
			'<div class="row">' +
				'<div class="col-xs-6"><p>Number of Clicks: </p></div>' +
				'<div class="col-xs-6"><p id="counter' + cats[i].catId + '"></p></div>'+
			'</div>' +
		'</div>'
	);
}

//Click Counter
for(var i = 0 ; i < catsLen; i++){
	var count = cats[i].count;
	var position = i+1;
	$('#'+ cats[i].catId).click((function(countCopy, positionCopy){
		return function() {
			countCopy++;
			$('#counter' + positionCopy).html(countCopy);
			count = countCopy;
			console.log(countCopy);
			console.log(count);
		};
	})(count, position));
}
*/