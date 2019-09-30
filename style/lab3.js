const artistArray = [];

function add_Artist_Form() {
    var x = document.getElementById("inputForm");
    //console.log(x.style.display);
    if (x.style.display == "none" || x.style.display == "") {
        //console.log("aaa");
        x.style.display = "block";
      } else {
        //console.log("bbb");
        x.style.display = "none";
      }



}

function clearForm(){
    document.getElementById("inputFormId").reset();
}
function addToDatabase() {
    let artistText = document.getElementById("inputArtistText").value;
    let aboutText = document.getElementById("inputAboutText").value;
    let urlText = document.getElementById("inputURLText").value;

    console.log("aaa " + artistText);
    console.log("bbb " + aboutText);
    console.log("ccc " + urlText);
    
    if (artistText != '' && aboutText != '' && urlText != ''){
        var temporaryArray = [artistText, aboutText, urlText];
        // for (i = 0; i < temporaryArray.length; i++) {
            //console.log(temporaryArray[i].value);
        artistArray.push(temporaryArray);
    }

}

function showAllArtists() {
    if (artistArray.length != 0) {
        for (i = 0; i < artistArray.length; i++) {
            var artistClass = document.createElement('div');
            artistClass.setAttribute('class', 'artist');


            var artistImg = document.createElement('div');
            artistImg.setAttribute('class', 'artistImage');
            var imageSrc = document.createElement('img');
            imageSrc.src = artistArray[i][2];
            artistImg.appendChild(imageSrc);


            artistClass.appendChild(artistImg);

            var artistInfoClass = document.createElement('div');
            var artistTitleClass = document.createElement('div');
            var artistDescClass = document.createElement('div');
            
            artistInfoClass.setAttribute('class', 'artistInfo');
            artistTitleClass.setAttribute('class', 'artistTitle');
            artistDescClass.setAttribute('class', 'artistDesc');

            artistTitleClass.textContent = artistArray[i][0];
            artistDescClass.textContent = artistArray[i][1];
            
            artistInfoClass.appendChild(artistTitleClass);
            artistInfoClass.appendChild(artistDescClass);
            
            

            artistClass.appendChild(artistInfoClass);

            var deleteButtonClass = document.createElement("INPUT");
            deleteButtonClass.setAttribute("type", "button");
            deleteButtonClass.setAttribute("value", "Delete");
            deleteButtonClass.setAttribute("id", "delete" + artistArray.length);
            deleteButtonClass.setAttribute("onclick", "deleteFunction(this)");
            deleteButtonClass.setAttribute("name", i);
            deleteButtonClass.setAttribute("class", "btn btn-danger");

            
            //deleteButtonClass.addEventListener('onClick', 'deleteFunction()');
            artistClass.appendChild(deleteButtonClass);

            var ulElementId = document.getElementById("ulElement");
            ulElementId.appendChild(artistClass);
        }

    }

}

function showInfo() { // Displays the artist being added to the array.
    let artistText = document.getElementById("inputArtistText").value;
    let aboutText = document.getElementById("inputAboutText").value;
    let urlText = document.getElementById("inputURLText").value;

    if (artistArray.length > 0 && artistText != '' && aboutText != '' && urlText != '') {
        var artistClass = document.createElement('div');
        artistClass.setAttribute('class', 'artist');

        var artistImg = document.createElement('div');
        artistImg.setAttribute('class', 'artistImage');
        var imageSrc = document.createElement('img');
        imageSrc.src = artistArray[artistArray.length - 1][2];
        artistImg.appendChild(imageSrc);


        artistClass.appendChild(artistImg);

        var artistInfoClass = document.createElement('div');
        var artistTitleClass = document.createElement('div');
        var artistDescClass = document.createElement('div');
        
        artistInfoClass.setAttribute('class', 'artistInfo');
        artistTitleClass.setAttribute('class', 'artistTitle');
        artistDescClass.setAttribute('class', 'artistDesc');

        artistTitleClass.textContent = artistArray[artistArray.length - 1][0];
        artistDescClass.textContent = artistArray[artistArray.length - 1][1];

        
        artistInfoClass.appendChild(artistTitleClass);
        artistInfoClass.appendChild(artistDescClass);

        artistClass.appendChild(artistInfoClass);

        var deleteButtonClass = document.createElement("INPUT");
        deleteButtonClass.setAttribute("type", "button");
        deleteButtonClass.setAttribute("value", "Delete");
        deleteButtonClass.setAttribute("id", "delete" + artistArray.length);
        deleteButtonClass.setAttribute("onclick", "deleteFunction(this)");
        deleteButtonClass.setAttribute("name", artistArray.length - 1)
        deleteButtonClass.setAttribute("class", "btn btn-danger");

        
        artistClass.appendChild(deleteButtonClass);

        var ulElementId = document.getElementById("ulElement");
        ulElementId.appendChild(artistClass);

        console.log("name = " + deleteButtonClass.name);

    }

    // CLEAR FORM
    document.getElementById("inputFormId").reset();
}

function deleteFunction(obj) {
    console.log("delete function is called");
    var x = document.getElementById("delete");
    var y = document.getElementById("ulElement");
    
    console.log("Object is " + obj.name);

    //if (this) {
        
       // console.log("what's this? " + x.name);
        artistArray.splice(parseInt(obj.name, 10), 1);
        y.remove();
    //}
    var z = document.getElementById("baseDiv");

    if (!document.getElementById("ulElement")) {
        var zz = document.createElement("ul");
        zz.setAttribute("id", "ulElement");

        z.appendChild(zz);

    }
    //var x = document.getElementById("ulElement");
    //x.remove(x.selectedIndex);

    // var y = document.getElementById("delete");
    // console.log(y.id);
    showAllArtists();

}