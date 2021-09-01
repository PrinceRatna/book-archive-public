// ------------click button---------------
clickButton=()=>{
    const inputField=document.getElementById('input-field');
    const inputText=inputField.value;
    inputField.value='';
    const url=`http://openlibrary.org/search.json?q=${inputText}`;
    fetch(url)
      .then(res=>res.json())
      .then(data=>displaySearchResult(data.docs));
}
//-------------display search result--------------
displaySearchResult=docs=>{
   const cardContainer=document.getElementById('card-container');
   cardContainer.textContent='';
   if(docs.length===0){
    document.getElementById('count').innerHTML=`<h4 class='text-center'>No Result Found!!</h4> `;  
   }
   else{
    document.getElementById('count').innerHTML=`<h4 class='text-center'>Search Results: ${docs.length}</h4> `;
    docs?.forEach(doc=>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card  h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>Title:</strong>${doc.title}</h5>
          <h6><strong>Author Name: </strong>${doc.author_name?doc.author_name:'no result found'}<br>
          <strong>Publisher: </strong>${doc.publisher?doc.publisher:'no result found'}<br>
         <strong>First Publish Year: </strong>${doc.first_publish_year?doc.first_publish_year:'no result found'}</h6>
        </div>
      </div>
        `
        cardContainer.appendChild(div);   
    })
   }
}