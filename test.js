// const urls = [
//     "https://openapi.programming-hero.com/api/news/categories",
//     "https://openapi.programming-hero.com/api/news/category/{category_id}",
//     "https://openapi.programming-hero.com/api/news/{news_id}",
// ];

// const fetchData = async() => {
//     try {
//         const response = await Promise.all(
//             urls.map((url) =>
//                 fetch(url)
//                 .then((res) => res.json())
//                 .then((json) => console.log(json.data.news_category))
//             )
//         );
//         console.log(response);
//     } catch (error) {
//         console.log("Error", error);
//     }
// };
// fetchData();