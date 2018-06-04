
let obj = "";
onLoad();

// displayData();
// sortBy();

function displayData(data){
    let count = 1;
    let table = document.getElementById('table');
    for(let i = 0; i < data.length; i++){
        helper(data[i],table, "name", "price_usd", "rank", "last_updated",count++);
    }
}

function helper(value, table, name, price, rank, change, count){
    const tr = document.createElement('tr');
    tr.className = "rows";
    const td_count = document.createElement('td');
    const td_name = document.createElement('td');
    const td_price = document.createElement('td');
    const td_rank = document.createElement('td');
    const td_change = document.createElement('td');
    td_count.textContent = count;
    td_name.textContent = value[name];
    td_price.textContent = value[price];
    td_rank.textContent = value[rank];
    td_change.textContent = value[change];
    
    tr.appendChild(td_count);
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_rank);
    tr.appendChild(td_change);


   table.appendChild(tr);
}
const refreshTable = () => {
  const table = document.getElementById('table');
    let x = document.querySelectorAll(".rows").forEach(e => e.parentNode.removeChild(e));
}

function onLoad(){
    const url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
    fetch(url)
    .then(function(response) {
    return response.json();
  })
    .then(function(myJson) {
        data = myJson;
    // console.log(data);
    displayData(data);
    AddData(data);
  });
}

const AddData = (data) => {
  console.log('adding data');
  obj = data;
  console.log(obj);
}


  function handleSort(){
    const selectedID = document.getElementById('sort').selectedIndex;
    console.log(selectedID);
    if(selectedID == "0"){
      console.log('selected name sort');
      sortByName();
    }
    else if(selectedID == "1"){
      console.log('selected price sort');
      sortByPriceAsc();
    }
    else if(selectedID == "2"){
      console.log('selected rank sort');
      sortByRank();
    }
  }
  function sortByPriceAsc(){
   refreshTable();
   obj.sort(function(a, b){
    return a.price_usd - b.price_usd;    
   });
   displayData(obj);
  console.log('after changing by price',obj);
  }

  
  
  function sortByRank(){
   refreshTable();
   obj.sort(function(a, b){
      return a.rank - b.rank;
   });
   displayData(obj);

  }

  function sortByName(){
    refreshTable();
    obj.sort(function(a, b){
      if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
      }else if(b.name.toLowerCase() < a.name.toLowerCase()){
        return 1;
      }else{
        return 0;
      }
    });
  displayData(obj);
  };

  function filterCoins(){
    const inputText = document.getElementById('search').value;
    console.log(inputText);
    const filteredCoins = obj.filter(function(coin){
    return coin.name.toLowerCase().includes(inputText.toLocaleLowerCase());
    });
    console.log(filteredCoins);
    refreshTable();
    displayData(filteredCoins);
  }