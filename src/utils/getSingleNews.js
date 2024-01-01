const getSingleNews = async (id) => {
  const res = await fetch(
    `https://the-dragon-new-server-iota.vercel.app/news/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export default getSingleNews;
