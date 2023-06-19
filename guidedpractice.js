class Home {
    constructor (rooms, bathrooms, squareFeet){
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.squareFeet = squareFeet;
}
getHomeInfo() {
    return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
}
}

class SingleFamilyHome extends Home {
    constructor (rooms, bathrooms, squareFeet, yardSize){
        super(rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }
   getHomeInfo() {
    return '${super.getHomeInfo()} It has a ${this.yardSize} square foot yard.';
   } 

}

class Apartment extends Home {
    constructor(rooms, bathrooms, squareFeet, floor) {
        super(rooms, bathrooms, squareFeet);
        this.floor = floor;
    }
    getHomeInfo() {
        return '${super.getHomeInfo()} Its on the ${this.floor} floor.';
    }
}
