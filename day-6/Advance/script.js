//forEach
let arr = [11, 68, 38, 86, 26];

arr.forEach(function (val) {
  console.log(val + 5); //if you want to add any number into the element of array just the the number like this one.
}); //it will run the function for every elements of array.


//Map

//You should use the map() method whenever you want to transform data from one array into a new array without changing the original one

// map শুধু তখনই ব্যবহার করবেন যখন আপনি আগের কোনো অ্যারের ডাটার ওপর ভিত্তি করে একটি নতুন অ্যারে তৈরি করতে চান।

// map দেখা মাত্রই মনের মধ্যে একটি খালি (blank) অ্যারে কল্পনা করে নেবেন।

let array = [11, 68, 38, 86, 26];

let newarr = array.map(function(val){
    return 12;
})


// filter

let filarr = [12, 8, 48, 68, 76]

let newfarr = filarr.filter(function (val) {
    if(val > 10) return true;
})


// reduce

let rarr = [12, 8, 48, 68, 76]

let ans = rarr.reduce(function(accumulator, val){
    return accumulator + val;
}, 0);

// The reduce() method in JavaScript is used to "reduce" an array of multiple values into a single value (like a number, string, object, or even another array)



// find

let findarr = [11, 68, 38, 11, 86, 26];

let farr = findarr.find(function (val){
    return val === 11;
});
// it will return the first value which match first.


// some

let sarr = [12, 8, 48, 68, 76, 96];

let any = sarr.some(function (val) {
    return val > 85;
})
//it will return true if condition satisfy.



// every 

let earr = [11, 68, 38, 86, 26];

let eve = earr.every(function(val){
    return val > 20;
})

// it is oposite of some method




/*
Javascript map() মেথড তখনই ব্যবহার করবেন যখন আপনি একটি অ্যারের প্রতিটি উপাদানকে (element) পরিবর্তন করে একটি নতুন অ্যারে তৈরি করতে চান।

সহজ কথায়, যখন আপনার কাছে একগুচ্ছ ডাটা আছে এবং আপনি সেই ডাটার প্রতিটি আইটেমের ওপর একই কাজ চালিয়ে একটি নতুন রেজাল্ট সেট পেতে চান, তখন map() ব্যবহার করা হয়।

কখন ব্যবহার করবেন?
১. ডাটা ট্রান্সফর্ম করতে: ধরুন আপনার কাছে কিছু সংখ্যার অ্যারে আছে, আপনি সেগুলোকে দ্বিগুণ করতে চান।
২. প্রপার্টি বের করতে: অবজেক্টের অ্যারে থেকে নির্দিষ্ট কোনো ভ্যালু (যেমন শুধু নাম বা আইডি) আলাদা করতে।
৩. রিয়্যাক্ট (React) লিস্ট রেন্ডারিং: এপিআই থেকে আসা ডাটাকে HTML বা JSX এলিমেন্টে রূপান্তর করতে এটি সবচেয়ে বেশি ব্যবহৃত হয়। React Documentation অনুযায়ী লিস্ট দেখানোর এটিই স্ট্যান্ডার্ড উপায়।
৪. ফরম্যাটিং: দামের সাথে টাকার চিহ্ন যোগ করা বা তারিখের ফরম্যাট পরিবর্তন করা।
*/