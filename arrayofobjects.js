
// log all values function
 function logList(list){
    for(i=0;i<list.length;i++){
        console.log(list[i]);
    }
}
var list = ['milk', 'butter', 'cheese'];
logList(list);


// OR
function logList(list){
   var mappedList = list.map(function(val){
       return val;
   });
   return mappedList;
}
var list = ['milk', 'butter', 'cheese'];
logList(list);










// log first and last values
 function firstLast(list){
     var hold=[];
        var first = list.shift();
        var last = list.pop();
        hold.push(first,last);
        return hold;
}
var list = ['milk', 'butter', 'cheese','asdasd'];
firstLast(list);






// uppercaser all values
 function uppcaseList(list){
     var answer = [];
    for(i=0;i<list.length;i++){

        answer.push(list[i].toUpperCase());
    }
    return answer;
}
var list = ['milk', 'butter', 'cheese'];
uppcaseList(list);


// or

function uppcaseList(list){

   var mappedList = list.map(function(val){

       return val.toUpperCase();
   });

   return mappedList;
}

var list = ['milk', 'butter', 'cheese'];
uppcaseList(list);










// to lower case
 function lowercaseList(list){
     var answer = [];
    for(i=0;i<list.length;i++){

        answer.push(list[i].toLowerCase());
    }
    return answer;
}
var list = ['MILK', 'butter', 'cheese'];
lowercaseList(list);


// OR
function lowercaseList(list){
   var mappedList = list.map(function(val){
       return val.toLowerCase();
   });
   return mappedList;
}
var list = ['Milk', 'butter', 'cheese'];
lowercaseList(list);







// log the colors
 function getColorsList(list){
     var answer = [];
    for(i=0;i<list.length;i++){
        console.log(list[i].color);
    }
    return answer;
}
var list = [
  {width: 20, color: 'red'},
  {width: 50, color: 'blue'},
  {width: 10, color: 'purple'}
];
getColorsList(list);




// get strongest
 function getStrongest(orcs){
     var holder = 0;
     var stronger = 0;
    for(i=0;i<orcs.length;i++){

    if(orcs[i].strength > holder ){
      holder = orcs[i].strength;
      stronger = orcs[i];
     }
    }
    return stronger;
}
var orcs = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 1543}
];
getStrongest(orcs);

// get the weakest
  function getweakest(orcs){
    orcs.sort(function(a,b){
        return a.strength-b.strength;}

    );
       return orcs[0];
     }



var orcs = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 1543}
];

getweakest(orcs);

// get weakest
 function getweakest(orcs){
     var holder = Infinity;
     var stronger = 0;
    for(i=0;i<orcs.length;i++){

    if(orcs[i].strength < holder ){
      holder = orcs[i].strength;
      stronger = orcs[i];
     }
    }
    return stronger;
}
var orcs = [
    {name: 'Orgoth', strength: 9001},
    {name: 'Blaroguhh', strength: 500},
    {name: 'Mark', strength: 1543}
];
getweakest(orcs);


// get the strongest orcs weapons

 function getStrongestWeapons(orcs){
     var holder = 0;
     var stronger = 0;
    for(i=0;i<orcs.length;i++){

    if(orcs[i].strength > holder ){
      holder = orcs[i].strength;
      stronger = orcs[i];
     }
    }
    return stronger.weapons;
}
var orcs = [
    {
        name: 'Orgoth',
        strength: 9001,
        weapons: ['Bone ax', 'Mace of Strength']
    },
    {
        name: 'Blaroguhh',
        strength: 500,
        weapons: ['Cheeseburger', 'Spear of the Hut']
    },
    {
        name: 'Mark',
        strength: 543,
        weapons: ['Ax of Defense', 'Dagger', 'Sword' ]
    }
];
getStrongestWeapons(orcs);


 function getMostWeapons(orcs){
    answer = orcs.sort(function(a,b){
       return a.weapons.length < b.weapons.length;
    });
       return answer[0];
}
var orcs = [
    {
        name: 'Orgoth',
        strength: 9001,
        weapons: ['Bone ax', 'Mace of Strength']
    },
    {
        name: 'Blaroguhh',
        strength: 500,
        weapons: ['Cheeseburger', 'Spear of the Hut','asasd','asdasds']
    },
    {
        name: 'Mark',
        strength: 543,
        weapons: ['Ax of Defense', 'Dagger', 'Sword','Ax of Defense', 'Dagger', 'Sword']
    }
];
getMostWeapons(orcs);





