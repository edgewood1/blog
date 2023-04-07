48

To anybody finding this question & using Firebase 3+, the way you get auto generated object unique ids after push is by using the key property (not method) on the promise snapshot:

firebase
  .ref('item')
  .push({...})
  .then((snap) => {
     const key = snap.key 
  })

  -----

  myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    var id = snapshot.key;
    displayChatMessage(message.name, message.text, message.category, message.enabled, message.approved);
});


push generates a location with an auto-calculated key.

