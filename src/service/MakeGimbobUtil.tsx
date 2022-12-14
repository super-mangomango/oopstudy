import GimbobIngredientInterface from "../interface/GimbobIngredientInterface";

interface GimbobMaker {
  makeGimbob(amount: number): {
    completed: string;
    leftIngredients: string;
  };
}

class MakeGimbobUtil implements GimbobMaker {
  ingredient: GimbobIngredientInterface = {
    main: undefined,
    vegetables: true,
    rice: 0,
    steamedRice: 0,
    laver: 0,
  };

  constructor(main: string, rice: number, laver: number) {
    this.ingredient = {
      ...this.ingredient,
      main: main,
      rice: rice,
      laver: laver,
    };
  }

  static setIngredient(
    main: string,
    rice: number,
    laver: number
  ): MakeGimbobUtil {
    return new MakeGimbobUtil(main, rice, laver);
  }

  private static setLeftIngredient() {
    console.log("재료를 올리고 있습니다.");
  }

  private static roll() {
    console.log("꾹꾹 말고 있습니다.");
  }

  makeGimbob(amount: number) {
    this.makeSteamedRice(amount);
    this.makeSaltySteamedRice();
    this.setSteamedRiceAndLaver(amount);
    MakeGimbobUtil.setLeftIngredient();
    MakeGimbobUtil.roll();
    return {
      completed: `${this.ingredient.main}김밥 ${amount}줄 완성!`,
      leftIngredients: `남은 재료는 쌀${this.ingredient.rice}g, 밥${this.ingredient.steamedRice}공기, 김${this.ingredient.laver}장 입니다.`,
    };
  }

  private makeSteamedRice(amount: number) {
    if (amount * 100 > this.ingredient.rice) {
      console.error("쌀이 부족합니다.");
    } else {
      console.log(`밥을 ${amount}공기 하고 있습니다.`);
      this.ingredient.steamedRice = amount;
      this.ingredient.rice -= amount * 100;
    }
  }

  private makeSaltySteamedRice() {
    console.log("밥에 간을 하고 있습니다.");
  }

  private setSteamedRiceAndLaver(amount: number) {
    if (amount > this.ingredient.laver) {
      console.error("김이 부족합니다.");
    } else {
      console.log(`김에 밥을 올리고 펴고 있습니다.`);
      this.ingredient.laver -= amount;
      this.ingredient.steamedRice -= amount;
    }
  }
}

export default MakeGimbobUtil;
