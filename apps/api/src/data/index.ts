const users = [{ userName: "galamo@a.com", password: "123qwe123qwe" },
{ userName: "adina@funis.yaniv", password: "123qwe123qwe" }]
const sessions = {}
const orders = [
    { "date": "2022-04-20T17:30:00.000Z", "orderOwner": "galamo@a.com", "numberOfSeats": 2, "insideOrOutside": "inside" },
    { "date": "2022-04-20T17:30:00.000Z", "orderOwner": "adina@funis.yaniv", "numberOfSeats": 10, "insideOrOutside": "outside" },
    { "date": "2022-04-20T17:30:00.000Z", "orderOwner": "tal", "numberOfSeats": 4, "insideOrOutside": "outside" }]



export { users, sessions, orders }