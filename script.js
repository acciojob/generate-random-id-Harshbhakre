function makeid(l) {
 let result = "";
	let chars = "ABCDEFGHIJKELMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0;i<l;i++){
		result += chars.charAt(Math.random()*62)
	}
	return result
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
