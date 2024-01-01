
const getAllCategoriesNews = async () => {
    const res = await fetch('https://the-dragon-new-server-iota.vercel.app/categories')
    return res.json()
};

export default getAllCategoriesNews;