const person = {
    name:"shaheer",
    age:22
}
function details(place){
    console.log(`my name is ${this.name},age is ${this.age} and place is ${place}`);
}

details.call(person,'mukkam')
details.apply(person,['areacode'])
const a = details.bind(person,'kozhikode')
a()