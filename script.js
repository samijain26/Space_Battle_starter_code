//creating US ship object
const USSHELLOWORLD = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

// function to generate random number 
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}
class alienShips {
  constructor(name) {
    this.name=name;
    this.hull = getRandom(3, 6);
    this.firepower = getRandom(2, 4);
    this.accuracy = getRandomDecimal(0.6, 0.8);
  }
}
let alienships1 = new alienShips("AlienShip1");
let alienships2 = new alienShips("AlienShip2");
let alienships3 = new alienShips("AlienShip3");
let alienships4 = new alienShips("AlienShip4");
let alienships5 = new alienShips("AlienShip5");
let alienships6 = new alienShips("AlienShip6");

//console.log(alienships1.firepower);
//console.log(alienships2.accuracy);

//enemy ship hoding array
let Enemy = [
  alienships1,
  alienships2,
  alienships3,
  alienships4,
  alienships5,
  alienships6,
];

//let attacker2 = prompt("please enter enemy ship name")
//console.log(attaker2)

let attacker = document.querySelectorAll(".nameBox");

//first player name
player = attacker[0].textContent;
//console.log(Enemy[0])

//second player name
attacker[1].textContent = Enemy[0].name
console.log(attacker[1])

//getting the player current stats in DOM and enemy current stats
function statusUpdate(){
let playerstats = document.querySelector(".playerStats");
playerstats.innerHTML = `Hull: ${USSHELLOWORLD.hull} <br> Fire-power: ${USSHELLOWORLD.firepower} <br> Accuracy: ${USSHELLOWORLD.accuracy}`;

let enemystat = document.querySelector(".enemyStats");
enemystat.innerHTML = `Hull: ${Enemy[0].hull} <br> Fire-power: ${Enemy[0].firepower} <br> Accuracy: ${Enemy[0].accuracy}`;
}
statusUpdate()
//initializing index value to 0 to access first element from enemy arry ship
alert("lets start the fight. USSHELLOWORLD will do first attack")

let i = 1;
let counter = 0
console.log(Enemy.length);
console.log(player)
console.log(USSHELLOWORLD.hull)
// while (i <= Enemy.length) {

  if (player) {
    if (USSHELLOWORLD.hull > 0) {
      if (USSHELLOWORLD.accuracy > Enemy[i-1].accuracy){
        Enemy[i-1].hull -= USSHELLOWORLD.firepower;
        console.log("USSHELLOWORLD won 1st attack")
      }
      else {
        USSHELLOWORLD.hull -= Enemy[i-1].firepower;
        console.log(`${Enemy[i-1].name} won 1st attack`)
      }
  
        playerstats.innerHTML = `Hull: ${USSHELLOWORLD.hull} <br> Fire-power: ${USSHELLOWORLD.firepower} <br> Accuracy: ${USSHELLOWORLD.accuracy}`;
        enemystat.innerHTML = `Hull: ${Enemy[i-1].hull} <br> Fire-power: ${Enemy[i-1].firepower} <br> Accuracy: ${Enemy[i-1].accuracy}`;
        console.log("first time value update")
        }
    }
  if (Enemy[i-1].hull > 0) {

        // prompt(`${i} EnemyShip is on the roll now`)
    
        if (USSHELLOWORLD.accuracy > Enemy[i-1].accuracy)
        {
        Enemy[i-1].hull -= USSHELLOWORLD.firepower;
        }
        else {
        USSHELLOWORLD.hull -= Enemy[i-1].firepower;
        }
        console.log(Enemy[i-1].hull);
    
           playerstats.innerHTML = `Hull: ${USSHELLOWORLD.hull} <br> Fire-power: ${USSHELLOWORLD.firepower} <br> Accuracy: ${USSHELLOWORLD.accuracy}`;
            enemystat.innerHTML = `Hull: ${Enemy[i-1].hull} <br> Fire-power: ${Enemy[i-1].firepower} <br> Accuracy: ${Enemy[i-1].accuracy}`;
            console.log("second time value update")
            counter = counter + 1
            console.log("fighting for" + counter + " times")
   } 
   else
    {
        let gamemode = prompt(
        `${i} ship destroyed.Do you want to retreat or continue.
        please enter 1 to continue and 2 to stop`
        );
            if (gamemode == "1")
             {
                i = i + 1;
                attacker[1].textContent = Enemy[i-1].name
                //setTimeout(() => { console.log("World!"); }, 500)
            } 
            else 
            { 
                prompt("Battle ended")
               // break;
            }
    }
// //   //alert("stops everything" + i);
// }
// if (USSHELLOWORLD.hull > Enemy[i].hull){
// alert("USS won")
// }
// else{
//     alert("USS Lost. There is always a second chance. Do you want to play again") 
// }
