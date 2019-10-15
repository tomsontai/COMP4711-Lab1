let a = [];
let count = 0;

function addArtists(e) {
    e.id = count;
    count = count + 1;
    a.push(e);
}

function getAllArtists() {
    return a;
}

function getArtist(id) {
    return a[id];
}

function getCount() {
    return a.length;
}

function deleteArtist(id) {
    //for (var i = a.length; i--;) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) {
            a.splice(i, 1);
        }
    }
 }

 function searchArtists(matchString) {
    let arr = [];
    for (var i = 0; i < a.length; i++) {
         if (a[i].name.toUpperCase().indexOf(matchString.toUpperCase()) !== -1) {
             arr.push(a[i]);
        }
    }
    
    return arr;
 }

module.exports = {
    add : addArtists,
    getall : getAllArtists,
    getpeople: getArtist,
    count: getCount(),
    delete: deleteArtist,
    search: searchArtists
}