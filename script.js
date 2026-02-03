// Menu Data with reliable placeholder images
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://placehold.co/600x400/orange/white?text=Buttermilk+Pancakes",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://placehold.co/600x400/teal/white?text=Diner+Double",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://placehold.co/600x400/pink/white?text=Godzilla+Milkshake",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://placehold.co/600x400/gold/white?text=Country+Delight",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://placehold.co/600x400/crimson/white?text=Egg+Attack",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://placehold.co/600x400/black/white?text=Oreo+Dream",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://placehold.co/600x400/brown/white?text=Bacon+Overflow",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://placehold.co/600x400/blue/white?text=American+Classic",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://placehold.co/600x400/purple/white?text=Quarantine+Buddy",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://placehold.co/600x400/maroon/white?text=Bison+Steak",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
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
                item.desc.toLowerCase().includes(searchString)
            );
        });
        
        // Reset active button to 'All' when searching
        if(searchString.length > 0) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Optionally set 'all' as active or leave none active
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
      sectionCenter.innerHTML = `<div class="col-12 text-center mt-5"><h4>No items matched your search</h4></div>`;
      return;
  }

  let displayMenu = menuItems.map(function (item) {
    return `<div class="col">
                <article class="menu-item card h-100 border-0 shadow-sm">
                    <img src="${item.img}" alt="${item.title}" class="photo card-img-top" />
                    <div class="card-body item-info">
                        <header>
                            <h4>${capitalize(item.title)}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text card-text">
                            ${item.desc}
                        </p>
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
    ["all"]
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

  // Set 'all' as active by default
  const allBtn = btnContainer.querySelector('[data-id="all"]');
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
      
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// Helper to capitalize first letter
function capitalize(str) {
    return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}
