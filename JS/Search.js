// ?=====================>>>Elements===============================
let searchInputbyName = document.getElementById("searchInputbyName");
let searchInputbyLetter = document.getElementById("searchInputbyLetter");
let searchResult = document.getElementById("searchResult");
// ^=========================>>>function=========================== 
async function searchInputbyLetterFun(searchParam) {
    searchResult.innerHTML = "";
    console.log(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchParam}`);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchParam}`);
    const data = await response.json();
    console.log("data");
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
    searchResult.innerHTML = cards += ` </div>
    </div>`;
}
async function searchInputbyNameFun(searchParam) {
    searchResult.innerHTML = "";
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`);
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
    searchResult.innerHTML = cards += ` </div>
    </div>`;
}
// ~====================>>>>>Events======================================
searchInputbyName.addEventListener("input", function () {
    let inputValue = searchInputbyName.value;

    searchInputbyNameFun(inputValue)
})
searchInputbyLetter.addEventListener("input", function () {
    let inputValue = searchInputbyLetter.value;

    searchInputbyLetterFun(inputValue)
})