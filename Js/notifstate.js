function notifstate(var0,var1,var2,var3,var4,var5,var6,var7,var8,var9)
{
        if(var0>=95&&var1<3400){
		document.getElementById("myPopup1").innerHTML = 'Full';
		}
	    else if(var0<95&&var1>=3400){
		document.getElementById("myPopup1").innerHTML = 'Heavy';
		}
		else{
		document.getElementById("myPopup1").innerHTML = 'Need Collection';
		}
		
		if(var2>=95&&var3<3400){
		document.getElementById("myPopup2").innerHTML = 'Full';
		}
	    else if(var2<95&&var3>=3400){
		document.getElementById("myPopup2").innerHTML = 'Heavy';
		}
		else{
		document.getElementById("myPopup2").innerHTML = 'Need Collection';
		}
		if(var4>=95&&var5<3400){
		document.getElementById("myPopup3").innerHTML = 'Full';
		}
	    else if(var4<95&&var5>=3400){
		document.getElementById("myPopup3").innerHTML = 'Heavy';
		}
		else{
		document.getElementById("myPopup3").innerHTML = 'Need Collection';
		}
		
		if(var6>=95&&var7<3400){
		document.getElementById("myPopup4").innerHTML = 'Full';
		}
	    else if(var6<95&&var7>=3400){
		document.getElementById("myPopup4").innerHTML = 'Heavy';
		}
		else{
		document.getElementById("myPopup4").innerHTML = 'Need Collection';
		}
		
		 if(var8>=95&&var9<3400){
		document.getElementById("myPopup5").innerHTML = 'Full';
		}
	    else if(var8<95&&var9>=3400){
		document.getElementById("myPopup5").innerHTML = 'Heavy';
		}
		else{
		document.getElementById("myPopup5").innerHTML = 'Need Collection';
		}
}