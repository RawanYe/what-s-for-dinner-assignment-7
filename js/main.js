var recipes = [
  // 1. Classic Beef Burger
  {
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    level: "easy",
    category: "american",
    rating: 4.6,
    review: 421,
    preparationTime: 15,
    cookTime: 20,
    serving: 4,

    ingredientList: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],

    instructionList: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],

    calories: "650 kcal",
    protein: "38g",
    carbo: "42g",
    fat: "35g",
    fiber: "2g",
    sodium: "920mg",

    chefsTips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],

    imageUrl: "./images/beef-burger.jpg",
  },

  // 2. French Onion Soup
  {
    name: "French Onion Soup",
    description:
      "Classic French soup with caramelized onions and melted cheese",
    level: "intermediate",
    category: "mediterranean",
    rating: 4.7,
    review: 267,
    preparationTime: 15,
    cookTime: 60,
    serving: 4,
    longPreparationTime: true,

    ingredientList: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],

    instructionList: [
      "Caramelize the sliced onions slowly in butter until golden brown.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],

    calories: "380 kcal",
    protein: "18g",
    carbo: "36g",
    fat: "18g",
    fiber: "4g",
    sodium: "980mg",

    chefsTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for the best flavor",
      "Gruyère cheese can be substituted with Swiss cheese",
      "Watch carefully while broiling to prevent burning",
    ],

    imageUrl: "./images/french-onion-soup.png",
  },

  // 3. Teriyaki Chicken Bowl
  {
    name: "Teriyaki Chicken Bowl",
    description: "Tender chicken with teriyaki sauce served over rice",
    level: "easy",
    category: "asian",
    rating: 4.7,
    review: 367,
    preparationTime: 15,
    cookTime: 20,
    serving: 2,

    ingredientList: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, cut into florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],

    instructionList: [
      "Heat sesame oil in a pan and cook chicken until browned.",
      "Add teriyaki sauce and simmer for 5 minutes.",
      "Steam broccoli and carrots until tender.",
      "Divide cooked rice between serving bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and sliced green onions.",
    ],

    calories: "540 kcal",
    protein: "42g",
    carbo: "58g",
    fat: "14g",
    fiber: "4g",
    sodium: "1240mg",

    chefsTips: [
      "Use chicken thighs for juicier results",
      "Homemade teriyaki sauce gives better flavor",
      "Add edamame for extra protein",
      "Prepare rice and chicken ahead for easy meal prep",
    ],

    imageUrl: "./images/teriyaki-chicken-bowl.jpg",
  },

  // 4. Margherita Pizza
  {
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza with fresh mozzarella, tomato, and basil",
    level: "intermediate",
    category: "italian",
    rating: 4.9,
    review: 512,
    preparationTime: 90,
    cookTime: 12,
    serving: 2,
    longPreparationTime: true,

    ingredientList: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper",
      "Parmesan cheese",
    ],

    instructionList: [
      "Let the pizza dough rest at room temperature for 1 hour.",
      "Preheat the oven to its maximum temperature (250°C / 480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper.",
      "Roll out the pizza dough into your desired shape.",
      "Spread tomato sauce over the dough and add mozzarella. Drizzle with olive oil.",
      "Bake for 10-12 minutes. Add fresh basil and Parmesan before serving.",
    ],

    calories: "580 kcal",
    protein: "24g",
    carbo: "68g",
    fat: "22g",
    fiber: "4g",
    sodium: "920mg",

    chefsTips: [
      "Use a pizza stone for a crispy crust",
      "Don't overload the pizza with toppings",
      "Add fresh basil after baking to preserve its flavor",
      "Let the dough rest properly for better texture",
    ],

    imageUrl: "./images/margherita-pizza.png",
  },

  // 5. Greek Moussaka
  {
    name: "Greek Moussaka",
    description:
      "Traditional Greek layered casserole with eggplant and meat sauce",
    level: "intermediate",
    category: "mediterranean",
    rating: 4.8,
    review: 234,
    preparationTime: 30,
    cookTime: 60,
    serving: 4,
    longPreparationTime: true,

    ingredientList: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "500ml béchamel sauce",
      "100g Parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],

    instructionList: [
      "Salt the eggplant slices and let them rest for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil and grill or bake until tender.",
      "Cook lamb with onion and garlic. Add tomatoes, cinnamon, and oregano. Simmer for 20 minutes.",
      "Preheat the oven to 180°C.",
      "Layer eggplant slices and meat sauce in a baking dish. Top with béchamel and Parmesan.",
      "Bake for 45 minutes until golden. Let rest for 15 minutes before serving.",
    ],

    calories: "580 kcal",
    protein: "36g",
    carbo: "32g",
    fat: "32g",
    fiber: "8g",
    sodium: "820mg",

    chefsTips: [
      "Salting eggplant helps remove excess moisture",
      "Allow the moussaka to rest before slicing",
      "Ground beef can be used instead of lamb",
      "Prepare the dish ahead of time for easier serving",
    ],

    imageUrl: "./images/greek-moussaka.jpg",
  },

  // 6. Shrimp Scampi
  {
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    level: "easy",
    category: "seafood",
    rating: 4.8,
    review: 356,
    preparationTime: 10,
    cookTime: 15,
    serving: 2,

    ingredientList: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],

    instructionList: [
      "Cook linguine according to package instructions. Reserve 1 cup of pasta water.",
      "Heat olive oil and 2 tablespoons of butter. Add garlic and red pepper flakes and cook for 1 minute.",
      "Add shrimp and cook for 3-4 minutes until pink. Remove shrimp from the pan.",
      "Add white wine and simmer for 2 minutes. Stir in remaining butter and lemon juice.",
      "Return shrimp to the pan, add pasta, and toss. Add pasta water as needed.",
      "Garnish with fresh parsley and lemon zest before serving.",
    ],

    calories: "520 kcal",
    protein: "36g",
    carbo: "54g",
    fat: "18g",
    fiber: "3g",
    sodium: "620mg",

    chefsTips: [
      "Don't overcook shrimp or they will become rubbery",
      "Use a good quality white wine for better flavor",
      "Toss pasta directly in the sauce for better coating",
      "Add extra lemon juice for a fresher taste",
    ],

    imageUrl: "./images/shrimp-scampi.jpg",
  },

  // 7. Pad Thai
  {
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    level: "intermediate",
    category: "asian",
    rating: 4.8,
    review: 445,
    preparationTime: 20,
    cookTime: 15,
    serving: 2,

    ingredientList: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and fresh cilantro",
    ],

    instructionList: [
      "Soak rice noodles in warm water for 30 minutes until softened.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat a wok over high heat, scramble the eggs, and set aside.",
      "Cook shrimp, then add noodles and sauce. Toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Mix everything together.",
      "Serve topped with crushed peanuts, lime wedges, and fresh cilantro.",
    ],

    calories: "540 kcal",
    protein: "32g",
    carbo: "62g",
    fat: "16g",
    fiber: "4g",
    sodium: "1120mg",

    chefsTips: [
      "Don't oversoak the rice noodles or they may become too soft",
      "Use high heat for authentic stir-fried flavor",
      "Balance sweet, sour, and salty flavors in the sauce",
      "Prepare all ingredients before starting to cook",
    ],

    imageUrl: "./images/pad-thai.jpg",
  },

  // Chicken Stir-Fry
  {
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    level: "easy",
    category: "asian",
    rating: 4.5,
    review: 324,
    preparationTime: 15,
    cookTime: 15,
    serving: 4,

    ingredientList: [
      "500g chicken breast, sliced",
      "2 bell peppers",
      "Broccoli",
      "2 carrots",
      "Soy sauce",
      "Oyster sauce",
      "Sesame oil",
      "2 cloves garlic",
      "Fresh ginger",
    ],

    instructionList: [
      "Mix soy sauce, oyster sauce, and sesame oil in a small bowl.",
      "Heat a wok over high heat and cook chicken until browned. Remove and set aside.",
      "Stir-fry garlic and ginger until fragrant.",
      "Add carrots and broccoli. Cook for 3-4 minutes.",
      "Return chicken to the wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve hot with rice or noodles.",
    ],

    calories: "320 kcal",
    protein: "34g",
    carbo: "18g",
    fat: "12g",
    fiber: "5g",
    sodium: "840mg",

    chefsTips: [
      "Cut all ingredients before you start cooking",
      "Use high heat for the best stir-fry results",
      "Don't overcrowd the wok to keep vegetables crisp",
      "Add cashews or peanuts for extra crunch",
    ],

    imageUrl: "./images/chicken-stir-fry.jpg",
  },

  // 9. Honey Garlic Salmon
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory honey garlic glaze",
    level: "easy",
    category: "seafood",
    rating: 4.9,
    review: 187,
    preparationTime: 10,
    cookTime: 15,
    serving: 2,

    ingredientList: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger",
      "Sesame seeds",
      "Green onions, sliced",
    ],

    instructionList: [
      "Pat salmon fillets dry and season with salt and pepper.",
      "Mix honey, soy sauce, garlic, and ginger in a small bowl.",
      "Heat olive oil in a skillet over medium-high heat.",
      "Place salmon skin-side up and cook for 4-5 minutes.",
      "Flip salmon and pour the honey garlic sauce over it. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],

    calories: "380 kcal",
    protein: "35g",
    carbo: "28g",
    fat: "14g",
    fiber: "0g",
    sodium: "720mg",

    chefsTips: [
      "Don't overcook salmon to keep it moist and tender",
      "Wild-caught salmon offers great flavor",
      "Allow the sauce to caramelize slightly for a richer glaze",
      "Serve with broccoli or asparagus for a balanced meal",
    ],

    imageUrl: "./images/honey-garlic-salmon.jpeg",
  },

  // 10. Thai Green Curry
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    level: "intermediate",
    category: "asian",
    rating: 4.7,
    review: 312,
    preparationTime: 15,
    cookTime: 25,
    serving: 4,

    ingredientList: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast",
      "1 red bell pepper",
      "100g green beans",
      "1 eggplant",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil",
    ],

    instructionList: [
      "Heat green curry paste in a pan until fragrant.",
      "Add half of the coconut milk and stir until combined.",
      "Add chicken and cook for 5 minutes.",
      "Pour in the remaining coconut milk. Add vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until chicken and vegetables are cooked.",
      "Stir in fresh Thai basil and serve with jasmine rice.",
    ],

    calories: "420 kcal",
    protein: "26g",
    carbo: "22g",
    fat: "26g",
    fiber: "5g",
    sodium: "890mg",

    chefsTips: [
      "Adjust the curry paste amount to control the spice level",
      "Add vegetables in stages according to their cooking time",
      "Use fresh Thai basil for authentic flavor",
      "Full-fat coconut milk gives a richer and creamier curry",
    ],

    imageUrl: "./images/thai-green-curry.jpg",
  },

  // Caprese Sandwich

  {
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    level: "easy",
    category: "italian",
    rating: 4.5,
    review: 189,
    preparationTime: 10,
    cookTime: 5,
    serving: 2,

    ingredientList: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],

    instructionList: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],

    calories: "480 kcal",
    protein: "22g",
    carbo: "48g",
    fat: "22g",
    fiber: "3g",
    sodium: "680mg",

    chefsTips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],

    imageUrl: "./images/caprese-sandwich.jpeg",
  },

  // Mediterranean Quinoa Bowl

  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    level: "easy",
    category: "mediterranean",
    rating: 4.5,
    review: 156,
    preparationTime: 20,
    cookTime: 35,
    serving: 2,
    longPreparationTime: true,

    ingredientList: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],

    instructionList: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],

    calories: "480 kcal",
    protein: "18g",
    carbo: "58g",
    fat: "20g",
    fiber: "10g",
    sodium: "540mg",

    chefsTips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],

    imageUrl: "./images/mediterranean-quinoa-bowl.jpeg",
  },

  // Beef Tacos

  {
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    level: "easy",
    category: "american",
    rating: 4.6,
    review: 278,
    preparationTime: 15,
    cookTime: 20,
    serving: 4,

    ingredientList: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],

    instructionList: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],

    calories: "420 kcal",
    protein: "26g",
    carbo: "32g",
    fat: "20g",
    fiber: "4g",
    sodium: "780mg",

    chefsTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],

    imageUrl: "./images/beef-tacos.jpeg",
  },

  // Chicken Tikka Masala

  {
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    level: "intermediate",
    category: "asian",
    rating: 4.7,
    review: 389,
    preparationTime: 20,
    cookTime: 30,
    serving: 4,
    longPreparationTime: true,

    ingredientList: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],

    instructionList: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],

    calories: "450 kcal",
    protein: "38g",
    carbo: "24g",
    fat: "22g",
    fiber: "4g",
    sodium: "760mg",

    chefsTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],

    imageUrl: "./images/chicken-tikka-masala.jpg",
  },

  // Lasagna Bolognese

  {
    name: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    level: "intermediate",
    category: "italian",
    rating: 4.9,
    review: 478,
    preparationTime: 30,
    cookTime: 90,
    serving: 4,
    longPreparationTime: true,

    ingredientList: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],

    instructionList: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],

    calories: "680 kcal",
    protein: "42g",
    carbo: "58g",
    fat: "28g",
    fiber: "6g",
    sodium: "920mg",

    chefsTips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],

    imageUrl: "./images/lasagna-bolognese.jpeg",
  },

  // Creamy Spaghetti Carbonara

  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    level: "easy",
    category: "italian",
    rating: 4.8,
    review: 234,
    preparationTime: 15,
    cookTime: 20,
    serving: 4,

    ingredientList: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],

    instructionList: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],

    calories: "520 kcal",
    protein: "28g",
    carbo: "62g",
    fat: "18g",
    fiber: "3g",
    sodium: "680mg",

    chefsTips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],

    imageUrl: "./images/creamy-spaghetti-carbonara.jpeg",
  },
  // 8. Vegetable Curry

  {
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    level: "easy",
    category: "asian",
    rating: 4.6,
    review: 289,
    preparationTime: 20,
    cookTime: 30,
    serving: 4,
    longPreparationTime: true,

    ingredientList: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],

    instructionList: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],

    calories: "380 kcal",
    protein: "14g",
    carbo: "48g",
    fat: "16g",
    fiber: "12g",
    sodium: "480mg",

    chefsTips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],

    imageUrl: "./images/vegetable-curry.jpg",
  },
];

