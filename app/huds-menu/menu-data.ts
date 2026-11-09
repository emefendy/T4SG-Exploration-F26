// SAMPLE data shaped like the HUDS FoodPro menu (meals → categories → items).
// In a real app this would come from an API instead of being typed out here.

export type DietTag = "vegan" | "vegetarian" | "halal";
export type MealName = "Breakfast" | "Lunch" | "Dinner";

export type MenuItem = {
  id: string;
  name: string;
  portion: string; // e.g. "1 each", "4 oz"
  calories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  tags: DietTag[];
};

export type MenuCategory = {
  name: string; // e.g. "Entrees", "Soups"
  items: MenuItem[];
};

export type Meal = {
  name: MealName;
  categories: MenuCategory[];
};

export const days = [
  "Sunday, November 1",
  "Monday, November 2",
  "Tuesday, November 3",
  "Wednesday, November 4",
  "Thursday, November 5",
  "Friday, November 6",
  "Saturday, November 7",
];

export const meals: Meal[] = [
  {
    name: "Breakfast",
    categories: [
      {
        name: "Breakfast Entrees",
        items: [
          { id: "b1", name: "Scrambled Eggs", portion: "4 oz", calories: 180, protein: 12, carbs: 2, fat: 13, tags: ["vegetarian", "halal"] },
          { id: "b2", name: "Buttermilk Pancakes", portion: "2 each", calories: 290, protein: 7, carbs: 44, fat: 9, tags: ["vegetarian"] },
          { id: "b3", name: "Tofu Scramble", portion: "4 oz", calories: 150, protein: 11, carbs: 5, fat: 9, tags: ["vegan", "halal"] },
          { id: "b4", name: "Turkey Sausage Links", portion: "2 each", calories: 140, protein: 10, carbs: 1, fat: 10, tags: [] },
        ],
      },
      {
        name: "Breakfast Bakery",
        items: [
          { id: "b5", name: "Blueberry Muffin", portion: "1 each", calories: 360, protein: 5, carbs: 52, fat: 15, tags: ["vegetarian"] },
          { id: "b6", name: "Everything Bagel", portion: "1 each", calories: 280, protein: 11, carbs: 55, fat: 2, tags: ["vegan"] },
        ],
      },
      {
        name: "Hot Cereal",
        items: [
          { id: "b7", name: "Steel Cut Oatmeal", portion: "8 oz", calories: 170, protein: 6, carbs: 29, fat: 3, tags: ["vegan", "halal"] },
        ],
      },
    ],
  },
  {
    name: "Lunch",
    categories: [
      {
        name: "Today's Soup",
        items: [
          { id: "l1", name: "Tomato Basil Soup", portion: "8 oz", calories: 160, protein: 3, carbs: 20, fat: 8, tags: ["vegetarian"] },
          { id: "l2", name: "Chicken Noodle Soup", portion: "8 oz", calories: 120, protein: 9, carbs: 13, fat: 3, tags: [] },
        ],
      },
      {
        name: "Entrees",
        items: [
          { id: "l3", name: "Grilled Halal Chicken Breast", portion: "4 oz", calories: 190, protein: 35, carbs: 0, fat: 5, tags: ["halal"] },
          { id: "l4", name: "Black Bean Burger", portion: "1 each", calories: 260, protein: 12, carbs: 34, fat: 9, tags: ["vegan"] },
          { id: "l5", name: "Baked Penne with Marinara", portion: "8 oz", calories: 340, protein: 13, carbs: 52, fat: 9, tags: ["vegetarian"] },
        ],
      },
      {
        name: "Starch And Potatoes",
        items: [
          { id: "l6", name: "Roasted Red Potatoes", portion: "4 oz", calories: 120, protein: 2, carbs: 19, fat: 4, tags: ["vegan", "halal"] },
          { id: "l7", name: "Brown Rice", portion: "4 oz", calories: 130, protein: 3, carbs: 27, fat: 1, tags: ["vegan", "halal"] },
        ],
      },
      {
        name: "Vegetables",
        items: [
          { id: "l8", name: "Steamed Broccoli", portion: "3 oz", calories: 30, protein: 2, carbs: 6, fat: 0, tags: ["vegan", "halal"] },
        ],
      },
    ],
  },
  {
    name: "Dinner",
    categories: [
      {
        name: "Entrees",
        items: [
          { id: "d1", name: "Lemon Herb Salmon", portion: "4 oz", calories: 230, protein: 25, carbs: 1, fat: 14, tags: ["halal"] },
          { id: "d2", name: "Beef Tacos", portion: "2 each", calories: 380, protein: 20, carbs: 30, fat: 19, tags: [] },
          { id: "d3", name: "Chickpea Tikka Masala", portion: "8 oz", calories: 310, protein: 11, carbs: 38, fat: 13, tags: ["vegan", "halal"] },
        ],
      },
      {
        name: "Starch And Potatoes",
        items: [
          { id: "d4", name: "Garlic Mashed Potatoes", portion: "4 oz", calories: 150, protein: 3, carbs: 20, fat: 7, tags: ["vegetarian"] },
          { id: "d5", name: "Basmati Rice", portion: "4 oz", calories: 140, protein: 3, carbs: 30, fat: 0, tags: ["vegan", "halal"] },
        ],
      },
      {
        name: "Desserts",
        items: [
          { id: "d6", name: "Chocolate Chip Cookie", portion: "1 each", calories: 210, protein: 2, carbs: 28, fat: 10, tags: ["vegetarian"] },
          { id: "d7", name: "Fresh Fruit Cup", portion: "4 oz", calories: 60, protein: 1, carbs: 15, fat: 0, tags: ["vegan", "halal"] },
        ],
      },
    ],
  },
];
