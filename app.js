// for loop -> davtalt -> neg codiig olon dahin ashigladabg
// for (hedees_ehleh; hed_hurtel, nemegdeh/hasagdah) {}
//for(var i=1; i>=10;i++){
//	console.log(i+"bat");

// i=1 -> 1<=10-> true => 1bat -> i++
// i=2 -> 2<10 -> true => 2bat -> i++
// .....
// i=11 -> 11<=10 -> false
for(var i=10; i>=1;i--){
	console.log(i);
}
for(var i=1; i<=20;i++){
	if(i%2==0){
	console.log("tegsh"+i)
	}	
}	

for(var i=1; i<=100;i++){
	if(i%3==0 && i%5==0 ){
	console.log("3 bolon 5d zereg huvaag dana:"+i)
	}
}
var too=8;
for(var i=1; i<=10;i++){
	console.log(too+"X"+i+"="+too*i);
}
var niilber=0;
var urjver =1;
for(var i=1; i<=10; i++){
	niilber=niilber+i;
	urjver = urjver*i
}
console.log(niilber);
console.log(urjver);
var random=Math.floor(Math.random()*10)+1;
console.log(random);
// prompt garaas oruulnuu
for(var i=1; i<=3; i++){
	var too=+prompt("1-10 hoorond toog taana uu");
	if(random==too){
		alert("zuv taalaa")
		alert("Bayr hurgii"+ i +"dahi udaagar hojloo")
		break;
	}else if (too<0 || too>10){
		alert("buruu utga orullaa");
	}else if(too>random ){
		alert("ih baina");
	}else if(too<random){
		alert("bag baina");
	}else{
		alert("buruu taalaa")
	}if(i==3){
		alert("buh ami duslaa");
	}
}
