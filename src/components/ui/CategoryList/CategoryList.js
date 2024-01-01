
import getAllCategoriesNews from "@/utils/getAllCategoriesNews";
import Link from "next/link";

const CategoryList = async () => {
    const { data: allCategory } = await getAllCategoriesNews();
    console.log(allCategory);
    return (

        <div className="mt-5">
            <div className="text-red-500 text-2xl font-semibold pb-3">
                News Category
                <hr className="mt-2 bg-black" />
            </div>
            {allCategory.map(category =>
                <Link href={`/categories/news?category=${category.title.toLowerCase()}`} key={category._id}>
                    <div className="border mt-2 p-2 cursor-pointer  border-black hover:bg-black hover:text-white">
                        {category?.title}
                    </div>
                </Link>
            )}

        </div>
    );
};

export default CategoryList;