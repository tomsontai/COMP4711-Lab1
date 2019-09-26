var artistArray = [];


// Get a reference to the database service
var database = firebase.database();

function add_Artist_Form() {
    var x = document.getElementById("inputForm");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

}

function addToDatabase() {
    artistText = document.getElementById("inputArtistText");
    aboutText = document.getElementById("inputAboutText");
    urlText = document.getElementById("inputURLText");

    var temporaryArray = [artistText, aboutText, urlText];
    for (i = 0; i < temporaryArray.length; i++) {
        //console.log(temporaryArray[i].value);
        artistArray.push(temporaryArray);
    }
    //console.log("Length is " + artistArray.length);
    for (i = 0; i < artistArray.length / 3; i++) {
        console.log(artistArray[0][0].value);
        console.log(artistArray[0][1].value);
        console.log(artistArray[0][2].value);
    }
}

function showInfo() {
    if (artistArray.length > 0) {
        var artistClass = document.createElement('div');

        var artistImg = document.createElement('div');
        artistImg.setAttribute('class', 'artistImage');
        var imageSrc = document.createElement('img');
        imageSrc.src = artistArray[0][2].value;
        artistImg.appendChild(imageSrc);


        artistClass.appendChild(artistImg);

        var artistInfoClass = document.createElement('div');
        var artistTitleClass = document.createElement('div');
        var artistDescClass = document.createElement('div');
        
        artistInfoClass.setAttribute('class', 'artistInfo');
        artistTitleClass.setAttribute('class', 'artistTitle');
        artistDescClass.setAttribute('class', 'artistDesc');

        artistTitleClass.textContent = artistArray[0][0];
        artistInfoClass.textContent = artistArray[0][1];

        artistInfoClass.appendChild(artistTitleClass);
        artistInfoClass.appendChild(artistDescClass);

        artistClass.appendChild(artistInfoClass);

        var deleteButtonClass = document.createElement("button");
        deleteButtonClass.value("Delete");

        artistClass.appendChild(deleteButtonClass);

        var ulElementId = document.getElementById("ulElement");
        ulElementId.appendChild(artistClass);

/* <div class="artistImage">
        <img src="https://randomuser.me/api/portraits/med/men/87.jpg">
    </div>
    <div class="artistInfo">
        <div class="artistTitle">
            Barot Bellingham
        </div>
        <div class="artistDesc">
            Royal Academy of Painting and Sculpture
        </div>
    </div>
</div> */
        
        //document.body.appendChild(artistImg);
         //<div class="artistImage"></div>

        //document.body.appendChild(imageSrc);
        // https://randomuser.me/api/portraits/med/women/1.jpg


        console.log("artistimg = " + artistImg);
        console.log("imageSrc = " + imageSrc);
//         var div = document.createElement('div');
// div.textContent = "Sup, y'all?";
// div.setAttribute('class', 'note');
// document.body.appendChild(div);
// <div class="note">Sup, y'all?</div>.
    }
}