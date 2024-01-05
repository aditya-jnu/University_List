function clearList(){
  let target=document.getElementsByClassName("container")[0];
  target.innerHTML="";
  let x = document.getElementById('myInput')
   x.value="";
}


const getValue=(event)=>
{ 
  let target=document.getElementsByClassName("container")[0];
  target.innerHTML="";

  event.preventDefault();

  let x = document.getElementById('myInput').value;
  console.log('User input:', x);
  let url = `http://universities.hipolabs.com/search?country=${x}`;


  let promise=fetch(url);
    promise.then((res)=>{
       return res.json();
    }).then((val)=>
    {
      console.log(val);
      let ihtml="";
      val.forEach((uni) => {
        
        ihtml+=`
              <div class="cardBox">
                <div class="card" style="width: 18rem;">
                 <div class="card-body">
                 <h5 class="card-title">${uni.name}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${uni['state-province']}</h6>
                 <p class="card-text">Domain : ${uni.domains[0]}</p>
                 <a href="${uni.web_pages[0]}" class="card-link" target="_blank">Official Website</a>
                 <a href="#" class="card-link" target="_blank">Another link</a>
                 </div>
                </div>
              </div>`
      });
      target.innerHTML=ihtml;
    });
}





