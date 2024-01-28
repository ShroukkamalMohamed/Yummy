// // ?=====================>>>Elements===============================
// let areaFilterContent = document.getElementById("areaFilterContent");
// // !=======================>>>PageLoad=============================
// getAllCategories();
// // !=============GetDataFromUrl===============================
// const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);
// let userNameParam = urlParams.get('strArea');
// console.log(userNameParam);

// // ^=========================>>>function=========================== 
// async function getAllCategories() {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${userNameParam}`);
//     const data = await response.json();
//     console.log(data);
//     let cards = ` <div class="container cards">
//     <div class="row">
//    `;
//     for (let index = 0; index < data.meals.length; index++) {
//         cards += ` 
//                    <div class="col-md-3 mealcard" style="display: block">
//                     <img src="${data.meals[index].strMealThumb}"  alt="">
//                     <h5 class="text-center mealName"  >${data.meals[index].strMeal}</h5>
//                  </div>
//                 `;
//     }
//     areaFilterContent.innerHTML = cards += ` </div>
//     </div>`;
// }
 
 