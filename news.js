const allCategories = async() => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();
    const finalData = data.data.news_category;
    return finalData;
    // return data;
};
// allCategories().then((data) => {
//     console.log(data.data.news_category);
// });

// const allCategories = () => {
//     fetch("https://openapi.programming-hero.com/api/news/categories")
//         .then((response) => response.json())
//         .then((json) => displayCategory(json.data.news_category));
// };

const displayCategory = allCategories().then((data) => {
    // console.log(data);
    const categoryField = document.getElementById("all-category");

    data.map((element) => {
        // console.log(data);
        const { category_name, category_id } = element;

        const div = document.createElement("div");
        div.innerHTML = `<button href="#" class="border-0 btn btn-primary text-white pe-auto nav-link active px-4 row-gap-4 " id="${category_id}" onClick="allCategoriesDetails(this.id)" >${category_name}</button>
        
        `;

        // const idLength = Object.keys(category_id).length;
        // console.log(idLength);

        categoryField.appendChild(div);
    });
});

const allCategoriesDetails = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then((response) => response.json())
        .then((json) => displayCategoryDetails(json.data));
};

const displayCategoryDetails = (data) => {
    // console.log(allCategories().then(data.data));
    const foundedSize = document.getElementById("founded-size");
    foundedSize.innerHTML = `<p class="text-center"> ${data.length} items found for the category of   </p>`;

    const spinner = document.getElementById("spinner");
    spinner.classList.remove("d-none");
    const categoryDetailsField = document.getElementById("category-info");
    categoryDetailsField.textContent = "";

    data.forEach((elements) => {
        // console.log(elements.category_id);

        const { title, total_view, thumbnail_url, details, author, category_id } =
        elements;

        const { name, img } = author;
        const showDetailsLimit = details.slice(0, 500).concat("...");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card mb-3">
                <div class="row ">
                    <div class="col-md-4">
                        <img src="${
                          thumbnail_url ? thumbnail_url : "No data Found"
                        } : No image Found" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">
                                ${showDetailsLimit}
                            </p>
                            <div class="d-flex justify-content-between" ">
                            <div>
                                <img src="${
                                  img ? img : "No data Found"
                                }" width="45 " alt="... " class="rounded d-inline-block align-middle " alt="... " />

                                <span class="fw-bold ">${name}</span>
                            </div>
                            <div>
                                <img src="./image/view.jpg " width="45 " alt="... ">
                                <span>${
                                  total_view ? total_view : "No data Found"
                                }</span>
                            </div>
                            <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" aria-label="Close">Show Details</button>
                        </div>

                </div>
            </div>
        `;
        // console.log(category_name);
        categoryDetailsField.appendChild(div);
        const spinnerItem = document.getElementById("spinner");
        spinnerItem.classList.add("d-none");
    });
};

// allCategories();

// displayCategory();