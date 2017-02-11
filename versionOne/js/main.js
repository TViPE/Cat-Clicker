/* ======= Model ======= */
var model = {
	currentCat: null,
		cats : [{
			name: 'Meow',
			imgSrc: 'images/catOne.jpg',
			clickCount: 0
		},{
			name: 'Kitty',
			imgSrc: 'images/catTwo.jpg',
			clickCount: 0
		},{
			name: 'Tobby',
			imgSrc: 'images/catThree.jpg',
			clickCount: 0
		},{
			name: 'Lucky',
			imgSrc: 'images/catFour.jpg',
			clickCount: 0
		}
	]
}
/* ======= Controller ======= */
var controller = {
	init: function() {
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	},

	updateInfo: function(name, imgSrc, count) {
		model.currentCat.name = name;
		console.log(model.currentCat.name);
		//model.currentCat.imgSrc = imgSrc;
		//model.currentCat.clickCount = count;
		catView.render();
	}
}
/* ======= View ======= */

var catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');
		this.adminBtn = document.getElementById('adminBtn');
		this.adminForm = document.getElementById('adminForm');
		this.formVisibility = true;
		this.nameInputVal = document.getElementById('nameInput').value;
		this.imgSrcInputVal = document.getElementById('imgSrcInput').value;
		this.clickInput = document.getElementById('clickInput').value;
		this.saveBtn = document.getElementById('saveBtn');

		/*
		this.catImageElem.click(function(){
			controller.incrementCounter();
		});
		*/
		this.catImageElem.addEventListener('click', function(){
            controller.incrementCounter();
        });

        this.saveBtn.addEventListener('click', function(){
        	controller.updateInfo(this.nameInputVal, this.imgSrcInputVal, this.clickInput);
        });

		this.render();
	},

	render: function() {
		var currentCat = controller.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
		this.adminBtn.addEventListener('click', function(e){
			if(this.formVisibility){
				document.getElementById('adminForm').style.display = "none";
				this.formVisibility = false;
			} else {
				document.getElementById('adminForm').style.display = "block";
				this.formVisibility = true;
			}	
        });
		
	}
}

var catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},

	render: function() {
		var cat, elem, i;
		var cats = controller.getCats();

		for (i=0; i< cats.length; i++){
			cat = cats[i];
			elem =document.createElement('li');
			elem.textContent = cat.name;

			/*
			elem.click((function(catCopy){
				return function(){
					controller.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));
			*/ 
			elem.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

			this.catListElem.appendChild(elem);
		}
	}
}

controller.init();