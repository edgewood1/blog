
cs-app

connected mixin - full state

connected-pdf
connected-ecg

study-base

pdf
ecg



__superclass / base__

class Animal {}

__anonymous class__

const rect = class {}

__derived extends superclass__

class Dog extends Animal{}

mixins

let mixin = (superclass => {
  class extends superclass {
    - qualities A, B
  }
}
let mixin2 = (superclass => {
  class extends superclass {
    - qualities C, D
  }
}

__extend derive class with a mixin__
// this adds Animal and qualities A, B, C, D

class Cat extends mixin(mixin2(Animal)) {

}

__code condcpets__

request function v setTieout
paiting / links
git  - pw
node
map.call
desgin patterns / event bus
prof dev links? 
class / extends / mixins.  


files

music
meltodo
blog
notes
apps


node-api2
newwebtests - wdio6
currnt - cs-web-tests

git pw
ssh agent
ssh key - generated and added to ssh files
passphrase - can change without new key, but need old pw

add key to ssh-agentadd assh file to config file
copy sshe key to github repo




var f = f() {this.name = "mel"}

var x = new f()  < creates new object

f.prototype = this.say { return x} // place method on prototyp, availalbe to all objects created with f()

x.constructor // f 
x. prototype // f.prototype

x's prootype is f 
prototype of x is F

x           f.prototype
prototype > prototype
            constructor  > function constructor ? 