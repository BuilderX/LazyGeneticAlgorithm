
function powerBuff(){
	
	return 1;
}
var Contain = {
	     populateLand:function(){
      for(var a in errs){
	     errs[a][a] = Math.round(-4 * Math.random());
	     if(errs[a][a] < -2){
	     var tile01 = {Location:errs[a][a],
	                 Type:'WATER'
	    }
	    copy[a][a] = tile01;
	    }else{
	     var tile02 = {Location:errs[a][a],
	                 Type:'LAND'
	    }
	    copy[a][a] = tile02;} }	
	  return copy;},
	     World:function(){ 
	         	 return this.populateLand()
	     }
         };
Contain.World()[3][15] = user = { name:'Ray',hp:10, powerStatus:powerBuff() + 1}

console.log(Contain.World()[3][15]);
function alterLand(copy){
	
	//console.log(copy);
     for(var i = 0;i < copy.length;i++){
          for(var j=0;j < copy[0].length;j++){
              if(copy[i][j] === undefined){
              	  copy[i][j] = {};
              }
              if(copy[i][j].Type === 'LAND'){
              	  copy[i][j].attribute = '';
              	  copy[i][j].CanStepOn = true;
             }
           	  if(copy[i][j].Type === 'WATER'){
              	  copy[i][j].attribute = '';
              if(copy[i][j].Location  < -1){
              	  copy[i][j].CanStepOn = false ;
              }
           }  //console.log(copy[i][j]);
          }         
      }
	  return copy;
}
