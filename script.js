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

function Business(name, address, city, phone, email, type){
	this.name = name;
	this.address = address;
	this.city = city;
	this.phone = phone;
	this.email = email;
	this.type = type;
	
	this.toString = this.name + "\n" + this.address + "\n" + this.city + "\n" + this.phone + "\n" + this.email + "\n" + this.type;
}

var businesses = [
	new Business("Purple Shrimp", "313 N Sapodilla Ave", "West Palm Beach", "561-386-2303", "thepurpleshrimp@gmail.com", "Restaurant"),
	new Business("Happy Chang", "3897 Haverhill Rd N Ste 124", "West Palm Beach", "561-962-8758", "n/a", "Restaurant"),
	new Business("Renaissance Hair Salon", "3897 Haverhill Rd N Ste 125", "West Palm Beach", "561-681-6833", "info@renaissancehaircare.com", "Salon"),
	new Business("Bay Bay's Chicken & Waffles", "326 Congress Ave", "Boynton Beach", "561-364-1187", "n/a", "Restaurant")
];