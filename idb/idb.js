

// const dbPromise = idb.open('test-db', 1, upgradeDB => {
//     var keyValStore = upgradeDB.createObjectStore('keyval')
//     keyValStore.put("hello", "word")
//     var objectStore = upgradeDB.createObjectStore('people',{ 
//       keyPath: 'name'
//     })
//   })
//   dbPromise.then(db=>{
//     const tx = db.transaction('keyval')
//     const keyValStore = tx.objectStore('keyval')
//     return keyValStore.get('hello')
//   }).then(val => console.log('the value of hello is', val))
//   dbPromise.then(db=>{
//     const tx = db.transaction('keyval', 'readwrite')
//     const keyValStore = tx.objectStore('keyval')
//     keyValStore.put('bar', 'foo')
//     return tx.complete
//   }).then(() => console.log('added foo:bar'))
//   dbPromise.then(db=>{
//     const tx = db.transaction('people', 'readwrite')
//     const peopleStore = tx.objectStore('people')
//     return peopleStore.put({
//       name: 'Sam'
      
//     })
//   })
//   const dbPromise = idb.open('test-db', 2, upgradeDB => {
//     switch(upgradeDB.oldVersion){
//      case 0:
//        var keyValStore = upgradeDB.createObjectStore('keyval')
//        keyValStore.put("hello", "word")
//        var objectStore = upgradeDB.createObjectStore('people',{ 
//          keyPath: 'name'
//        })
//      case 1: 
//        var peopleStore = upgradeDB.transaction.objectStore('people')
//        peopleStore.createIndex('age','age')
//     }
//   })
//   dbPromise.then(db=>{
//     const tx = db.transaction('people')
//     const peopleStore = tx.objectStore('people')
//     const ageIndex = peopleStore.index('age')
//     return ageIndex.getAll()
//   }).then(people => console.log('People',people))
//   dbPromise.then(db=>{
//     const tx = db.transaction('people')
//     const peopleStore = tx.objectStore('people')
//     const ageIndex = peopleStore.index('age')
//     return ageIndex.getAll('21')
//   }).then(people => console.log('People',people))
  