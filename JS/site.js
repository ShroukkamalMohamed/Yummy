// ?=====================>>>Elements===============================
let pageContent = document.getElementById("pageContent");

//*==========================>>>>Variables==========================



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
    pageContent.innerHTML = cards += ` </div>
    </div>`;
}

// ~=========================>>>>>Events===========================
$(".icon").click(function () {

    let leftOffset = $(".icon").offset().left;
    if (leftOffset == 0) {
        openSideMenu();
        $(".menu").removeClass("d-none", 1000, "easeInBack");
    } else {
        closeSideMenu(leftOffset);
    }
});
$(".links ul li a").click(function () {
    closeSideMenu($(".icon").offset().left);

});
function loadPage(url, targetId) {
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


