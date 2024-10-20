function searchProduct() {
    const product = document.getElementById('productSearch').value;
    if (product) {
        alert(`Searching for product: ${product}`);
    } else {
        alert('Please enter a product to search.');
    }
}

function filterByState() {
    const state = document.getElementById('stateFilter').value;
    if (state) {
        alert(`Filtering products by state: ${state}`);
    }
}

// Sample product data
const products = [
    {
        name: "🛒Handmade Basket",
        image: "basket.png",
        price: "₹50",
        description: "🌍Mumbai"
    },
    {
        name: "🛒Wood Lac Turnery",
        image: "Wood Lac Turnery.png",
        price: "₹300",
        description: "🌍Gujrat",
    },
    {
        name: "🛒Wall Painting",
        image: "wall painting.png",
        price: "₹500",
        description: "🌍Hajaribag,Jharkhand"
    },
    {
        name: "🛒Bidri Craft",
        image: "bidri craft AP.png",
        price: "₹1999",
        description: "🌍Aandhra Pradesh"
    },
    {
        name: "🛒Cane Haversacks",
        image: "cane haversacks ArP.png",
        price: "₹500/per item",
        description: "🌍Arunachal Pradesh"
    },
    {
        name: "🛒Terracotta Ware",
        image: "terracotta ware dl.png",
        price: "₹1500",
        description: "🌍Delhi"
    },
    {
        name: "🛒Coconet Based Crafts goa",
        image: "Coconet Based Crafts goa.png",
        price: "₹403",
        description: "🌍Punji,Goa"
    },
    {
        name: "🛒Sarkanda Craft",
        image: "Sarkanda Craft hariyana.png",
        price: "₹1550",
        description: "🌍hariyana"
    },
    {
        name: "🛒Khabdan-Pile Carpets",
        image: "Khabdan-Pile Carpets jammu.png",
        price: "₹ 300",
        description: "🌍Jammu & Kashmir"
    },
    {
        name: "🛒Ramacham Root",
        image: "Ramacham Root.png",
        price: "₹250",
        description: "🌍Kerla"
    },
    {
        name: "🛒Leather Toys",
        image: "Leather Toys mp.png",
        price: "₹ 500",
        description: "🌍Bhopal,Madhya Pradesh"
    },
    {
        name: "🛒Bell Metalware",
        image: "Bell Metalware Odisa.png",
        price: "₹450",
        description: "🌍Odisa"
    },
    {
        name: "🛒Wood Inlay",
        image: "Wood Inlay Punjab.png",
        price: "₹3500",
        description: "🌍Punjab"
        
    },
    {
        name: "🛒Musical Instruments",
        image: "Musical Instruments Rajsthan.png",
        price: "₹249",
        description: "🌍Rajsthan"
    },
    {
        name: "🛒Bamboo Fluite",
        image: "Bamboo Fluite up.png",
        price: "₹99",
        description: "🌍Uttar Pradesh"
    }   
];

// Function to load products dynamically
function loadProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
});

// Load products when the page loads
window.onload = loadProducts;

// Sticky Header on scroll
const header = document.getElementById('header');
const stickyOffset = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > stickyOffset) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
function validateMessageForm() {
    const name = document.getElementById('messageName').value;
    const message = document.getElementById('messageContent').value;

    if (!name.trim()) {
        alert('Please enter your name.');
        return false;
    }

    if (!message.trim()) {
        alert('Please enter your message.');
        return false;
    }

    alert('Message sent successfully!');
    return true;
}
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name.trim()) {
        alert('Please enter your name.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!message.trim()) {
        alert('Please enter your message.');
        return false;
    }

    alert('Thank you for contacting us!');
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Sign-In form submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission until validation

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    // If all validations pass, show success popup
    alert('You are successfully logged in!');
    return true; // Proceed with form submission
});
// Message form validation
function validateMessageForm() {
    const name = document.getElementById('messageName').value;
    const message = document.getElementById('messageContent').value;

    if (!name.trim()) {
        alert('Please enter your name.');
        return false;
    }

    if (!message.trim()) {
        alert('Please enter your message.');
        return false;
    }

    // Success message popup
    alert('Message sent successfully!');
    return true;
}
// Contact form validation
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name.trim()) {
        alert('Please enter your name.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!message.trim()) {
        alert('Please enter your message.');
        return false;
    }

    // Success message popup
    alert('Thank you for contacting us!');
    return true;
}
