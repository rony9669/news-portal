const allCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((response) => response.json())
        .then((json) => displayCategory(json.data.news_category));
};

const displayCategory = (data) => {
    const categoryField = document.getElementById("all-category");
    data.map((element) => {
        const { category_name, category_id } = element;
        const div = document.createElement("div");
        div.innerHTML = `<a class="nav-link active px-4 row-gap-4 " id="${category_id}" onClick="allCategoriesDetails(this.id)" >${category_name}</a>`;

        const appendChild = categoryField.appendChild(div);
    });
};

const allCategoriesDetails = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then((response) => response.json())
        .then((json) => displayCategoryDetails(json.data));
};

const displayCategoryDetails = (data) => {
    const categoryDetailsField = document.getElementById("category-info");
    categoryDetailsField.textContent = "";

    data.forEach((element) => {
        // console.log(element.title)

        const { title, total_view, thumbnail_url, details, author } = element;
        const { name, img } = author;
        const showDetailsLimit = details.slice(0, 500).concat("...");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card mb-3">
                <div class="row ">
                    <div class="col-md-4">
                        <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">
                                ${showDetailsLimit}
                            </p>
                            <div class="d-flex justify-content-between" ">
                            <div>
                                <img src="${img}" width="45 " alt="... " class="rounded d-inline-block align-middle " alt="... " />

                                <span class="fw-bold ">${name}</span>
                            </div>
                            <div>
                                <img src="./image/view.jpg " width="45 " alt="... ">
                                <span>${total_view}</span>
                            </div>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Show Details</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // console.log(category_name);
        categoryDetailsField.appendChild(div);
    });
};

allCategories();

// displayCategory();

function btnBlue() {
    document.getElementById("Div3").style.backgroundColor = "Blue";
}