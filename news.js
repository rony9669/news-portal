const allCategories = async() => {
    try {
        const response = await fetch(
            "https://openapi.programming-hero.com/api/news/categories"
        );
        const data = await response.json();
        const finalData = data.data.news_category;
        return finalData;
    } catch (error) {
        console.log(error);
    }
};

const displayCategory = allCategories().then((data) => {
    const categoryField = document.getElementById("all-category");

    data.map((element) => {
        const { category_name, category_id } = element;

        const div = document.createElement("div");
        div.innerHTML = `<button href="#" class="border-0 btn btn-primary text-white pe-auto nav-link active px-4 row-gap-4 " id="${category_id}" onClick="allCategoriesDetails(this.id)" >${category_name}</button>
        
        `;

        categoryField.appendChild(div);
    });
});

/* -------------------------------------------------------------------------- */
/*                          category details section                          */
/* -------------------------------------------------------------------------- */

const allCategoriesDetails = async(category_id) => {
    try {
        fetch(
                `https://openapi.programming-hero.com/api/news/category/${category_id}`
            )
            .then((response) => response.json())
            .then((json) => displayCategoryDetails(json.data));
        toggleSpinner(true);
    } catch (error) {
        console.log(error);
    }
};

const displayCategoryDetails = (data) => {
    const foundedSize = document.getElementById("founded-size");
    foundedSize.innerHTML = `<p class="text-center fw-bold"> ${
    data.length !== 0 ? data.length : "No "
  } news found for this category</p>`;

    const categoryDetailsField = document.getElementById("category-info");
    categoryDetailsField.textContent = "";

    const totalView = data;
    totalView.sort((a, b) => {
        return b.total_view - a.total_view;
    });

    data.map((elements) => {
        const {
            title,
            total_view,
            image_url,
            thumbnail_url,
            details,
            author,
            _id,
        } = elements;

        const { name, img } = author;
        const showDetailsLimit = details.slice(0, 200).concat("...");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card mb-3">
                <div class="row ">
                    <div class="col-lg-3   col-md-12  col-sm-12">
                            <img src="${
                              thumbnail_url ? thumbnail_url : "No Data"
                            } : No image Found" class="img-fluid main-image" alt="..."  />
                    </div>
                    <div class="col-lg-9 col-md-12 col-sm-12">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">
                                ${showDetailsLimit}
                            </p>
                            <div class="d-flex justify-content-between mt-5" ">
                                <div>
                                    <img src="${
                                      img ? img : "No Data"
                                    }" width="45" alt="..." class="rounded img-fluid d-inline-block align-middle" alt="..." />
                                    <span class="fw-bold ">${
                                      name ? name : "No Name"
                                    }</span> 
                                    
                                </div>
                                <div  style="
                                padding-top: 12px;
                            ">
                                <span class=""><i class="fa-regular fa-eye"></i></span>
                                    <span>${
                                      total_view ? total_view : "No Data"
                                    }</span>
                                </div>
                                <div>
                                <button href="#" onClick="allCategoriesFullDetails(('${_id}'))" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#newsDetailsModal">Details</button>
                                </div> 
                        </div>
                </div>
            </div>
        `;

        categoryDetailsField.appendChild(div);
    });
    toggleSpinner(false);
};

/* -------------------------------------------------------------------------- */
/*                               spinner section                              */
/* -------------------------------------------------------------------------- */

const toggleSpinner = (isLoading) => {
    const loaderSection = document.getElementById("spinner");
    if (isLoading) {
        loaderSection.classList.remove("d-none");
    } else {
        loaderSection.classList.add("d-none");
    }
};

/* -------------------------------------------------------------------------- */
/*                              Modal Information                             */
/* -------------------------------------------------------------------------- */
const allCategoriesFullDetails = async(news_id) => {
    try {
        fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
            .then((response) => response.json())
            .then((json) => displayCategoryFullDetails(json.data));
    } catch (error) {
        console.log(error);
    }
};

const displayCategoryFullDetails = (data) => {
    const newsDetails = document.getElementById("news-details");

    data.forEach((element) => {
        const { total_view, title, image_url, details, author } = element;
        const { name, img, published_date } = author;

        const newsTitle = document.getElementById("newsDetailsModalLabel");

        newsTitle.innerHTML = `<div class="fw-bold">Title: ${
      title ? title : "No Title found"
    }</div>`;

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

// allCategories(08);

// displayCategory(08);

allCategoriesDetails("08");