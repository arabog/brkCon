/*
Coding in function ```grabDoll```. function accept 1 parameter:
```dolls```. it's a string array, a list of some dolls.
You need traverse ```dolls``` by using ```for``` loop. If element is  
"Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag 
is an array, I've defined in the function); if it's other strings, we should 
use ```continue``` skip it. 
When the ```bag``` has three element, ```bag``` is full. You should use 
```break``` jump out the loop; If ```bag``` is not full, you should traverse 
```dolls``` until the last element. 
Return the ```bag``` after for loop finished.
*/
let baby = ["Hello Kitty", "Barbie doll", "Hello Kitty", "Barbie doll", "Hello Kitty", "Barbie doll"];

function grabDoll(dolls){
          let bag = [];

          for(let i = 0; i < dolls.length; i++){
                    if(dolls[i] ==  "Hello Kitty" || dolls[i] == "Barbie doll") {
                              if(bag.length === 3){
                                        break;
                              }
                              else  {
                                        bag.push(dolls[i]);
                                        continue;
                              }
                    }
          }
          
          return bag;
}

console.log(grabDoll(baby));