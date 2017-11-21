function Business(name, address, city, phone, email, type, logo, menu){
	this.name = name;
	this.address = address;
	this.city = city;
	this.phone = phone;
	this.email = email;
	this.type = type;
	this.logo = logo;
	this.menu = menu;
	
	this.toString = this.name + "\n" + this.address + "\n" + this.city + "\n" + this.phone + "\n" + this.email + "\n" + this.type;
}

var businesses = [
	new Business("Purple Shrimp", "313 N Sapodilla Ave", "West Palm Beach", "561-386-2303", "thepurpleshrimp@gmail.com", "Restaurant", "/images/purpleShrimp.png", "/files/ThePurpleShrimp_MenuFromGrubHub.pdf"),
	new Business("Happy Chang", "3897 Haverhill Rd N Ste 124", "West Palm Beach", "561-962-8758", "n/a", "Restaurant", "/images/happychang.jpg", "/files/HappyChang_S_FL_MenuPage.pdf"),
	new Business("Renaissance Hair Salon", "3897 Haverhill Rd N Ste 125", "West Palm Beach", "561-681-6833", "info@renaissancehaircare.com", "Salon", "/images/renaissance.jpg", "/files/Services_RenaissanceHairCare.pdf"),
	new Business("Bay Bay's Chicken & Waffles", "326 Congress Ave", "Boynton Beach", "561-364-1187", "n/a", "Restaurant", "/images/baybays.png", "/files/BayBays-Catering.pdf")
];

var searchResults = document.getElementById("searchResults");

for (var i = 0; i < businesses.length; i++){
	var businessCard = document.createElement("div");
	businessCard.setAttribute("class", "businessCards");

	var logo = document.createElement("img");
	logo.setAttribute("src", businesses[i].logo);
	logo.setAttribute("class", "searchLogos");

	var info = document.createElement("div");
	info.setAttribute("class", "searchBusinesses");

	var infoHeader = document.createElement("h5");
	var infoHeaderText = document.createTextNode(businesses[i].name);
	infoHeader.appendChild(infoHeaderText);
	info.appendChild(infoHeader);

	var infoLines = document.createElement("ul");
	addInfoLine(businesses[i].address);
	addInfoLine(businesses[i].city);
	addInfoLine(businesses[i].phone);
	addInfoLine(businesses[i].type);
	
	var infoLineMenu = document.createElement("a");
	infoLineMenu.setAttribute("href", businesses[i].menu);
	infoLineMenu.setAttribute("download", "");
	var infoLineMenuBtn = document.createElement("button");
	infoLineMenuBtn.setAttribute("type", "submit");
	var infoLineMenuBtnText = document.createTextNode("Download Menu");
	infoLineMenuBtn.appendChild(infoLineMenuBtnText);
	infoLineMenu.appendChild(infoLineMenuBtn);
	info.appendChild(infoLineMenu);
	

	function addInfoLine(detail){
		var infoLine = document.createElement("li");
		var infoLineText = document.createTextNode(detail);
		infoLine.appendChild(infoLineText);
		info.appendChild(infoLine);
	}

	businessCard.appendChild(logo);
	businessCard.appendChild(info);
	searchResults.appendChild(businessCard);
}