function decimalToBinary(num) {
   let binary  = "";	
   while(num>0){
		let rem = num%2;
		num = Math.floor(num/2);
		binary = rem+binary;
		
	}
	return Math.(binary);
  
}

window.decimalToBinary = decimalToBinary;
