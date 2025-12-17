class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.141241, lng: 127.121 }
    this.id = new Date().toString() + Math.random().toString(); // normally this would come from a BE but as we don't have one we create an id ourselves
  }
}
