export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // { lat: 0.141241, lng: 127.121 }
    this.id = id; //  new Date().toString() + Math.random().toString(); // normally this would come from a BE but as we don't have one we create an id ourselves
  }
}
