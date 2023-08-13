function decimalToBinary(num) {
   let binary  = 0;
   let rem = 0;
   let digitPlace = 1;	

   while(num>0){
		rem = num%2;
		num = Math.floor(num/2);
		binary = binary+rem*digitPlace;
		digitPlace = digitPlace*10;
	}
	return Math.abs(binary);
  
}

window.decimalToBinary = decimalToBinary;
