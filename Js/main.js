$(document).ready( function() {
 done();
});

function done() {
	  setTimeout( function(){
	  updates();
	  done();
	  }, 5000);
}

function updates() {
	   var room = document.getElementById("roomname").value;
	   room = room.trim();
	   var lastcoll=["","","","",""];
	   var level= [];
	   var cnt=0;
	   var cnt2=0;
	   
	   
	   $.getJSON("https://garbweb-4e670.firebaseio.com/"+room+".json", function(data) {
	   $.each(data, function(con,lvel){
			
			if(cnt>=10)
			{
				lastcoll[cnt2++]=String(lvel);
			}
			level[cnt++] = lvel;	
	   });  
	   
	   if(level[0]>36||level[1]<50)
	   {
		   level[0]=36;
	   }
	   if(level[2]>36||level[3]<50)
	   {
		   level[2]=36;
	   }
	   if(level[4]>36||level[5]<50)
	   {
		   level[4]=36;
	   }
	   if(level[6]>36||level[7]<50)
	   {
		   level[6]=36;
	   }
	   if(level[8]>36||level[9]<50)
	   {
		   level[8]=36;
	   }
	   
	   level[0]=(36-level[0])/0.33;
	   level[2]=(36-level[2])/0.33;
	   level[4]=(36-level[4])/0.33;
	   level[6]=(36-level[6])/0.33;
	   level[8]=(36-level[8])/0.33;
	   
	   lastcollection(level[1],level[3], level[5],level[7],level[9],room);
	   notifstate(level[0],level[1],level[2],level[3],level[4],level[5],level[6],level[7],level[8],level[9]);
	   myFunction(level[0],level[1],level[2],level[3],level[4],level[5],level[6],level[7],level[8],level[9]);
	   document.getElementById("Bitime").innerHTML = lastcoll[0];
	   document.getElementById("Nbtime").innerHTML = lastcoll[1];
	   document.getElementById("Hatime").innerHTML = lastcoll[2];
	   document.getElementById("Metime").innerHTML = lastcoll[3];
	   document.getElementById("Retime").innerHTML = lastcoll[4];
	   
	  
	   draw1(level[0],level[1]);
	   draw2(level[2],level[3]);
       draw3(level[4],level[5]);
       draw4(level[6],level[7]);
       draw5(level[8],level[9]);
	   
		if(room=="")
		{
		document.getElementById("myPopup6").innerHTML = 'Input Room I.d';
        document.getElementById('myPopup6').style.visibility = 'visible';
		}
		else
	    {document.getElementById('myPopup6').style.visibility = 'hidden';}
	   

	   });
}

