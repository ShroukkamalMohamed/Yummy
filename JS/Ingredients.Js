// ?=====================>>>Elements===============================
var ingredientsContent = document.getElementById("ingredientsContent");
// !=======================>>>PageLoad=============================
getAllIngredients();
// ^=========================>>>function=========================== 
async function getAllIngredients() {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const data = await response.json();
    let cards = ` <div class="container cards">
    <div class="row">
   `;
    for (let index = 0; index < data.meals.length; index++) {
        if (data.meals[index].strDescription != null && data.meals[index].strDescription != "") {
            cards += ` 
                   <div class="col-md-3 mealcard mb-4 text-center" OnClick="getIngredientFilterclick('${data.meals[index].strIngredient}' )" style="display: block; height: 150px;cursor:pointer">
                   <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                   <div class="strArea">${data.meals[index].strIngredient}</div>  <p>
                   ${data.meals[index].strDescription}
                   </p>
                   </div>
                `;
        }
    }
    ingredientsContent.innerHTML = cards += ` </div>
    </div>`;
}
function getIngredientFilterclick(ingredintName){
    getIngredientFilter(ingredintName)
}

async function getIngredientFilter(ingredintName) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredintName}`);
    const data = await response.json();
     let cards = ` <div class="container cards">
    <div class="row">
   `;
    for (let index = 0; index < data.meals.length; index++) {
        cards += ` 
                   <div class="col-md-3 mealcard" style="display: block">
                    <img src="${data.meals[index].strMealThumb}"  alt="">
                    <h5 class="text-center mealName"  >${data.meals[index].strMeal}</h5>
                 </div>
                `;
    }
    ingredientsContent.innerHTML = cards += ` </div>
    </div>`;
}