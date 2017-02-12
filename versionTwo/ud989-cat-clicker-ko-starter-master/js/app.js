var Cat = function() {
	this.clickCount =  ko.observable(0);
	this.name = ko.observable('Tabby');
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
		return title
	}, this);
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.nicknames = ko.observableArray(["Tabtab","T-Bone","Mr.T", "Tabitha Tab Tabby Catty Cat"]);
}

var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	}

	
}

ko.applyBindings(new ViewModel);
