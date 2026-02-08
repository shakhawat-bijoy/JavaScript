// key value structure.
let obj = {
  name: "Bijoy",
  age: 23,
  email: "shakhawatbijoy1@gmail.com",
  address: "Dhanmodi, Dhaka",
};

// .dot vs bracket [] notation.
obj.name;
obj["name"];

//Nesting and deep access.
const user = {
  name: "Bijoy",
  address: {
    city: "Dhaka",
    postalCode: 1612,
    location: {
      lat: 23.2,
      lng: 77.4,
    },
  },
};
user.address.location.lat;

// Object destructuring.
let { lat, lng } = user.address.location;

// Looping: for-in, Object.keys, Object.entries.
for (let key in obj) {
  console.log(key, ":", obj[key]);
}

Object.keys(obj);
Object.entries(obj);

// Copying objects: spread, Object.assign, deep clone.
let obj2 = { ...obj };

// problem nested object copying using spread operator.
let user2 = { ...user };
user2.address.city = "narsingdi";

// deep clone.
let user3 = JSON.parse(JSON.stringify(user));

// Optional chaining, computed properties
let obj3 = Object.assign({ price: Infinity }, obj);

// Optional chaining.
obj?.address?.city;

// computed properties

let role = "admin";

let object = {
  name: "Piyash",
  age: "23",
  email: "shakhawatbijoy@hotmail.com",
  address: {
    city: "Dhaka",
  },
  [role]: "Piyash",
};
