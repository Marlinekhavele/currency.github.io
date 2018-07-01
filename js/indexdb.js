

function openDatabase() { 
    const db = window.indexedDB;
    const open = indexedDB.open("marline", 8, function(upgradeDb){
        var store = upgradeDb.createObjectStore('marlines',{
            keyPath: 'id'
        });
        store.createIndex('by_date','time');
    });
    console.log(open)
}

openDatabase();

// var dbPromise = idb.open('test-db', 1, function(upgradeDb) {
//     var keyValStore = upgradeDb.createObjectStore('keyval');
//     keyValStore.put("world", "hello");
//   });
  
//   // read "hello" in "keyval"
//   dbPromise.then(function(db) {
//     var tx = db.transaction('keyval');
//     var keyValStore = tx.objectStore('keyval');
//     return keyValStore.get('hello');
//   }).then(function(val) {
//     console.log('The value of "hello" is:', val);
//   });
  
//   // set "foo" to be "bar" in "keyval"
//   dbPromise.then(function(db) {
//     var tx = db.transaction('keyval', 'readwrite');
//     var keyValStore = tx.objectStore('keyval');
//     keyValStore.put('bar', 'foo');
//     return tx.complete;
//   }).then(function() {
//     console.log('Added foo:bar to keyval');
//   });
  
//   dbPromise.then(function(db) {
//     // TODO: in the keyval store, set
//     // "favoriteAnimal" to your favourite animal
//     // eg "cat" or "dog"
//   });
