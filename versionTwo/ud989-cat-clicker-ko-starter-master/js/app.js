
var initialCats = [{
	clickCount: 0,
	name: 'Tabby',
	imgSrc: "img/22252709_010df3379e_z.jpg",
	nicknames: ["Tabtab","T-Bone","Mr.T", "Tabitha Tab Tabby Catty Cat"]
},{
	clickCount: 0,
	name: 'Tiger',
	imgSrc: 'img/434164568_fea0ad4013_z.jpg',
	nicknames: ['Titi']
},{
	clickCount: 0,
	name: 'Scaredy',
	imgSrc: 'img/1413379559_412a540d29_z.jpg',
	nicknames: ['Scary']
},{
	clickCount: 0,
	name: 'Shadow',
	imgSrc: 'img/4154543904_6e2428c421_z.jpg',
	nicknames: ['Sony']
},{
	clickCount: 0,
	name: 'Nina',
	imgSrc: 'img/9648464288_2516b35537_z.jpg',
	nicknames: ['Ninja']
}];

var Cat = function(data) {
	this.clickCount =  ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if(clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child';
		} else if (clicks < 200) {
			title = 'Teen';
		} else {
			title = 'Ninja'
		}
		return title;
	}, this);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	};

	
}

ko.applyBindings(new ViewModel);
