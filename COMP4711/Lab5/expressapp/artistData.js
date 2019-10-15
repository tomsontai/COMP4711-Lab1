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
    for (var i = a.length; i--;) {
        if (a[i].id === id) {
            a.splice(i, 1);
        }
    }
  

    //a.splice(id, 1);
}

module.exports = {
    add : addArtists,
    getall : getAllArtists,
    getpeople: getArtist,
    count: getCount(),
    delete: deleteArtist
}