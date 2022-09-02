const allCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((response) => response.json())
        .then((json) => displayCategory(json.data.news_category));
};

const displayCategory = (data) => {
    const categoryField = document.getElementById("all-category");
    data.forEach((element) => {
        const { category_name } = element;
        const div = document.createElement("div");
        div.innerHTML = `<a class="nav-link active px-4">${category_name}</a>`;
        // console.log(category_name);
        categoryField.appendChild(div);
    });
};

allCategories();