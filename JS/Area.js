// ?=====================>>>Elements===============================
var areaContent = document.getElementById("areaContent");
// !=======================>>>PageLoad=============================
getAllAreas();
// ^=========================>>>function=========================== 
async function getAllAreas() {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const data = await response.json();
    let cards = ` <div class="container cards">
    <div class="row">
   `;
    for (let index = 0; index < data.meals.length; index++) {
        cards += ` 
                   <div class="col-md-3 mealcard mb-4" style="display: block">
                   <a href="#" onclick="getAreaFilterclick('${data.meals[index].strArea}' )">
                   <i class="fa-solid fa-house-laptop"></i>
               </a>
                   <div class="strArea">${data.meals[index].strArea}</div>
                   </div>
                `;
    }
    areaContent.innerHTML = cards += ` </div>
    </div>`;
}
async function getAreaFilter(nameParam) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameParam}`);
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
    areaContent.innerHTML = cards += ` </div>
    </div>`;
}
function getAreaFilterclick(nameParam) {
    getAreaFilter(nameParam);
}