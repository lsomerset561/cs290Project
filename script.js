//disable form submit if there are invalid fields
(function () {
	if(window.location.pathname === "submit.html"){
		window.addEventListener('load', function () {
			var businessForm = document.getElementById('needsValidation');
			businessForm.addEventListener('submit', function (event) {
				if (businessForm.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				businessForm.classList.add('was-validated');
			}, false);
		}, false);
	}
})();

function Business(name, address, city, phone, email, type, logo){
	this.name = name;
	this.address = address;
	this.city = city;
	this.phone = phone;
	this.email = email;
	this.type = type;
	this.logo = logo;
	
	this.toString = this.name + "\n" + this.address + "\n" + this.city + "\n" + this.phone + "\n" + this.email + "\n" + this.type;
}

var businesses = [
	new Business("Purple Shrimp", "313 N Sapodilla Ave", "West Palm Beach", "561-386-2303", "thepurpleshrimp@gmail.com", "Restaurant", "/images/purpleShrimp.png"),
	new Business("Happy Chang", "3897 Haverhill Rd N Ste 124", "West Palm Beach", "561-962-8758", "n/a", "Restaurant", "/images/happychang.jpg"),
	new Business("Renaissance Hair Salon", "3897 Haverhill Rd N Ste 125", "West Palm Beach", "561-681-6833", "info@renaissancehaircare.com", "Salon", "/images/renaissance.jpg"),
	new Business("Bay Bay's Chicken & Waffles", "326 Congress Ave", "Boynton Beach", "561-364-1187", "n/a", "Restaurant", "/images/baybays.png")
];

var searchResults = document.getElementById("searchResults");

//function addBusinessResult(){
	var businessCard = document.createElement("div");
	businessCard.setAttribute("class", "businessCard");
	businessCard.setAttribute("class", "container");

	var logo = document.createElement("img");
	logo.setAttribute("src", businesses[0].logo);
	logo.setAttribute("class", "searchLogos");

	var info = document.createElement("div");
	info.setAttribute("class", "searchBusinesses");

	var infoHeader = document.createElement("h4");
	var infoHeaderText = document.createTextNode(businesses[0].name);
	infoHeader.appendChild(infoHeaderText);
	info.appendChild(infoHeader);

	var infoLines = document.createElement("ul");
	addInfoLine(businesses[0].address);
	addInfoLine(businesses[0].city);
	addInfoLine(businesses[0].phone);
	addInfoLine(businesses[0].type);

	function addInfoLine(detail){
		var infoLine = document.createElement("li");
		var infoLineText = document.createTextNode(detail);
		infoLine.appendChild(infoLineText);
		info.appendChild(infoLine);
	}

	businessCard.appendChild(logo);
	businessCard.appendChild(info);
	searchResults.appendChild(businessCard);
//}