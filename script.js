function isSameType(value1, value2) {
	if(isNaN(value1) && isNaN(value2)){
		return true;
	}
  //your js code here
	return  typeof value1 === typeof value2;
}

// // do not change the code below.
let value1 = parseFloat(prompt("Enter Start of the Range."));
let value2 = parseFloat(prompt("Enter End Of the Range."));
alert(isSameType(value1, value2));  
