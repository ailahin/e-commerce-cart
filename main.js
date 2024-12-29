let details= document.getElementById('details')
let allData=[];
console.log('here is detaisl', allData);

console.log( details);

fetch ('https://fakestoreapi.com/products')
.then (response=> response.json())
.then(data=> {
     /** data.forEach(data=>{
         console.log(data.id)
     }) */
    
    console.log(data)

    allData = data;
    console.log('Fetched products:', allData);

    generateDetails(data)
    increment(data)
    searchProduct(data)

})


.catch(error=>console.error('error fatching data:', error))



const generateDetails = (products) => {

    //
    //     console.log(product.title)
    //     console.log(product.image)
    //     console.log(product.id)

        details.innerHTML= products.map(product=>{

            const {title, id, image, price}= product;

            return (
            
             `<div id="card-details" class="card-details">
                        <div>
                        <div> <img src="${image}" alt=""></div>
                        <h2> ${title} </h2>
                        <h3>$${price}</h3>
                        <div class="items-number"> 
        
                            <button  onclick="increment(${id})"> + </button>
                            <p id= ${id}> 0 </p>
                            <button onclick=decrement(${id})> - </button>
                            
                        </div>
                        </div>
            </div>` 

            )


        }).join('');
}


const increment=(id)=>{
    let selecteditem= document.getElementById(`${id}`)
    let currentItem= parseInt(selecteditem.textContent)
      currentItem++
      selecteditem.textContent = currentItem;
    

}

const decrement=(id)=>{
  let selecteditem= document.getElementById(`${id}`)
  let currentItem= parseInt(selecteditem.textContent)
  if (currentItem>0){
    currentItem--;
    selecteditem.textContent = currentItem;
  }

}

/** const increment = (productdetails) => {
  productdetails.forEach((productID) => {
    console.log("this is product ID:", productID.id);
  });

  if (productID.id) {
    add.value + 1;
  }
}; **/


const searchProduct=()=>{
  
  const search= document.getElementById('search').value.toLowerCase();
  const filteredProducts= allData.filter((product)=>{
    return product.title.toLowerCase().includes(search)
    
  })

  generateDetails(filteredProducts);

}