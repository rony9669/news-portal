// const allCategories = async() => {
//     const response = await fetch(
//         "https://openapi.programming-hero.com/api/news/categories"
//     );
//     const data = await response.json();
//     const finalData = data.data.news_category;
//     return finalData;
//     // return data;
// };
// // allCategories().then((data) => {
// //     console.log(data.data.news_category);
// // });

// // const allCategories = () => {
// //     fetch("https://openapi.programming-hero.com/api/news/categories")
// //         .then((response) => response.json())
// //         .then((json) => displayCategory(json.data.news_category));
// // };

// const displayCategory = allCategories().then((data) => {
//     // console.log(data);
//     const categoryField = document.getElementById("all-category");
//     data.map((element) => {
//         // console.log(data);
//         const { category_name, category_id } = element;

//         const div = document.createElement("div");
//         div.innerHTML = `<button href="#" class="border-0 btn btn-primary text-white pe-auto nav-link active px-4 row-gap-4 " id="${category_id}" onClick="allCategoriesDetails(this.id)" >${category_name}</button>
//         `;

//         // const idLength = Object.keys(category_id).length;
//         // console.log(idLength);

//         categoryField.appendChild(div);
//     });
// });

// // const allCategoriesDetails = (category_id) => {
// //     fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
// //         .then((response) => response.json())
// //         .then((json) => displayCategoryDetails(json.dataTwo));
// // };

// const displayCategoryDetails = allCategories().then((data) => {
//     console.log(data);
//     const foundedSize = document.getElementById("founded-size");
//     foundedSize.innerHTML = `<p class="text-center"> ${dataTwo.length} items found for the category of   </p>`;

//     const categoryDetailsField = document.getElementById("category-info");
//     categoryDetailsField.textContent = "";

//     dataTwo.map((elements) => {
//         // console.log(elements.category_id);

//         const { title, total_view, thumbnail_url, details, author, category_id } =
//         elements;

//         const { name, img } = author;
//         const showDetailsLimit = details.slice(0, 500).concat("...");
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <div class="card mb-3">
//                 <div class="row ">
//                     <div class="col-md-4">
//                         <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div class="col-md-8">
//                         <div class="card-body">
//                             <h5 class="card-title">${title}</h5>
//                             <p class="card-text">
//                                 ${showDetailsLimit}
//                             </p>
//                             <div class="d-flex justify-content-between" ">
//                             <div>
//                                 <img src="${img}" width="45 " alt="... " class="rounded d-inline-block align-middle " alt="... " />

//                                 <span class="fw-bold ">${name}</span>
//                             </div>
//                             <div>
//                                 <img src="./image/view.jpg " width="45 " alt="... ">
//                                 <span>${total_view}</span>
//                             </div>
//                             <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Show Details</button>
//                         </div>
//                         <div class="modal " tabindex="-1 ">
//                         <div class="modal-dialog ">
//                           <div class="modal-content ">
//                             <div class="modal-header ">
//                               <h5 class="modal-title ">Modal title</h5>

//                             </div>
//                             <div class="modal-body ">
//                               <p>Modal body text goes here.</p>
//                             </div>
//                             <div class="modal-footer ">
//                               <button type="button " class="btn btn-secondary " data-bs-dismiss="modal " >Close</button>
//                               <button type="button " class="btn btn-primary ">Save changes</button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//         // console.log(category_name);
//         categoryDetailsField.appendChild(div);
//     });
// });

// // allCategories();

// // displayCategory();

const { total_view, thumbnail_url, details, author, category_id } = data;
const phoneTitle = document.getElementById("phoneDetailsModalLabel");
phoneTitle.innerText = category_id;

const phoneDetails = document.getElementById("phone-details");
phoneDetails.innerHTML = `
<h5>Release Date: ${category_id ? category_id : "No release date found"} </h5>
<p>Others: ${total_view ? total_view : "No others date found"} </p>
`;