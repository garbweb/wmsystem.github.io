function time(varindic,room)
{       
       var time = [];
	   var cnt = 0;
	   var set="";
	   
	   $.getJSON("https://script.googleusercontent.com/macros/echo?user_content_key=HQlKI_kK-sbOemHpUg1JgzY_eHv0PUcNs0wX_n--LzrfyDUBfCIHLom-CPghGVliREl4Nz_fvBk1SPx2JSpaPpNAEjXcEU3cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6bwVq0tbM60-SCTnVPVyHPLwd_9U4TCYJw&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk", function(data){
	   $.each(data, function(i,val){
         time[cnt++]= val;
	   });
	    set = time[3]+"/"+time[2]+"/"+time[5]+" "+time[6]+":"+time[7]+":"+time[8];
		var database = firebase.database();
		var ref = database.ref(room+"/"+varindic);
		ref.set(set);
	   });  	
		
	
}