// ?=====================>>>Elements===============================
let pageContent = document.getElementById("pageContent");
// !=========================>>>>PageLoad==========================
featchMealsData();

// ^=========================>>>function=========================== 
function openSideMenu() {
    $(".sideMenu").animate({ "left": 0 }, 1000);
    $("#closesideMunuIcon").removeClass("fa-bars").addClass("fa-xmark");

}
function closeSideMenu(offset) {
    $(".sideMenu").animate({ "left": -offset }, 1000);
    $("#closesideMunuIcon").removeClass("fa-xmark").addClass("fa-bars");

}
async function featchMealsData() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await response.json();
    // $(".load").hide();
    let cards = ` <div class="container cards">
    <div class="row">
   `;
    for (let index = 0; index < data.meals.length; index++) {
        cards += ` 
        <div class="col-md-3 mealcard" onclick="mealDetails('${data.meals[index].idMeal}')"  style="display: block">
            <img src="${data.meals[index].strMealThumb}"  alt="">
            <h5 class="text-center mealName"  >${data.meals[index].strMeal}</h5>
        </div>
    `;
    }
    pageContent.innerHTML = cards += ` </div>
    </div>`;
}

// ~=========================>>>>>Events===========================
$(".icon").click(function () {

    let leftOffset = $(".icon").offset().left;
    if (leftOffset == 0) {
        openSideMenu();
        $(".menu").removeClass("d-none", 1000);
    } else {
        closeSideMenu(leftOffset);
    }
});
$(".links ul li a").click(function () {
    closeSideMenu($(".icon").offset().left);

});
function openPage(url, targetId) {
    console.log("hhhh");
    pageContent.innerHTML = ""
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#' + targetId).html(data);
        },
        error: function (error) {
            console.error('Error loading page:', error);
        }
    });
}
async function mealDetails(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data);
    pageContent.innerHTML = ` <div class="mealContent mt-4" id="mealContent">
   <div class="container mt-5">
     <div class="row">
       <div class="col-md-4">
         <img src=${data.meals[0].strMealThumb} id="mealImg" alt="" />
         <span id="mealTitle" style="font-size: 30px">${data.meals[0].strMeal}</span>
       </div>
       <div class="col-md-8 d-flex flex-column">
         <div id="mealInstructions"style="font-size: 15px">${data.meals[0].strInstructions}</div>
      <div class="row mt-3">
       <span id="area" style="font-size: 22px"> area: ${data.meals[0].strArea}</span>
       <span id="Category" style="font-size: 22px">Category: ${data.meals[0].strCategory}</span>
       <span id="Recipes" style="font-size: 22px"> Recipes:
       <ul class=" strIngredient list-unstyled d-flex flex-wrap justify-content-between gap-2" style="font-size: 20px  ">
       <li>${data.meals[0].strIngredient1}</li>
       <li>${data.meals[0].strIngredient2}</li>
       <li>${data.meals[0].strIngredient3}</li>
       <li>${data.meals[0].strIngredient4}</li>
       <li>${data.meals[0].strIngredient5}</li>
       <li>${data.meals[0].strIngredient6}</li>
       <li>${data.meals[0].strIngredient7}</li>
       <li>${data.meals[0].strIngredient8}</li>
       <li>${data.meals[0].strIngredient9}</li>
       <li>${data.meals[0].strIngredient10}</li>
       </ul>
       </span>
       <span id="Tags" style="font-size: 22px">Tags : 
       <br>
       <span> <a class="btn btn-success" href="${data.meals[0].strYoutube}" style="color: white;
       text-decoration: none;
       padding: 10px;"> Source</a></span>
       <span> <a class="btn btn-danger" href="${data.meals[0].strYoutube}" style="color: white;
       text-decoration: none;
       padding: 10px;"> Youtube</a></span>
       </span>
       </div>
       </div>
      
     </div>
   </div>
 </div>`
}


