// ------------click button---------------
clickButton=()=>{
    const inputField=document.getElementById('input-field');
    const inputText=inputField.value;
    inputField.value='';
    const url=`https://openlibrary.org/search.json?q=${inputText}`;
    fetch(url)
      .then(res=>res.json())
      .then(data=>displaySearchResult(data.numFound,data.docs));
}
//-------------display search result--------------
displaySearchResult=(resultFoundNumber,docs)=>{
   const cardContainer=document.getElementById('card-container');
   cardContainer.textContent='';
   if(docs.length===0){
    document.getElementById('count').innerHTML=`<h4 class='text-center'>No Result Found!!</h4> `;  
   }
   else{
    document.getElementById('count').innerHTML=`<h4 class='text-center'> ${resultFoundNumber}  Results Founded </h4> `;
    docs?.forEach(doc=>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card bg-white h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="Image not Available">
        <div class="card-body">
          <h5 class="card-title"><strong>Title:</strong>${doc.title}</h5>
          <strong>Author Name: </strong>${doc.author_name?doc.author_name:'no result found'}<br>
          <strong>Publisher: </strong>${doc.publisher?doc.publisher:'no result found'}<br>
         <strong>First Publish Year: </strong>${doc.first_publish_year?doc.first_publish_year:'no result found'}
        </div>
      </div>
        `
        cardContainer.appendChild(div);   
    })
   }
}