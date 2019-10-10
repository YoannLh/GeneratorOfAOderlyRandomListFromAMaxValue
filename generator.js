// generateur d'une liste "aléatoire ordonnée" d'après une valeur maximale

// Saisie de la valeur maximale pour l'exemple :

let max = prompt("Saississez une valeur maximale :");

// Il faut incrémenter cette valeur de un pour que Math.random puisse utiliser la valeur maximale réelle :

max++;

// Le code, à proprement parler :

const values = []; // pour reccueillir les valeurs ordonnées 

const finalValues = []; // pour reccueillir les valeurs en désordonné

// Création de toutes les valeurs possibles et push dans values[];

for (let i = 1; i < max; i++) {

	values.push(i);
	console.log(values);
}

// Parcours de values[], récupération random d'une valeur et suppression de cette valeur dans le tableau avec splice() :

for (let y = 1; y <= values.length; y) { 

	let numberRandom = Math.floor(Math.random() * Math.floor(values.length));
	let random = values.splice(numberRandom, 1);
	finalValues.push(random);
	
}
console.log(finalValues);


// Enjoy ! ;)

