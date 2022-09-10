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
  return  Math.floor(Math.random() * (max - min +1) + min)/10;
}
class alienShips {
  constructor(name) {
    this.name = name;
    this.hull = getRandom(3, 6);
    this.firepower = getRandom(2, 4);
    this.accuracy = getRandomDecimals(6, 8);
  }
}
let alienShip1 = new alienShips("Alien Ship 1");
let alienShip2 = new alienShips("Alien Ship 2");
let alienShip3 = new alienShips("Alien Ship 3");
let alienShip4 = new alienShips("Alien Ship 4");
let alienShip5 = new alienShips("Alien Ship 5");
let alienShip6 = new alienShips("Alien Ship 6");

console.log(alienShip1.accuracy);
console.log(alienShip2.accuracy);
console.log(alienShip3.accuracy);
console.log(alienShip4.accuracy);
console.log(alienShip5.accuracy);
console.log(alienShip6.accuracy);
let Enemy = [
  alienShip1,
  alienShip2,
  alienShip3,
  alienShip4,
  alienShip5,
  alienShip6,
];

//selecting element with namebox class name in dom
let attacker = document.querySelectorAll(".nameBox");
let player = attacker[0].textContent;   //USS ship name
attacker[1].textContent = Enemy[0].name;  //enemy ship name
console.log(attacker[0].textContent);
console.log(attacker[1].textContent);


//function to update the stats for both player

function statusUpdate() {
let playerstats = document.querySelector(".playerStats");
let enemystats = document.querySelector(".enemyStats");

  playerstats.innerHTML = `Hull:${USSHELLOWORLD.hull}<br>
    FirePower:${USSHELLOWORLD.firepower}<br>
    Accuracy:${USSHELLOWORLD.accuracy}<br>`;
  enemystats.innerHTML = `Hull:${Enemy[0].hull}<br>
    FirePower:${Enemy[0].firepower}<br>
    Accuracy:${Enemy[0].accuracy}<br>`;
}

//function for player accuracy check to decide hit or miss. a value genrated by math random
//between 0 and .7 is a hit 
function playerAccuracyCheck() {
    if (Math.random()< USSHELLOWORLD.accuracy) {
      Enemy[i].hull -= USSHELLOWORLD.firepower;
    
      alert(`Way to go you hit Alien Ship ${counter}, Now its hull is ${Enemy[i].hull}`
      );
    } else{
        alert(`you had a miss. it's alien ${counter} survived to attack`) 
     }
  }
  //function to decide enemy winning for hit or miss
  function alienAccuracyCheck() {
    if (Math.random()< Enemy[i].accuracy) {
        USSHELLOWORLD.hull -= Enemy[i].firepower;
     
      alert( `you  got a hit from Alien Ship ${counter}, Now your updated hull is ${USSHELLOWORLD.hull}`
      );
    } else{
       alert(`Alien ${counter} had a miss. it's your turn to attack`) 
    }
  }

//to show current status on the console
statusUpdate();

let i = 0;
let counter = 1;  //counter to show winning message if all enemy ship destroyed




//function for player attack
let beginMsg=1
function playerAttack() {
   
    
    if (beginMsg==1){
alert("Our planet is in danger, and you are the chosen one to save it"
  );
  beginMsg ++
    }
  if (USSHELLOWORLD.hull > 0 && Enemy[i].hull > 0) {
    //confirm(`Alien Ship ${i + 1} is fighting now`);
   playerAccuracyCheck();
    statusUpdate()
   
    setTimeout(enemyAttack,2000);
  }
  if(USSHELLOWORLD.hull <= 0){
    alert("You lost all your hull.Battle over. Alien took over the land")
  }
  
}

//function for enemy attack
function enemyAttack() {
 // console.log(`the enemy counter value is ${enemyCounter}`);
  
  if (Enemy[i].hull > 0 && USSHELLOWORLD.hull > 0) {
        alert(`Alien Ship ${counter} is attacking now`);

        alienAccuracyCheck();
        statusUpdate();
        setTimeout(playerAttack,1500);
  
    }else if (USSHELLOWORLD.hull <= 0) {
    alert("Game Over, You could not save the earth");
  
    } else { 
   //check if all alien ship destroyed.if user want to replay then they can restart the game
        if(counter == 6){
         playagain= confirm("We won!!.All Alien ship got destroyed. We saved our land.  Do you want to restart the game?, choose Ok for yes,otherwise choose Cancel to stop" )
            if(playagain ){
                alert("you chose to fight the battle again")
            location.reload()
            }
           else{
            alert("Ok! Next time be more strong before attacking us. Ha Ha!!")
            }
        }
        //condition to find if user want to retreat
        else{
        let gameMode = prompt(`${ counter} Enemy's Ship is destroyed Do you want to retreat or continue? Enter 1 to continue, enter 0 to retreat`
        );
            if (gameMode == "1") {
            
                Enemy.shift()
                counter = counter + 1
                attacker[1].textContent = Enemy[i].name;
          
       
                console.log(Enemy)
                statusUpdate();
                setTimeout(playerAttack,1500);
            } 
            else {
                alert("You retreated. Good Job!!! Game over. ");
            }
         }
    
    }
  
}



function startGame() {
  setTimeout(playerAttack,1500);
}


startGame();