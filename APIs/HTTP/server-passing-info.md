
1. INSERT USER INTO OUR DATABASE

post users 
payload: all fields 
effect: 
creates json file in users folder that contains
name, phone, hashedPW, and tosAgreement

2. ON EACH LOGIN, CREATE A NEW TOKEN FOR USER

post tokens 
payload: phone, password

return: phone, id(token), expires 

3. NOW, I MIGHT WANT TO GET INFO QUERYING A PHONE NUMBER

get users // ?phone= 
headers: token = xyz (from your session.)



THREE WAYS OF PASSING INFO
query object

body / payload

headers // tokens

get users/ ?phone = from above
and add token to header


 i need to pass 

post token using phone / password
this returns an id and expires date. 