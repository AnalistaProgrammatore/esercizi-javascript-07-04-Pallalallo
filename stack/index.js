function boh(datastore, ...data) {
    for (i = 0; i < data.length; i++) {
        datastore[i] = data[i]
    }


}
let datastore = [];
boh(datastore, 1, 2, 3)
console.log(datastore)