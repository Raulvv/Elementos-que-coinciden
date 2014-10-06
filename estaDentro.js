var array= [1,4,16,3,0,21,3,0,21];
var a= 4;

var encontrado=false;

function estaDentro(array,numero)
{
	var i=0;

	while(i<array.length&&!encontrado)
	{
		encontrado= array[i]===numero?true:false;
		i++;
	}

	return encontrado;
}

alert(estaDentro(array,a));