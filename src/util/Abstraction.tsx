import GimbobIngredientInterface from "../interface/GimbobIngredientInterface";

interface MakeGimbobInterface {
  makeGimbob(amount: number): {
    completed: string;
    leftIngredients: string;
  };
}

class Abstraction implements MakeGimbobInterface {
  private static RICE_GRAM_FOR_STEAMED = 100;

  protected ingredient: GimbobIngredientInterface = {
    main: undefined,
    rice: 0,
    steamedRice: 0,
    laver: 0,
    vegetables: true,
  };

  constructor(main: string, rice: number, laver: number) {
    this.ingredient = {
      ...this.ingredient,
      main: main,
      rice: rice,
      laver: laver,
    };
  }

  // setIngredient(
  //     main: string, rice: number, laver: number
  // ): Abstraction {
  //     return new Abstraction(main, rice, laver);
  // }

  private static makeSaltySteamedRice() {
    console.log("밥에 간을 하고 있습니다.");
  }

  private static setLeftIngredient() {
    console.log("재료를 올리고 있습니다.");
  }

  private static roll() {
    console.log("꾹꾹 말고 있습니다.");
  }

  fillRice(rice: number) {
    this.ingredient.rice += rice;
  }

  makeGimbob(amount: number) {
    this.makeSteamedRice(amount);
    Abstraction.makeSaltySteamedRice();
    this.setSteamedRiceAndLaver(amount);
    Abstraction.setLeftIngredient();
    Abstraction.roll();
    return {
      completed: `${this.ingredient.main}김밥 ${amount}줄 완성!`,
      leftIngredients: `남은 재료는 쌀${this.ingredient.rice}g, 밥${this.ingredient.steamedRice}공기, 김${this.ingredient.laver}장 입니다.`,
    };
  }

  private makeSteamedRice(amount: number) {
    if (amount * Abstraction.RICE_GRAM_FOR_STEAMED > this.ingredient.rice) {
      console.error("쌀이 부족합니다.");
    } else {
      console.log(`밥을 ${amount}공기 하고 있습니다.`);
      this.ingredient.steamedRice += amount;
      this.ingredient.rice -= amount * Abstraction.RICE_GRAM_FOR_STEAMED;
    }
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

export default Abstraction;
