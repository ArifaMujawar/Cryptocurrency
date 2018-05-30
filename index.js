let data = "";
onLoad();

// displayData();
// sortBy();

function displayData(data){
    let count = 1;
    const table = document.getElementById('table');
    for(let i = 0; i < data.length; i++){
       
        // console.log(data[i]);
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
  });
}
showDropDown = () =>{
    document.getElementById("myDropdown").classList.toggle("show");
}

sortBy = (e) => {
console.log("check ",e);
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }