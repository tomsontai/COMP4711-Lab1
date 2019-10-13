let a = [];

function addArtists(e) {
    a.push(e);
}

function getAllArtists() {
    return a;
}

function getArtist(id) {
    return a[id];
}

module.exports = {
    add : addArtists,
    getall : getAllArtists,
    getpeople: getArtist
}