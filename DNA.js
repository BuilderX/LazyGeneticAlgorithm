var DNA = function () {
    var DNACODE = ['','','',''];

    for (var i = 0; i < DNACODE.length; i++){
        ran = newChar();
        DNACODE[i] = ran;
    }
    return DNACODE;
};

/**
 * @return {number}
 */ 
var LowPopulation = function () {
       ran =  Math.floor(Math.random() * 5 + 1);
       return  Math.abs(ran);
};
//======================================================================================================


//======================================Creature================================================================
var creature = function (DNA,age) {
    this.hp = 100;
    this.DNA = DNA;
    this.age = age;
    this.alive = false;
    this.fitness = [0,1,0,1];

    return {
        hp:this.hp,
        DNA:DNA,
        age:age,
        alive:this.alive
    };
};

function checkRestraint(ran,arr){
    if(ran < 0 ){ ran = Math.floor(Math.random() * arr.length + 2 ); return Math.abs(ran)}
}

//=================================GenerateChild=========================
var GenerateChild = function (arr) {
     var SM = this,parent1,parent2,ran,ran2,newGen,posRan,posRan2;

      ran =  Math.floor(Math.random() * arr.length );
      posRan = (ran < 0 ) ? ran * -1 :ran;
      parent1 = arr[posRan];

      ran2 = Math.abs(Math.floor(Math.random() * arr.length ));
      posRan2 = (ran2 < 0 ) ? ran2 * - 1 :ran2;
      parent2 = arr[posRan2];

     var parentCompare = parent1.fitness[0] +
         parent1.fitness[1]  + parent1.fitness[3];
     var parentCompare2 = parent2.fitness[0] +
        parent2.fitness[1]  + parent2.fitness[3];

    if(parentCompare < parentCompare2) {
        newGen = MateChange1(parent1,parent2);
        newGen.alive = true;
           parentExpire(parent1);
           parentExpire(parent2);

    }else{
            newGen = MateChange1(parent2,parent1);
            newGen.alive = true;
    }
     return newGen;

};
//========================================CreatureEnd==============================================================

function parentExpire(parent1){
    parent1.hp = 0;parent1.age-=1; parent.alive  = false;
}

function  MateChange1(parent1,parent2) {
    var r = parent1,r1 = parent2,

    injectedDNA = [ r.DNA[0],r.DNA[1],
                    r1.DNA[2],r1.DNA[3]];
             child = creature(injectedDNA,1);
             
     return  child;

}
//=======================================Population======================
var Population = function(Npop) {

    var pop = this;
    pop.generation = 0;
    pop.Npop = Npop;
    pop.dna = DNA;
    pop.oldPopulation = [];
    pop.currentPopulation = [];
    pop.newGeneration = [];

 var generatePopulation = function (){
     var arr =  pop.currentPopulation;
      for (var i = 0; i < Npop; i++) {

       var ran = pop.dna();
       var create = new creature(ran,1);

       create.alive = true;
       create.fitness = [LowPopulation(),LowPopulation(),LowPopulation()];
       pop.currentPopulation.push(create);
      }
        return arr;
   };
 var insertNewPop = function (newChild) {
        pop.newGeneration.push(newChild);

 };
        return {
               gen:generatePopulation,
               newPop:insertNewPop,
               currentGen: pop.newGeneration
};
};

//===========================================PopulationEnd================================


function MatingPool(arr){
   var newPopulation = [];
    newPopulation.push(arr);
      return newPopulation;
}

var PopulationX = Population(6);
var generationX = PopulationX.gen();
var NewChild ;
var arr = [];
for(var i = 0; i < 5;i++){
    NewChild = GenerateChild(generationX);
    arr.push(NewChild);
}

var news = PopulationX.newPop(NewChild);
console.log('_________________________________');
PopulationX.currentGen = arr;

console.log( PopulationX.currentGen);
possiblyRelated(PopulationX.currentGen);

function addDna(att){
	     
}



//===================================PossiblyRelated====================================================

function possiblyRelated(pop){
      var match = false,familyMemebers = [],counter = 0;
    for(var i = 0,j = pop.length-2; i < pop.length-1;i++,j--){
             var DNAPOS =  pop[i].DNA[i][0];
             var DNAPOS2 =  pop[j].DNA[i];
        if (DNAPOS == DNAPOS2){
                 counter++;
                 if(counter === 2){
                     familyMemebers.push(pop[i],pop[i+1]);
                     counter = 0;

                 }}
         }if(familyMemebers.length == 0 ){
              console.log('No Relatives');
             }else {
              console.log('Likely Related : ');
              console.log(familyMemebers);
          }
}
var ulcer = inputMid([1,2,3,4,undefined,6,7,8,0]);
var ogg = ulcer.shift();

//====================END PossiblyRelated===============
//====================NewChar=================================
function newChar(){
    var ran = Math.floor(Math.random(63) * 122 -1);
    if(ran === 63) ran = 32;
    if(ran === 65) ran = 46;
    return String.fromCharCode((ran))
}
//======================================================

