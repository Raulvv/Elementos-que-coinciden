var array1= [1,4,16,3,0,21,3,0,21];
var array2= [1,6,21,3,0,4];

function coincide(a,b)
{
	var longi; 
	a.length>b.length?longi=b:longi=a;
	var contador=0;

	console.log(longi);

	for (var i = 0; i < longi; i++) {
		if(a[i]===b[i])
		{
			contador++;
		}
	}
	return contador;
}

alert(coincide(array1,array2));