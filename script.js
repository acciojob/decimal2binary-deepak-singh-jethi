function decimalToBinary(num) {
  let binary;
	while(num>0){
		binary = (num%2).toString()+binary;
		num=num/2;
	}
	return binary;
  
}

window.decimalToBinary = decimalToBinary;
