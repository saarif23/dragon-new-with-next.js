const getAllNews = async () => {
  const res = await fetch(
    "https://the-dragon-new-server-iota.vercel.app/all-news",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  //   console.log(res.json());
  return res.json();
};

export default getAllNews;
