
const getCategoryNews = async (category) => {
    console.log(category);
    const res = await fetch(`https://the-dragon-new-server-iota.vercel.app/news?category=${category}`, {
        cache: "no-store"
    })
    // console.log(res.json);
    return res.json();
};

export default getCategoryNews;