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
        
        var artistImg = document.createElement('div');
        artistImg.setAttribute('class', 'artistImage');
        document.body.appendChild(artistImg);

        var imageSrc = document.createElement('src');

//         var div = document.createElement('div');
// div.textContent = "Sup, y'all?";
// div.setAttribute('class', 'note');
// document.body.appendChild(div);
// <div class="note">Sup, y'all?</div>.
    }
}