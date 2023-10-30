// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

let apTotal = 100;

let fungusHP = 100;

function onAttackClick(event, apCost, damage) {
   console.log('this cost you', apCost, 'this did', damage);

   apTotal -= apCost;
   fungusHP -= damage;

   if (fungusHP <= 0) {
    fungusHP = 0;
    document.getElementById('fungusWalk').classList.replace("walk", "dead");
   }

    //if this goes over it will disable to weapon
   if (apTotal <= apCost) {
    apTotal = 0;
    let allButton = document.querySelectorAll('.attack-btn');
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].setAttribute('disabled', '')
      document.getElementById('fungusWalk').classList.replace("walk", "jump");
    }
   
} 

   update()

}


function update() {
    //brings down ap when clicking attack
    document.getElementById('ap-text').innerHTML = apTotal + ' AP'
    console.log('my ap total', apTotal);

    //when clicked edited hp
    document.getElementById('hp-text').innerHTML = fungusHP + ' HP'
    console.log('the fungus hp',fungusHP);
   
}

onReady()