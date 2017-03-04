function state(val2)
{
 if(val2<=1600&&val2>=0)
  {
	return ("Lite");
  }
  else if(val2>1600&&2600>=val2)
  {
	return ("Fair");
  }
  else if(val2>2600&&3400>=val2)
  {
	return ("Fair");
  }
  else
  {
	return ("Heavy");
  }
}

function stateC(val2)
{
 if(val2<=1600&&val2>=0)
  {
	return ("rgba(153,255,51,1)");
  }
  else if(val2>1600&&2600>=val2)
  {
	return ("rgb(255,255,0)");
  }
  else if(val2>2600&&3400>=val2)
  {
	return ("rgb(255,165,0)");   
  }
  else
  {
	return("rgb(255,0,0)");     
  }
}