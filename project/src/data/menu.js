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
          imageUrl:
            "https://images.unsplash.com/photo-1549203438-a7696aed4dac?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Onion soup with toasted bread and melted cheese.",
        },
        {
          id: "escargots_de_bourgogne",
          name: "Escargots de Bourgogne",
          price: 12,
          currency: "EUR",
          tags: [],
          imageUrl:
            "https://img.cuisineaz.com/660x495/2015/03/11/i76167-escargots-de-bourgogne-au-thym.webp",
          description: "Snails baked in garlic and herb butter.",
        },
        {
          id: "salade_lyonnaise",
          name: "Salade Lyonnaise",
          price: 10,
          currency: "EUR",
          tags: [],
          imageUrl:
            "https://fgdjrynm.filerobot.com/recipes/736d80b8749df676386af56fd3ee975e0aaff89c3d0006c8bd4d41cf192e9a46.jpg?vh=450277&h=800&w=800&q=60",
          description: "Warm frisée with bacon, croutons, and poached egg.",
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
          imageUrl:
            "https://img-3.journaldesfemmes.fr/oVCXZsSN4hDwBWH_Gi-aJYE06tE=/800x600/d5bc2b8de40e429ba48a3393206fb4fd/ccmcms-jdf/39884634.jpg",
          description: "Beef stew in red wine with mushrooms and carrots.",
        },
        {
          id: "coq_au_vin",
          name: "Coq au Vin",
          price: 17,
          currency: "EUR",
          tags: [],
          imageUrl:
            "https://static01.nyt.com/images/2023/08/24/multimedia/MC-Coq-Au-Van-ctpm/MC-Coq-Au-Van-ctpm-videoSixteenByNineJumbo1600.jpg",
          description: "Chicken braised in wine with bacon and onions.",
        },
        {
          id: "ratatouille",
          name: "Ratatouille",
          price: 15,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          imageUrl:
            "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
          description: "Stewed vegetables in tomato and olive oil.",
        },
        {
          id: "ratatouille3",
          name: "Ratatouille",
          price: 15,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          imageUrl:
            "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
          description: "Stewed vegetables in tomato and olive oil.",
        },
        {
          id: "ratatouille2",
          name: "Ratatouille",
          price: 15,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          imageUrl:
            "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
          description: "Stewed vegetables in tomato and olive oil.",
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
          imageUrl:
            "https://img.cuisineaz.com/660x660/2014/08/07/i31454-photo-de-creme-brulee.jpeg",
          description: "Vanilla custard with caramelized sugar top.",
        },
        {
          id: "tarte_tatin",
          name: "Tarte Tatin",
          price: 8,
          currency: "EUR",
          tags: ["Vegetarian"],
          imageUrl:
            "https://assets.afcdn.com/recipe/20180503/79001_w1024h1024c1cx2880cy1920.jpg",
          description: "Caramelized upside-down apple tart.",
        },
        {
          id: "mousse_au_chocolat",
          name: "Mousse au Chocolat",
          price: 7,
          currency: "EUR",
          tags: ["Vegetarian", "Gluten Free"],
          imageUrl:
            "https://kissmychef.com/wp-content/uploads/2021/04/mousse.png",
          description: "Light and airy dark chocolate mousse.",
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
          imageUrl:
            "https://needfrench.com/wp-content/uploads/2023/08/Cafe-Noir-.jpg",
          description: "Freshly brewed espresso.",
        },
        {
          id: "vin_rouge",
          name: "Vin Rouge",
          price: 6,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          imageUrl:
            "https://www.gerard-bertrand.com/cdn/shop/products/banyuls-vintage-rouge_fb23eb05-021d-4f20-99a2-ed8f5ded730d.jpg?v=1590151282&width=600",
          description: "Glass of French red wine.",
        },
        {
          id: "vin_blanc",
          name: "Vin Blanc",
          price: 6,
          currency: "EUR",
          tags: ["Vegetarian", "Vegan", "Gluten Free"],
          imageUrl:
            "https://www.gerard-bertrand.com/cdn/shop/products/chateau-de-villemajou-grand-vin-blanc_17ce63ba-d5b6-4956-bc1c-5255298df152.jpg?v=1590151442&width=600",
          description: "Glass of French white wine.",
        },
      ],
    },
  ],
};

export default menuData;
