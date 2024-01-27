// ?=====================>>>Elements===============================
let areaFilterContent = document.getElementById("areaFilterContent");
// !=======================>>>PageLoad=============================
getAllCategories();
// !=============GetDataFromUrl===============================
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
let userNameParam = urlParams.get('strArea');
console.log(userNameParam);

// ^=========================>>>function=========================== 
async function getAllCategories() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${userNameParam}`);
    const data = await response.json();
    console.log(data);
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
    areaFilterContent.innerHTML = cards += ` </div>
    </div>`;
}
 
// Get the value of strArea from the URL
function getPageName() {
    var url = window.location.href;
    
    // Get the part of the URL after the hash (#) symbol
    var hashPart = url.split('#')[1];

    // If there is a hash part, return it as the page name; otherwise, return null
    return hashPart ? hashPart : null;
}

// Get the page name
var currentPageName = getPageName();

// Now you can use currentPageName in your code
console.log('Current page name:', currentPageName);