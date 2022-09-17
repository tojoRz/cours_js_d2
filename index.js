//---------- objet -------------------
var person  = {
    firstname: "rakoto",
    lastname: "rasoa"
}
console.log(person.firstname);

person.age = 40; //ajout

person.lastname = "Tojo"//modification

console.log(person) // Affichage

delete person.firstname; // suppression
console.log(person);

var olona = person;
console.log(olona,person);

var identity = {
    nom: "Razaka",
    prenom: "Tojo",
    age: 20,
    date_de_naissance: "15 Février 2002",
    adresse: "Lot IAV 221 D",
    telephone: "0349110492",

}
console.log(identity);
// afaka asina tableau ao anaty objet ray
var moi = {
    nom: "TOJO",
    prenom: "Kely",
    etude: [
        {
            etablissement: "IS INFO",
            diplome: "Licence",
            annee:"2022"
        },
        {
            etablissement: "IS INFO",
            diplome: "Licence",
            annee:"2022"
        }
    ]
}
for (key in moi.etude){
    console.log(moi.etude[key])
}

//-----------exercice---------------------
var personne = {
    nom: "TOJO",
    prenom: "Kely",
}
personne.experiences = [
    {
        entreprise: "Lorem",
        post: "ipsum"
    }
]
console.log(personne);

//-------concatenation(fanakambanana )
var personne1 = {
    nom: "TOJO",
    prenom: "Kely",
    nomComplet: function() {
        return this.nom + this.prenom;
    }
}
console.log(personne1.nom + personne1.prenom)
console.log(personne1.nomComplet());

//-----exerccice-------
var personne2 =[
    {
        nom: "TOJO",
        prenom: "Kely",
    },
    {
        nom: "FANA",
        prenom: "be",
    },
    {
        nom: "JACK",
        prenom: "Be",
    }
] 

personne2.forEach(element => {
    return element.fullName = element.nom +" "+ element.prenom
    
});
console.log(personne2);

//--------
var calculatrice = {
    addition: (a,b) => {
        return a+b;
    },
    multiplication: (a,b) => {
        return a*b;
    },
    division: (a,b) => {
        return a/b;
    },
    soustraction: (a,b) => {
        return a-b;
    }
}

console.log(calculatrice.addition(1,2));
console.log(calculatrice.multiplication(4,2));
console.log(calculatrice.soustraction(4,2));
console.log(calculatrice.division(4,2));
