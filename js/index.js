
const currencyUrl = "https://free.currencyconverterapi.com/api/v5/currencies";

fetch(currencyUrl)
.then(function(res){
	return res.json();
})
.then(function(data){
	for (var key in data) {
	  return data[key];
	}
	//console.log(data);
})
.then(function(datakey){
	for (const key2 in datakey) {
		const id = datakey[key2].id;
		$('.currencies').append($('<option>').text(id).attr('value', id));
	}
})
.catch(function(error){
	console.log(error);
})


//  const list = document.getElementsByClassName('currencies');
//  fetch('https://free.currencyconverterapi.com/api/v5/currencies')
//  .then(response =>response.json())
//  .then((returnResponse, ClassName)=>{
//   //  console.log(returnResponse);
//   let options= '';
//   let currencyArray = Object.values(returnResponse.results);
//    currencyArray.forEach((data)=>{
//      options +='<li value="'+data.id+'">'+data.currencyName+'</li>';
//      list.innerHTML = options;
//    });
//  })

 
 
