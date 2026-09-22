export type Burger = {
  id: string
  name: string
  description: string
  price: number
  rating: number
  image: string
}

export const burgers: Burger[] = [
  {
    id: "crispy-chicken",
    name: "Crispy Chicken",
    description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    price: 99.15,
    rating: 5,
    image: "/burgers/crispy-chicken.png",
  },
  {
    id: "ultimate-bacon",
    name: "Ultimate Bacon",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    price: 99.32,
    rating: 4.5,
    image: "/burgers/ultimate-bacon.png",
  },
  {
    id: "black-sheep",
    name: "Black Sheep",
    description: "American cheese, tomato relish, avocado, lettuce, red onion",
    price: 69.15,
    rating: 4,
    image: "/burgers/black-sheep.png",
  },
  {
    id: "vegan-burger",
    name: "Vegan Burger",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    price: 99.25,
    rating: 3.5,
    image: "/burgers/vegan-burger.png",
  },
]
