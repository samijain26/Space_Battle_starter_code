//Creating object for each ship
const USSHELLOWORLD = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomDecimals(min, max) {
  return Math.random() * (max - min) + min;
}
class alienShips {
  constructor(name) {
    this.name = name;
    this.hull = getRandom(3, 6);
    this.firepower = getRandom(2, 4);
    this.accuracy = getRandomDecimals(0.6, 0.8);
  }
}
let alienShip1 = new alienShips("Alien Ship 1");
let alienShip2 = new alienShips("Alien Ship 2");
let alienShip3 = new alienShips("Alien Ship 3");
let alienShip4 = new alienShips("Alien Ship 4");
let alienShip5 = new alienShips("Alien Ship 5");
let alienShip6 = new alienShips("Alien Ship 6");
console.log(alienShip1.hull);
console.log(alienShip1.accuracy);
console.log(alienShip2.accuracy);
console.log(alienShip3.accuracy);
console.log(alienShip4.accuracy);
let Enemy = [
  alienShip1,
  alienShip2,
  alienShip3,
  alienShip4,
  alienShip5,
  alienShip6,
];

let attacker = document.querySelectorAll(".nameBox");
let player = attacker[0].textContent;
attacker[1].textContent = Enemy[0].name;
console.log(attacker[1].textContent);


//let playerstats = document.querySelector(".playerStats");
//let enemystats = document.querySelector(".enemyStats");

//function to update the sats for both player

function statusUpdate() {
let playerstats = document.querySelector(".playerStats");
let enemystats = document.querySelector(".enemyStats");

  playerstats.innerHTML = `Hull:${USSHELLOWORLD.hull}<br>
    FirePower:${USSHELLOWORLD.firepower}<br>
    Accuracy:${USSHELLOWORLD.accuracy}<br>`;
  enemystats.innerHTML = `Hull:${Enemy[0].hull}<br>
    FirePower:${Enemy[1].firepower}<br>
    Accuracy:${Enemy[2].accuracy}<br>`;
}
function playerAccuracyCheck() {
    if (Math.random()> Enemy[i].accuracy) {
      Enemy[i].hull -= USSHELLOWORLD.firepower;
     // statusUpdate();
      confirm(
        `Way to go you hit Alien Ship ${i + 1}, Now its hull is ${Enemy[i].hull}`
      );
    } else{
        confirm(`you had a miss. it's alien ${i+1} survived to attack`) 
     }
  }
  function alienAccuracyCheck() {
    if (Math.random()< Enemy[i].accuracy) {
        USSHELLOWORLD.hull -= Enemy[i].firepower;
     // statusUpdate();
      confirm(
        `you  got a hit from Alien Ship ${i + 1}, Now your updated hull is ${USSHELLOWORLD.hull}`
      );
    } else{
       confirm("Alien had a miss. it's your turn to attack") 
    }
  }

//to show current status on the console
statusUpdate();

let i = 0;
//let enemyCounter = 1;
//let playerCounter = 1;

confirm(
    "Our planet is in danger, and you are the chosen one to save it"
  );

//function for player attack

function playerAttack() {
  //console.log(`player counter value is ${playerCounter}`);
  
  if (USSHELLOWORLD.hull > 0 && Enemy[i].hull > 0) {
    //confirm(`Alien Ship ${i + 1} is fighting now`);
   playerAccuracyCheck();
    statusUpdate()
    setTimeout(enemyAttack,2000);
  }
  if(USSHELLOWORLD.hull <= 0){
    confirm("Battle over. Alien took over the land")
  }
  //playerCounter++;
  //if (Enemy[i].hull > 0){
        
  //}
}
function enemyAttack() {
 // console.log(`the enemy counter value is ${enemyCounter}`);
  
  if (Enemy[i].hull > 0 && USSHELLOWORLD.hull > 0) {
        confirm(`Alien Ship ${i + 1} is attacking now`);

        alienAccuracyCheck();
        statusUpdate();
        setTimeout(playerAttack,1500);
  }else if (USSHELLOWORLD.hull <= 0) {
    confirm("Game Over, player lost");
   // break;
  } else { 
    confirm("You are inside game mode variable");
    if(i != 5){
    let gameMode = prompt(`${ i + 1} Enemy's Ship is destroyed Do you want to retreat or continue? Enter 1 to continue, enter 0 to retreat`
    );
        if (gameMode == "1") {
        i++;
        attacker[1].textContent = Enemy[i].name;
        //enemyCounter++;
        setTimeout(playerAttack,1500);
        } else {
     confirm("You retreated. Good Job!!! Game over. ");
        }
    }
    
  }
  
}
if(USSHELLOWORLD.hull <= 0){
    confirm("Allien won")
}
if(Enemy[0].hull<=0 && Enemy[1].hull<=0 && Enemy[2].hull<=0 && Enemy[3].hull<=0 && Enemy[4].hull<=0 && Enemy[5].hull<=0 ){
        confirm("You saved your planet.Three cheers!!")
    }


function startGame() {
  setTimeout(playerAttack,1500);
}

function winningstatement(){

    if(USSHELLOWORLD.hull <= 0){
        console.log("i am in winning")
        confirm("Allien won")
    }
    if(Enemy[0].hull<=0 && Enemy[1].hull<=0 && Enemy[2].hull<=0 && Enemy[3].hull<=0 && Enemy[4].hull<=0 && Enemy[5].hull<=0 ){
            confirm("You saved your planet.Three cheers!!")
        }
}
startGame();
winningstatement()