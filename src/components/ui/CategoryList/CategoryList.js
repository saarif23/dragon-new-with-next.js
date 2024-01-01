import getAllCategoriesNews from "@/utils/getAllCategoriesNews";


const CategoryList = async () => {
    const { data: allCategory } = await getAllCategoriesNews();
    console.log(allCategory);
    return (
        <>
            <h1>Categories</h1>
        </>
    );
};

export default CategoryList;