var tryBtn = document.getElementById("tryBtn");
var index = Math.floor(Math.random() * recipes.length);

var recipeName = document.getElementById("recipeName");
var recipeDescription = document.getElementById("recipeDescription");

var recipeLevel = document.getElementById("recipeLevel");
var recipeCategory = document.getElementById("recipeCategory");

var recipeRating = document.getElementById("ratingNumber");
var recipeReview = document.getElementById("reviews");

var prepareTime = document.getElementById("prepareTimeValue");
var cookTime = document.getElementById("cookTimeValue");
var servings = document.getElementById("servingsValue");

var recipeImage = document.getElementById("recipeImage");

var ingredientList = document.getElementById("ingredientList");
var instructionList = document.getElementById("instructionList");
var chefsTipsList = document.getElementById("chefsTipsList");

var caloriesValue = document.getElementById("caloriesValue");
var proteinValue = document.getElementById("proteinValue");
var carboValue = document.getElementById("carboValue");
var fatValue = document.getElementById("fatValue");
var fiberValue = document.getElementById("fiberValue");
var sodiumValue = document.getElementById("sodiumValue");

function recipeDisplay() {
  if (recipes[index].longPreparationTime == true) {
    document.getElementById("warningMessage").style.display = "block";
  } else {
    document.getElementById("warningMessage").style.display = "none";
  }

  recipeName.innerHTML = recipes[index].name;
  recipeDescription.innerHTML = recipes[index].description;

  recipeLevel.innerHTML = recipes[index].level;
  recipeCategory.innerHTML = recipes[index].category;

  recipeRating.innerHTML = recipes[index].rating;
  recipeReview.innerHTML = `(${recipes[index].review}) reviews`;

  prepareTime.innerHTML = `${recipes[index].preparationTime} min`;
  cookTime.innerHTML = `${recipes[index].cookTime} min`;
  servings.innerHTML = `${recipes[index].serving} People`;

  recipeImage.innerHTML = `
								<img
                  src="${recipes[index].imageUrl}"
                  class="object-fit-cover w-100 h-100"
                  alt="${recipes[index].name}" 
								/>`;

  // ================= nav and tabs ==============================

  // ingredients tab
  ingredientList.innerHTML = "";
  for (var j = 0; j < recipes[index].ingredientList.length; j++) {
    ingredientList.innerHTML += `
			<li class="d-flex align-items-center gap-2">
          <span
            class="d-flex align-items-center justify-content-center text-white fw-bold rounded-circle"
          >${j + 1}</span>
          <p class="m-0">${recipes[index].ingredientList[j]}</p>
    	</li>
		`;
  }

  // instruction tab
  instructionList.innerHTML = "";
  for (var j = 0; j < recipes[index].instructionList.length; j++) {
    instructionList.innerHTML += `
		<li class="d-flex align-items-center gap-2">
                          <span
                            class="d-flex align-items-center justify-content-center text-white fw-bold rounded-4"
                            >${j + 1}</span
                          >
                          <p class="m-0">
                            ${recipes[index].instructionList[j]}
                          </p>
                        </li>
		`;
  }

  // nutrition tab

  caloriesValue.innerHTML = recipes[index].calories;
  proteinValue.innerHTML = recipes[index].protein;
  carboValue.innerHTML = recipes[index].carbo;
  fatValue.innerHTML = recipes[index].fat;
  fiberValue.innerHTML = recipes[index].fiber;
  sodiumValue.innerHTML = recipes[index].sodium;

  // chefs tips tab
  chefsTipsList.innerHTML = "";
  for (var j = 0; j < recipes[index].chefsTips.length; j++) {
    chefsTipsList.innerHTML += `
	 <div class="item d-flex align-items-center gap-3">
                            <i class="fa-solid fa-circle-check"></i>
                            <p class="m-0">
                              ${recipes[index].chefsTips[j]}
                            </p>
                          </div
	`;
  }
}

// function

recipeDisplay();

tryBtn.onclick = function () {

  index = Math.floor(Math.random() * recipes.length);

  recipeDisplay();
  console.log(index);
};
