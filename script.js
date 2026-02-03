// Enhanced Menu Data with Real Images and Engaging Content
const menu = [
  {
    id: 1,
    title: "Buttermilk Flapjack Stack",
    category: "Breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Golden, fluffy buttermilk pancakes stacked high, drizzled with pure Vermont maple syrup and topped with fresh berries. A classic morning indulgence.`,
  },
  {
    id: 2,
    title: "The Ultimate Burger",
    category: "Lunch",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Juicy premium beef patty on a brioche bun, loaded with melted cheddar, crispy bacon, caramelized onions, and our secret house sauce. Served with fries.`,
  },
  {
    id: 3,
    title: "Strawberry Bliss Shake",
    category: "Shakes",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `A creamy dream of real strawberries blended with vanilla bean ice cream, topped with whipped cream and a cherry. Pure nostalgia in a glass.`,
  },
  {
    id: 4,
    title: "Avocado Toast Royale",
    category: "Breakfast",
    price: 14.99,
    img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Artisan sourdough toasted to perfection, smothered in smashed avocado, poached eggs, radish slices, and a sprinkle of chili flakes. Healthy meets delicious.`,
  },
  {
    id: 5,
    title: "Crispy Chicken Sandwich",
    category: "Lunch",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Southern-style fried chicken breast with crunchy slaw and spicy mayo on a toasted bun. The perfect crunch in every bite.`,
  },
  {
    id: 6,
    title: "Oreo Obsession",
    category: "Shakes",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Rich chocolate and vanilla ice cream blended with crushed Oreos, creating a thick, cookies-and-cream masterpiece.`,
  },
  {
    id: 7,
    title: "Classic Eggs Benedict",
    category: "Breakfast",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Toasted English muffin halves topped with Canadian bacon, poached eggs, and glorious hollandaise sauce. A weekend brunch staple.`,
  },
  {
    id: 8,
    title: "Truffle Mushroom Pasta",
    category: "Lunch",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Fresh fettuccine tossed in a rich truffle cream sauce with sautéed wild mushrooms and parmesan. Earthy, creamy, and decadent.`,
  },
  {
    id: 9,
    title: "Caramel Macchiato Shake",
    category: "Shakes",
    price: 9.50,
    img: "https://images.unsplash.com/photo-1596450502967-1234b6555127?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Coffee lovers rejoice! Espresso blended with caramel sauce and vanilla ice cream for a caffeinated frozen treat.`,
  },
  {
    id: 10,
    title: "Ribeye Steak Dinner",
    category: "Dinner",
    price: 32.99,
    img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Premium 12oz ribeye steak grilled to your liking, served with roasted garlic mashed potatoes and seasonal vegetables.`,
  },
  {
    id: 11,
    title: "Grilled Salmon Fillet",
    category: "Dinner",
    price: 26.99,
    img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    desc: `Fresh Atlantic salmon fillet grilled with lemon and herbs, served on a bed of quinoa and steamed asparagus.`,
  },
];

// Select DOM elements
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const searchInput = document.getElementById("search-input");

// Initialize
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// Search functionality
if(searchInput) {
    searchInput.addEventListener("keyup", (e) => {
        const searchString = e.target.value.toLowerCase();
        
        // Filter menu based on title or description
        const filteredMenu = menu.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchString) ||
                item.desc.toLowerCase().includes(searchString) ||
                item.category.toLowerCase().includes(searchString)
            );
        });
        
        // Reset active button to 'All' when searching
        if(searchString.length > 0) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        }
        
        displayMenuItems(filteredMenu);
    });
}

/**
 * Display menu items in the grid
 * @param {Array} menuItems - Array of menu objects
 */
function displayMenuItems(menuItems) {
  if (menuItems.length === 0) {
      sectionCenter.innerHTML = `
        <div class="col-12 text-center mt-5">
            <div class="alert alert-warning d-inline-block px-5">
                <i class="fas fa-exclamation-circle me-2"></i>
                No delicious items matched your search. Try something else!
            </div>
        </div>`;
      return;
  }

  let displayMenu = menuItems.map(function (item) {
    return `<div class="col">
                <article class="menu-item card h-100 border-0 shadow-sm">
                    <div class="img-container">
                        <img src="${item.img}" alt="${item.title}" class="photo card-img-top" loading="lazy" />
                    </div>
                    <div class="card-body item-info d-flex flex-column">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text card-text flex-grow-1">
                            ${item.desc}
                        </p>
                        <div class="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                            <span class="badge bg-light text-dark border">${item.category}</span>
                            <button class="btn btn-sm btn-outline-danger rounded-pill">Add to Cart</button>
                        </div>
                    </div>
                </article>
            </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

/**
 * Create and display category filter buttons
 */
function displayMenuButtons() {
  // Get unique categories
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  // Generate button HTML
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  
  // Add event listeners to buttons
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  // Set 'All' as active by default
  const allBtn = btnContainer.querySelector('[data-id="All"]');
  if(allBtn) allBtn.classList.add('active');

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Clear search input when filtering by category
      if(searchInput) searchInput.value = '';

      // Manage active class
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      const category = e.currentTarget.dataset.id;
      
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
