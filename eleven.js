function init(){
               const tb_years = parseInt(document.getElementById('years').value);
               var info=[];
               let i=0;
               while(i<tb_years){
               	var currentData = parseFloat(prompt('Въведете стойността за '+(i+1)+' година:'));
               	info[i]=currentData;
               	i++;
               }
               var max=Math.max(...info);
               var avg=0;
               for(let j=0;j<info.length;j++){

               	avg+=info[j];
               }
               avg/=info.length;
                let frequency = {};
    info.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
    });
               showResult(frequency,max,avg);
}
function showResult(frequency,max,avg){
	let resultsDiv = document.createElement('div');
    
    let element1 = document.createElement('p');
    element1.innerHTML = "Резултати:";    
    resultsDiv.appendChild(element1);

    let element2 = document.createElement('p');
    element2.innerHTML = "Максимална стойност: " + max;    
    resultsDiv.appendChild(element2);

    let element3 = document.createElement('p');
    element3.innerHTML = "Средна стойност: " + avg.toFixed(2);    
    resultsDiv.appendChild(element3);

    let element4 = document.createElement('p');
    element4.innerHTML = "Честота на появяване:";
    resultsDiv.appendChild(element4);

    let freqList = document.createElement('ul');
    for (let key in frequency) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `Стойност ${key}: ${frequency[key]} пъти`;
        freqList.appendChild(listItem);
    }
    resultsDiv.appendChild(freqList);

    document.body.appendChild(resultsDiv);
}


//window.addEventListener("load",init);