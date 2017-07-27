var id = 1;

function Cat(name, picture){
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.status = ["Happy", "Indifferent","Pissed", "Now Missing"];
    this.petCount = 0;

    id++;
}


var catLady = {
    cats: []
}


var cat1 = new Cat("Mr Snubbles", "https://s-media-cache-ak0.pinimg.com/736x/fe/51/aa/fe51aa2567ce6aad7b5f30df0ca9e57f--the-adams-hats.jpg")
var cat2 = new Cat("Mittens", "https://s-media-cache-ak0.pinimg.com/736x/0b/b5/ce/0bb5cee04e452f47684d77014311b968--owls-funny-cats.jpg")
var cat3 = new Cat("Jim", "https://s-media-cache-ak0.pinimg.com/736x/c8/e8/f8/c8e8f8dd0dccbbce54e4e7b750a821aa--wedding-cakes.jpg")

catLady.cats.push(cat1,cat2,cat3);



function render(cats){
//draw all my cats to my screen 
    var template = '';
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        //check number of pets to determin status
        var statusIndex = 0;

        var catPhoto = cat.picture;
        if(cat.petCount > 5){
            statusIndex =1;
        }if (cat.petCount > 10){
            statusIndex =2;
        }if (cat.petCount > 20){
            statusIndex =3;
            catPhoto = "missing-cat.jpg";
        }


        template+= `
        <div class="cat">
            <img src="${catPhoto}" class="cat-image">
            <h3>Name: ${cat.name} </h3>
            <p> Status: ${cat.status[statusIndex]} </p>
            <p> Number or rubz: ${cat.petCount} </p>
            <button type="button" onclick="pet(${cat.id})">Pet Me! </button>
        </div>
        
        `;
    }

    document.getElementById("cats").innerHTML = template;
}

render(catLady.cats);


function findCatByID(catID, catArray){
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if (catID === cat.id){
            return cat;
        }
    }
}
function pet(catID){
    findCatByID(catID, catLady.cats).petCount++;
    render(catLady.cats);
}