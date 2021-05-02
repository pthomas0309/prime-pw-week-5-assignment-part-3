console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  console.log('Adding an album to my collection');
  let vinyl = {
    titleOfAlbum: title,
    recordingArtist: artist,
    published: yearPublished
  }
  collection.push(vinyl)
  return vinyl
}
console.log(addToCollection('Sheer Heart Attack', 'Queen', '1974'));
console.log(addToCollection('The Power to Believe', 'King Crimson', '2003'));
console.log(addToCollection('LP1', 'FKA twigs', '2014'));
console.log(addToCollection('Zaba', 'Glass Animals', '2014'));
console.log(addToCollection('Disintegration', 'The Cure', '1989'));
console.log(addToCollection('Watching Movies with the Sound Off', 'Mac Miller', '2013'));
console.log(collection);

function showCollection(array){
  console.log('Showing Collection');
  console.log(`albums in collection: ${array.length}`);
  for (let album of collection) {
    console.log(album.titleOfAlbum, 'by', album.recordingArtist, 'published in', album.published);
  }
}

console.log(showCollection(collection));
