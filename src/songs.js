
let information = [];
function Informations(name, artist, image, music) {
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.music = music;
  }
let song1 = new Informations("Bella Ciao", "El Profesor", "images/m-1.jpg", "sounds/m-1.mp3");
let song2 = new Informations("My life is Going On", "Cecilia Krull", "images/m-2.jpg", "sounds/m-2.mp3");
let song3 = new Informations("On My Way", "Alan Walker", "images/m-3.jpg", "sounds/m-3.mp3");
let song4 = new Informations("Faded", "Alan Walker", "images/m-4.jpg", "sounds/m-4.mp3");
let song5 = new Informations("Alone", "Alan Walker", "images/m-5.jpg", "sounds/m-5.mp3");
let song6 = new Informations("In The End", "Linkin Park", "images/m-6.jpg", "sounds/m-6.mp3");
let song7 = new Informations("Believer", "Imagine Dragons", "images/m-7.jpg", "sounds/m-7.mp3");


information.push(song1);
information.push(song2);
information.push(song3);
information.push(song4);
information.push(song5);
information.push(song6);
information.push(song7);

export default information;
