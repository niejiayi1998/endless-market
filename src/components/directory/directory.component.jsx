import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "dinnerware",
    imageUrl: "https://i.ibb.co/wQtmqvg/dinnerware.jpg",
    route: "shop/dinnerware",
  },
  {
    id: 2,
    title: "drinkware",
    imageUrl: "https://i.ibb.co/92Rxykf/drinkware.jpg",
    route: "shop/drinkware",
  },
  {
    id: 3,
    title: "flatware",
    imageUrl: "https://i.ibb.co/6y68nCM/flatware.jpg",
    route: "shop/flatware",
  },
  {
    id: 4,
    title: "serveware",
    imageUrl: "https://i.ibb.co/7bSf3pH/serveware.jpg",
    route: "shop/serveware",
  },
  {
    id: 5,
    title: "bakeware",
    imageUrl: "https://i.ibb.co/HtQ5m6p/bakeware.jpg",
    route: "shop/bakeware",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
