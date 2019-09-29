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

function addToDatabase() {
    let artistText = document.getElementById("inputArtistText");
    let aboutText = document.getElementById("inputAboutText");
    let urlText = document.getElementById("inputURLText");

    // console.log("aaa " + artistText.value);
    // console.log("bbb " + aboutText.value);
    // console.log("ccc " + urlText.value);

    if (artistText.value != '' && aboutText.value != '' && urlText != ''){
        var temporaryArray = [artistText, aboutText, urlText];
        // for (i = 0; i < temporaryArray.length; i++) {
            //console.log(temporaryArray[i].value);
        artistArray.push(temporaryArray);
        // }
        //console.log("Length is " + artistArray.length);
        // for (i = 0; i < artistArray.length / 3; i++) {
        //     console.log(artistArray[0][0].value);
        //     console.log(artistArray[0][1].value);
        //     console.log(artistArray[0][2].value);
        // }
    }
}

function showAllArtists() {
    if (artistArray.length != 0) {
        for (i = 0; i < artistArray.length; i++) {
            var artistClass = document.createElement('div');
        

            var artistImg = document.createElement('div');
            artistImg.setAttribute('class', 'artistImage');
            var imageSrc = document.createElement('img');
            imageSrc.src = artistArray[i][2].value;
            artistImg.appendChild(imageSrc);


            artistClass.appendChild(artistImg);

            var artistInfoClass = document.createElement('div');
            var artistTitleClass = document.createElement('div');
            var artistDescClass = document.createElement('div');
            
            artistInfoClass.setAttribute('class', 'artistInfo');
            artistTitleClass.setAttribute('class', 'artistTitle');
            artistDescClass.setAttribute('class', 'artistDesc');

            artistTitleClass.textContent = artistArray[i][0].value;
            artistInfoClass.textContent = artistArray[i][1].value;

            artistInfoClass.appendChild(artistTitleClass);
            artistInfoClass.appendChild(artistDescClass);

            artistClass.appendChild(artistInfoClass);

            var deleteButtonClass = document.createElement("INPUT");
            deleteButtonClass.setAttribute("type", "button");
            deleteButtonClass.setAttribute("value", "Delete");
            deleteButtonClass.setAttribute("id", "delete" + artistArray.length);
            deleteButtonClass.setAttribute("onclick", "deleteFunction(this)");
            deleteButtonClass.setAttribute("name", artistArray.length - 1)
            
            //deleteButtonClass.addEventListener('onClick', 'deleteFunction()');
            artistClass.appendChild(deleteButtonClass);

            var ulElementId = document.getElementById("ulElement");
            ulElementId.appendChild(artistClass);
        }

    }

}

function showInfo() { // Displays the artist being added to the array.
    let artistText = document.getElementById("inputArtistText");
    let aboutText = document.getElementById("inputAboutText");
    let urlText = document.getElementById("inputURLText");
    // let a = artistArray[0][0].value;
    // let b = artistArray[0][1].value;
    // let c = artistArray[0][2].value;

    // if (artistArray.length > 0 && a != '' && b != '' && c != '') {
    if (artistArray.length > 0 && artistText.value != '' && aboutText.value != '' && urlText != '') {
        var artistClass = document.createElement('div');
        

        var artistImg = document.createElement('div');
        artistImg.setAttribute('class', 'artistImage');
        var imageSrc = document.createElement('img');
        imageSrc.src = artistArray[artistArray.length - 1][2].value;
        artistImg.appendChild(imageSrc);


        artistClass.appendChild(artistImg);

        var artistInfoClass = document.createElement('div');
        var artistTitleClass = document.createElement('div');
        var artistDescClass = document.createElement('div');
        
        artistInfoClass.setAttribute('class', 'artistInfo');
        artistTitleClass.setAttribute('class', 'artistTitle');
        artistDescClass.setAttribute('class', 'artistDesc');

        artistTitleClass.textContent = artistArray[artistArray.length - 1][0].value;
        artistInfoClass.textContent = artistArray[artistArray.length - 1][1].value;

        artistInfoClass.appendChild(artistTitleClass);
        artistInfoClass.appendChild(artistDescClass);

        artistClass.appendChild(artistInfoClass);

        var deleteButtonClass = document.createElement("INPUT");
        deleteButtonClass.setAttribute("type", "button");
        deleteButtonClass.setAttribute("value", "Delete");
        deleteButtonClass.setAttribute("id", "delete" + artistArray.length);
        deleteButtonClass.setAttribute("onclick", "deleteFunction(this)");
        deleteButtonClass.setAttribute("name", artistArray.length - 1)
        
        //deleteButtonClass.addEventListener('onClick', 'deleteFunction()');
        artistClass.appendChild(deleteButtonClass);

        var ulElementId = document.getElementById("ulElement");
        ulElementId.appendChild(artistClass);

        // console.log("delete button id = " + deleteButtonClass.id);
        console.log("name = " + deleteButtonClass.name);
        // console.log("artistimg = " + artistImg);
        // console.log("imageSrc = " + imageSrc);
//         var div = document.createElement('div');
// div.textContent = "Sup, y'all?";
// div.setAttribute('class', 'note');
// document.body.appendChild(div);
// <div class="note">Sup, y'all?</div>.
    }
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