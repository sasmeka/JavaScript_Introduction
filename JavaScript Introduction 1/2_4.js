let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
const data_saya = {
    name: "Verdi Sasmeka",
    email: "verdysas@gmail.com",
    hobbies: ["mendengarkan musik", "olahraga"]
}
let news = { ...data, ...data_saya }

console.log(news)

const { address } = news
const { street, city } = address
console.log(street);
console.log(city);
