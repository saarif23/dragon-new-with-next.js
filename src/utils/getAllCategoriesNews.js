
const getAllCategoriesNews = async () => {
    const res = await fetch('http://localhost:5000/categories')
    return res.json()
};

export default getAllCategoriesNews;