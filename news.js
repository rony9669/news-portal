const allCategories = async() => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await response.json();
    const finalData = data.data.news_category;
    return finalData;
    // return data;
};

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
    // console.log(categoryField);
});

/* -------------------------------------------------------------------------- */
/*                          category details section                          */
/* -------------------------------------------------------------------------- */

const allCategoriesDetails = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then((response) => response.json())
        .then((json) => displayCategoryDetails(json.data));
};

const displayCategoryDetails = (data) => {
    // console.log(data);
    const foundedSize = document.getElementById("founded-size");
    foundedSize.innerHTML = `<p class="text-center"> ${data.length} items found for the category of   </p>`;

    const spinner = document.getElementById("spinner");
    spinner.classList.remove("d-none");

    const categoryDetailsField = document.getElementById("category-info");
    categoryDetailsField.textContent = "";

    // console.log(data[0].total_view);
    const totalView = data;
    totalView.sort((a, b) => {
        return b.total_view - a.total_view;
    });

    data.map((elements) => {
        const {
            title,
            total_view,
            thumbnail_url,
            details,
            author,
            category_id,
            _id,
        } = elements;

        // console.log(_id);

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
                                }" width="45 " alt="... " class="rounded img-fluid d-inline-block align-middle " alt="... " />

                                <span class="fw-bold ">${
                                  name ? name : "No Name Found"
                                }</span>
                            </div>
                            <div>
                                <img src="./image/view.jpg " width="45 " alt="... ">
                                <span>${
                                  total_view ? total_view : "No data Found"
                                }</span>
                            </div>
                            <div>
                            <button href="#" onClick="allCategoriesFullDetails(('${_id}'))" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">Show Details</button>
                            </div>
                                
                        </div>

                </div>
            </div>
        `;

        // console.log(category_name);
        categoryDetailsField.appendChild(div);
        const spinnerItem = document.getElementById("spinner");
        spinnerItem.classList.add("d-none");
        // let id = allCategoriesFullDetails(_id);
        // console.log(id);
    });
};

const allCategoriesFullDetails = (news_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
        .then((response) => response.json())
        .then((json) => displayCategoryFullDetails(json.data));
};

const displayCategoryFullDetails = (data) => {
    // console.log(data[0]._id);

    const newsDetails = document.getElementById("news-details");

    data.forEach((element) => {
        const { total_view, title, image_url, details, author } = element;
        const { name, img, published_date } = author;
        // console.log(title);
        const newsTitle = document.getElementById("newsDetailsModalLabel");

        newsTitle.innerHTML = ` <div class="fw-bold">Title: ${
      title ? title : "No Title found"
    }</div> `;

        newsDetails.textContent = "";

        const div = document.createElement("div");

        div.innerHTML = `
                    <img class="img-fluid" src="${image_url}" alt="">
                    <h4 class="mt-2">Author name : ${
                      name ? name : "No name found"
                    }</h4>
                    <img src="${img}" width="45 " alt="">
                     <div><small>Publish Date:${published_date}</small></div>
                    <p>Total Views: ${
                      total_view ? total_view : "No date found"
                    } </p>
                    <p>Description: ${details ? details : "No date found"} </p>
    `;

        newsDetails.appendChild(div);
    });
};

// accordion section
const blogSection = document.getElementById("blog-section");
blogSection.addEventListener("click", function() {
    const accordion = document.getElementById("accordion-section");
    accordion.classList.remove("d-none");
});

// allCategories(08);

// displayCategory(08);