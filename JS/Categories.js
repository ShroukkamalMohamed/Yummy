// ?=====================>>>Elements===============================
let categryContent = document.getElementById("categryContent");
// !=======================>>>PageLoad=============================
getAllCategories();
// ^=========================>>>function=========================== 
async function getAllCategories() {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await response.json();
    console.log(data);
    let cards = ` <div class="container cards">
    <div class="row">
   `;
    for (let index = 0; index < data.categories.length; index++) {
        cards += ` 
                   <div class="col-md-3 mealcard" style="display: block">
                    <img src="${data.categories[index].strCategoryThumb}"  alt="">
                    <h5 class="text-center mealName"  >${data.categories[index].strCategory}</h5>
                 </div>
                `;
    }
    categryContent.innerHTML = cards += ` </div>
    </div>`;
}

