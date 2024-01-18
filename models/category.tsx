import { useNavigation } from "@react-navigation/native";


class Category {
  id: string;
  title: string;
  color: string;



  constructor(id: string, title: string, color: string) {
    // let navigate = useNavigation();
    this.id = id;
    this.title = title;
    this.color = color;
  }

  // onPress(navigate: any) {
  //   navigate.navigate("MealsOverview" as never);
  // }



}

export default Category;
