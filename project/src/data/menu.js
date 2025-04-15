const menuData = {
  menuTitle: "Menu",
  filters: ["Vegetarian", "Vegan", "Gluten Free"],
  categories: [
    {
      id: "starters",
      name: "Starters",
      items: [
        {
          id: "soupe_a_loignon",
          name: "Soupe à l'Oignon",
          price: 8,
          currency: "EUR",
          tags: ["Vegetarian"],
          image:
            "https://images.unsplash.com/photo-1549203438-a7696aed4dac?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Onion soup with toasted bread and melted cheese.",
          type: "starter",
          mainIngredients: [
            "Onions",
            "Vegetable broth",
            "White wine",
            "Bay leaf",
            "Thyme",
          ],
          extras: ["Gruyère cheese", "Toasted bread"],
        },
        {
          id: "escargots_de_bourgogne",
          name: "Escargots de Bourgogne",
          price: 12,
          currency: "EUR",
          tags: [],
          image:
            "https://img.cuisineaz.com/660x495/2015/03/11/i76167-escargots-de-bourgogne-au-thym.webp",
          description: "Snails baked in garlic and herb butter.",
          type: "starter",
          mainIngredients: ["Snails", "Garlic", "Parsley", "Thyme", "Shallots"],
          extras: ["Butter", "White wine"],
        },
        {
          id: "salade_lyonnaise",
          name: "Salade Lyonnaise",
          price: 10,
          currency: "EUR",
          tags: [],
          image:
            "https://fgdjrynm.filerobot.com/recipes/736d80b8749df676386af56fd3ee975e0aaff89c3d0006c8bd4d41cf192e9a46.jpg?vh=450277&h=800&w=800&q=60",
          description: "Warm frisée with bacon, croutons, and poached egg.",
          type: "starter",
          mainIngredients: [
            "Frisée lettuce",
            "Dijon vinaigrette",
            "Red wine vinegar",
          ],
          extras: ["Bacon", "Poached eggs", "Croutons"],
        },
      ],
    },
    {
      id: "main_courses",
      name: "Main Courses",
      items: [
        {
          id: "boeuf_bourguignon",
          name: "Bœuf Bourguignon",
          price: 18,
          currency: "EUR",
          tags: [],
          image:
            "https://img-3.journaldesfemmes.fr/oVCXZsSN4hDwBWH_Gi-aJYE06tE=/800x600/d5bc2b8de40e429ba48a3393206fb4fd/ccmcms-jdf/39884634.jpg",
          description: "Beef stew in red wine with mushrooms and carrots.",
          type: "main",
          mainIngredients: [
            "Beef chuck",
            "Red wine",
            "Carrots",
            "Onions",
            "Garlic",
            "Tomato paste",
          ],
          extras: ["Bacon", "Mushrooms"],
        },
        {
          id: "coq_au_vin",
          name: "Coq au Vin",
          price: 17,
          currency: "EUR",
          tags: [],
          image:
            "https://static01.nyt.com/images/2023/08/24/multimedia/MC-Coq-Au-Van-ctpm/MC-Coq-Au-Van-ctpm-videoSixteenByNineJumbo1600.jpg",
          description: "Chicken braised in wine with bacon and onions.",
          type: "main",
          mainIngredients: [
            "Chicken",
            "Red wine",
            "Carrots",
            "Onions",
            "Garlic",
            "Thyme",
          ],
          extras: ["Bacon", "Mushrooms"],
        },
        {
          id: "salmon_en_papillote",
          name: "Salmon en Papillote",
          price: 20,
          currency: "EUR",
          tags: ["Gluten Free"],
          image:
            "https://www.realsimple.com/thmb/KQ7Jzh0knAWKNQvYhWsNiJ5jn5c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ginger-and-honey-soy-salmon-en-papillote-0523FOO-cedd482ae71443e7a2d9153431659db8.jpg",
          description: "Baked salmon with vegetables in parchment paper.",
          type: "main",
          mainIngredients: [
            "Salmon fillet",
            "Zucchini",
            "Bell peppers",
            "Carrots",
            "Olive oil",
            "Lemon",
          ],
          extras: [],
        },
        {
          id: "ratatouille",
          name: "Ratatouille",
          price: 15,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          image:
            "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
          description: "Stewed vegetables in tomato and olive oil.",

          type: "main",
          mainIngredients: [
            "Eggplant",
            "Zucchini",
            "Bell peppers",
            "Tomatoes",
            "Onions",
            "Garlic",
            "Olive oil",
            "Herbs de Provence",
          ],
          extras: [],
        },
      ],
    },

    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: "creme_brulee",
          name: "Crème Brûlée",
          price: 7,
          currency: "EUR",
          tags: ["Vegetarian", "Gluten Free"],
          image:
            "https://img.cuisineaz.com/660x660/2014/08/07/i31454-photo-de-creme-brulee.jpeg",
          description: "Vanilla custard with caramelized sugar top.",

          type: "dessert",
          mainIngredients: [
            "Heavy cream",
            "Vanilla bean",
            "Sugar",
            "Egg yolks",
          ],
          extras: [],
        },
        {
          id: "tarte_tatin",
          name: "Tarte Tatin",
          price: 8,
          currency: "EUR",
          tags: ["Vegetarian"],
          image:
            "https://assets.afcdn.com/recipe/20180503/79001_w1024h1024c1cx2880cy1920.jpg",
          description: "Caramelized upside-down apple tart.",

          type: "dessert",
          mainIngredients: [
            "Apples",
            "Sugar",
            "Cinnamon",
            "Butter",
            "Flour",
            "Eggs",
          ],
          extras: [],
        },
        {
          id: "mousse_au_chocolat",
          name: "Mousse au Chocolat",
          price: 7,
          currency: "EUR",
          tags: ["Vegetarian", "Gluten Free"],
          image: "https://kissmychef.com/wp-content/uploads/2021/04/mousse.png",
          description: "Light and airy dark chocolate mousse.",

          type: "dessert",
          mainIngredients: [
            "Dark chocolate",
            "Sugar",
            "Vanilla extract",
            "Egg whites",
            "Heavy cream",
          ],
          extras: [],
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      items: [
        {
          id: "cafe",
          name: "Café",
          price: 3,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          image:
            "https://needfrench.com/wp-content/uploads/2023/08/Cafe-Noir-.jpg",
          description: "Freshly brewed espresso.",

          type: "drink",
          mainIngredients: ["Coffee beans"],
          extras: [],
        },
        {
          id: "vin_rouge",
          name: "Vin Rouge",
          price: 6,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          image:
            "https://www.gerard-bertrand.com/cdn/shop/products/banyuls-vintage-rouge_fb23eb05-021d-4f20-99a2-ed8f5ded730d.jpg?v=1590151282&width=600",
          description: "Glass of French red wine.",

          type: "drink",
          mainIngredients: ["Red grapes"],
          extras: [""],
        },
        {
          id: "vin_blanc",
          name: "Vin Blanc",
          price: 6,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          image:
            "https://www.gerard-bertrand.com/cdn/shop/products/chateau-de-villemajou-grand-vin-blanc_17ce63ba-d5b6-4956-bc1c-5255298df152.jpg?v=1590151442&width=600",
          description: "Glass of French white wine.",
          type: "drink",
          mainIngredients: ["White grapes"],
          extras: [],
        },
      ],
    },
  ],
};

export default menuData;
