import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "dinnerware",
      imageUrl: "https://i.ibb.co/wQtmqvg/dinnerware.jpg",
    },
    {
      id: 2,
      title: "drinkware",
      imageUrl: "https://i.ibb.co/92Rxykf/drinkware.jpg",
    },
    {
      id: 3,
      title: "flatware",
      imageUrl: "https://i.ibb.co/6y68nCM/flatware.jpg",
    },
    {
      id: 4,
      title: "serveware",
      imageUrl: "https://i.ibb.co/7bSf3pH/serveware.jpg",
    },
    {
      id: 5,
      title: "bakeware",
      imageUrl: "https://i.ibb.co/HtQ5m6p/bakeware.jpg",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
