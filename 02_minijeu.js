/*
 l'ordi choisi un nombre au hasard entre 1 et 10
 3 essais pour trouver le nombre mystère
 Si bonne réponse -> console.log('bravo'+numéro mystere)
 Sinon 'pas de chance' + nouveau jeu + numéro mystere
 */
/**
 * Function which generate a number between min and max
 * @param min
 * @param max
 * @returns {number}
 */
function createRandom(min,max){
    let answer = Math.floor(Math.random()*(max - min) + min);
    return answer;
}
//Variable declaration
let nbTry=1,win=false,answer = createRandom(1,10),human = [1,2,3],nbTryMax = 4;

/**
 * Function which verify if the game is finish
 */
function play(){
    if(answer<human[nbTry-1]){
        console.log("Plus petit")
    }else if(answer>human[nbTry-1]){
        console.log("Plus grand")
    }else{
        win = true;
        console.log(`Bravo ! Vous avez trouvé le ${answer} en ${nbTry} essais`);
    }
}
//While it's not finish
while(nbTryMax<4 && !win){
    play();
    nbTryMax+=1;
}
//If it's finish
if(nbTryMax==4){
    console.log(`Le numéro à trouver était le ${answer}`);
}







