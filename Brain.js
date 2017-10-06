//========================NEURO-START=====================================
  
  function neuron(data){
  	 this.active  = false, this.neuronData = []; this.dataType = '';
  	if(!data.isNaN){
  		if(this.active === true){
  	        this.neuronData.push(data);		
  	   }
  	}
  }
  
  function brain(data){
  	 this.neuroSet = init(data);
     this.dataSet = setUpDataSet();  
     
     
  	 var Controls = ['High','Medium','Low'];
  	 
  	 for(var i = 0;i < this.dataSet.length;i++){
  	 	   this.dataSet[i][0].Priority = Controls[i];
  	 }
  	 for(var i = 0; i < this.dataSet.length;i++){
  	 	switch(this.dataSet[i][0].Priority){
  	  	   case 'High':
  	  	   	   if(neuroSet[i].Priority.HIGH.length >  0 ){
  	  	   	     for(var k = 0; k < neuroSet.length;k++){
  	  	   	         this.dataSet[i][k] = neuroSet[i].Priority.HIGH[k];
  	  	   	     	  if(this.dataSet[i][k].dataVolume < 2){
  	  	   	             	   break;
  	  	   	             }
  	  	   	     }}
  	  	   break;	
  	  	   case 'Medium':
  	  	   	if(neuroSet[i].Priority.MED.length >  0 ){
  	  	   	     for(var k = 0; k < neuroSet.length;k++){
  	  	   	    	 this.dataSet[i][k] = neuroSet[i].Priority.MED[k];
  	  	   	          if(this.dataSet[i][k].dataVolume > 3){
  	  	   	             	   break;
  	  	   	             }
  	  	   	     }}
  	  	   break;	
  	  	   case 'Low':
  	  	   	if(neuroSet[i].Priority.LOW.length >  0 ){
  	  	   	 for(var k = 0; k < neuroSet.length;k++){
  	  	          this.dataSet[i][k] = neuroSet[i].Priority.Low[k];
  	  	          
                   if(this.dataSet[i][k].dataVolume > 7 
                      && 
                      this.dataSet[i][k].dataVolume < 10){
  	  	   	             	   break;
  	  	   	             }
  	  	   	     }}
  	  	   break;
  	  }
  	 }  	 
  }
  var y = [];
  for(var i = 0; i < 3;i++)
   y.push([{title:''}]);
   y[0][0].title = 'Neck';
   var con = ['a','b','c'];
   
  for(var i = 0; i < con.length;i++){
  	    y[i][0].title = con[i];
  	
  }
  
  console.log(y)
// set up brain slots, each slot holds neuroSet
  function setUpDataSet(){
  	  var DS = [];
  	 for(var i = 0 ; i < 5;i++){DS.push([{Priority:''}])}	
  	 return DS;
  }
  
  function init(data){
  	var arr = []
  	if(Array.isArray(data)){
  	 for(var i = 0; i < data.length;i++){
  		 var neuron = new neuron(data[i]);
  		 neuron.active = true;
  		 arr.push(neuron);
  	 } 
  	    return arr;
  }
}

//========================neuroset END======================================
