var i=0;
while(i<10){
	i=i+1;
	console.log(i);
}

//infinite loop
while(true){
	//keep doing this
}

var choice;
do {
choice=getChoiceFromUserInput();
} while(!isInputValid(choice));

var x=0;
//Omit initialitzation
for (;x<5;x++){
	console.log("Hello");
}
//Omit exit condition
for (var j=0;;j++){
	//exit condition
	if(j>=5){
		break;
	}else{
		console.log("Hello");
	}
}
//Omit increment
for (var k=0; k<5;){
	console.log("Hello");
	k++; 
}

var arr = [10, 20, 30];
// Assign all array values to 100
for (i = 0; i < arr.length; arr[i++] = 100);
console.log(arr);