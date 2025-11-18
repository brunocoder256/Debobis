const products = [
  {
    id: 1,
    name: "High-Performance Laptop",
    price: "UGX 2,500,000",
    description: "Powerful laptop for work and gaming, with latest specs. This laptop features a sleek design and high-performance components suitable for demanding tasks.",
    image: "laptop 1.jpg",
    images: ["laptop 1.jpg", "laptop 2.jpg", "laptop 3.jpg"],
    highlights: ["New Condition", "16GB RAM", "Intel i7 Processor"],
    specs: {
      model: "HP Pavilion",
      RAM: "16GB DDR4",
      processor: "Intel Core i7-1165G7",
      storage: "512GB SSD",
      battery: "6 hours",
      screen: "15.6\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6, Bluetooth 5.0"
    },
    seller: "Debobi's Electronics",
    ratings: 4.5,
    related: [11, 12, 13, 14]
  },
  {
    id: 2,
    name: "Latest Smartphone",
    price: "UGX 1,200,000",
    description: "Feature-rich smartphone with advanced camera and battery. Capture stunning photos and enjoy long-lasting performance.",
    image: "phone 1.jpg",
    images: ["phone 1.jpg", "phone 2.jpg"],
    highlights: ["New Condition", "8GB RAM", "Snapdragon 888"],
    specs: {
      model: "Samsung Galaxy S21",
      RAM: "8GB",
      processor: "Snapdragon 888",
      storage: "128GB",
      battery: "4000mAh",
      screen: "6.2\" AMOLED",
      camera: "64MP Triple",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.7,
    related: [28, 29, 30, 31]
  },
  {
    id: 3,
    name: "Desktop System Unit",
    price: "UGX 3,000,000",
    description: "Custom-built desktop PC for high-performance computing. Ideal for gaming and professional work.",
    image: "system unit 1.jpg",
    images: ["system unit 1.jpg", "system unit store.jpg"],
    highlights: ["New Condition", "32GB RAM", "AMD Ryzen 7"],
    specs: {
      model: "Custom Build",
      RAM: "32GB DDR4",
      processor: "AMD Ryzen 7 3700X",
      storage: "1TB SSD",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "Windows 10",
      connectivity: "Ethernet, Wi-Fi"
    },
    seller: "Debobi's Electronics",
    ratings: 4.6,
    related: [9, 10]
  },
  {
    id: 4,
    name: "SSD Storage Drive",
    price: "UGX 300,000",
    description: "Fast and reliable SSD for quick data access and storage. Upgrade your system with lightning-fast speeds.",
    image: "SSD Drive.jpg",
    images: ["SSD Drive.jpg"],
    highlights: ["New Condition", "500GB", "SATA III"],
    specs: {
      model: "Samsung 860 EVO",
      RAM: "N/A",
      processor: "N/A",
      storage: "500GB SSD",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "N/A",
      connectivity: "SATA III"
    },
    seller: "Debobi's Electronics",
    ratings: 4.8,
    related: [5, 7]
  },
  {
    id: 5,
    name: "Phone Chargers & USB Cables",
    price: "UGX 50,000",
    description: "High-quality chargers and cables for all your devices. Ensure reliable charging and data transfer.",
    image: "Phone Chargers and USB cables.jpg",
    images: ["Phone Chargers and USB cables.jpg"],
    highlights: ["New Condition", "USB-C", "Fast Charging"],
    specs: {
      model: "Generic",
      RAM: "N/A",
      processor: "N/A",
      storage: "N/A",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "N/A",
      connectivity: "USB-C, USB-A"
    },
    seller: "Debobi's Electronics",
    ratings: 4.4,
    related: [4, 7]
  },
  {
    id: 6,
    name: "Samsung Flip Phone",
    price: "UGX 800,000",
    description: "Stylish flip phone with modern features and design. Experience the classic flip with contemporary tech.",
    image: "SumSung Flip.jpg",
    images: ["SumSung Flip.jpg"],
    highlights: ["New Condition", "4GB RAM", "Exynos 9820"],
    specs: {
      model: "Samsung Galaxy Z Flip",
      RAM: "8GB",
      processor: "Snapdragon 855+",
      storage: "256GB",
      battery: "3300mAh",
      screen: "6.7\" Foldable",
      camera: "12MP Dual",
      OS: "Android 10",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.5,
    related: [2, 28, 29]
  },
  {
    id: 7,
    name: "USB Port Hub",
    price: "UGX 100,000",
    description: "Multi-port USB hub for expanding connectivity options. Connect multiple devices effortlessly.",
    image: "USB port.jpg",
    images: ["USB port.jpg"],
    highlights: ["New Condition", "4 Ports", "USB 3.0"],
    specs: {
      model: "Anker USB Hub",
      RAM: "N/A",
      processor: "N/A",
      storage: "N/A",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "N/A",
      connectivity: "4x USB 3.0"
    },
    seller: "Debobi's Electronics",
    ratings: 4.3,
    related: [4, 5]
  },
  {
    id: 8,
    name: "Visit Our Store",
    price: "Free",
    description: "Come to our physical store for personalized service. Explore our wide range of products in person.",
    image: "Debobi's store.jpg",
    images: ["Debobi's store.jpg"],
    highlights: ["Free Visit", "Personalized Service"],
    specs: {
      model: "Store Visit",
      RAM: "N/A",
      processor: "N/A",
      storage: "N/A",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "N/A",
      connectivity: "N/A"
    },
    seller: "Debobi's Electronics",
    ratings: 5.0,
    related: [1, 2, 3]
  },
  {
    id: 9,
    name: "Store System Unit",
    price: "UGX 3,500,000",
    description: "High-end system unit available at our store location. Premium build for ultimate performance.",
    image: "system unit store.jpg",
    images: ["system unit store.jpg", "system unit 1.jpg"],
    highlights: ["New Condition", "64GB RAM", "Intel i9"],
    specs: {
      model: "Custom High-End",
      RAM: "64GB DDR4",
      processor: "Intel Core i9-11900K",
      storage: "2TB SSD",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "Windows 11",
      connectivity: "Ethernet, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.9,
    related: [3, 10]
  },
  {
    id: 10,
    name: "Advanced System Unit",
    price: "UGX 4,000,000",
    description: "Advanced desktop PC with premium components. Built for the most demanding applications.",
    image: "System Unit.jpg",
    images: ["System Unit.jpg"],
    highlights: ["New Condition", "128GB RAM", "AMD Ryzen 9"],
    specs: {
      model: "Ultimate Build",
      RAM: "128GB DDR4",
      processor: "AMD Ryzen 9 5900X",
      storage: "4TB SSD",
      battery: "N/A",
      screen: "N/A",
      camera: "N/A",
      OS: "Windows 11",
      connectivity: "10G Ethernet, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 5.0,
    related: [3, 9]
  },
  {
    id: 11,
    name: "Premium Laptop 2",
    price: "UGX 2,800,000",
    description: "High-end laptop with advanced features and performance.",
    image: "laptop 2.jpg",
    images: ["laptop 2.jpg"],
    highlights: ["New Condition", "16GB RAM", "Intel i7"],
    specs: {
      model: "Dell XPS 13",
      RAM: "16GB",
      processor: "Intel Core i7",
      storage: "512GB SSD",
      battery: "10 hours",
      screen: "13.3\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.6,
    related: [1, 12, 13]
  },
  {
    id: 12,
    name: "Business Laptop 3",
    price: "UGX 2,600,000",
    description: "Reliable laptop for professional use and productivity.",
    image: "laptop 3.jpg",
    images: ["laptop 3.jpg"],
    highlights: ["New Condition", "16GB RAM", "Intel i5"],
    specs: {
      model: "Lenovo ThinkPad",
      RAM: "16GB",
      processor: "Intel Core i5",
      storage: "512GB SSD",
      battery: "8 hours",
      screen: "14\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.4,
    related: [1, 11, 13]
  },
  {
    id: 13,
    name: "Gaming Laptop 4",
    price: "UGX 3,200,000",
    description: "Powerful gaming laptop with high graphics performance.",
    image: "laptop 4.jpg",
    images: ["laptop 4.jpg"],
    highlights: ["New Condition", "32GB RAM", "RTX 3060"],
    specs: {
      model: "ASUS ROG",
      RAM: "32GB",
      processor: "Intel Core i7",
      storage: "1TB SSD",
      battery: "4 hours",
      screen: "15.6\" FHD 144Hz",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.8,
    related: [1, 11, 12]
  },
  {
    id: 14,
    name: "Ultrabook 5",
    price: "UGX 2,400,000",
    description: "Lightweight ultrabook for portability and efficiency.",
    image: "laptop 5.jpg",
    images: ["laptop 5.jpg"],
    highlights: ["New Condition", "8GB RAM", "Intel i5"],
    specs: {
      model: "HP Spectre",
      RAM: "8GB",
      processor: "Intel Core i5",
      storage: "256GB SSD",
      battery: "12 hours",
      screen: "13.3\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.5,
    related: [11, 12, 15]
  },
  {
    id: 15,
    name: "Student Laptop 6",
    price: "UGX 2,000,000",
    description: "Affordable laptop ideal for students and learning.",
    image: "laptop 6.jpg",
    images: ["laptop 6.jpg"],
    highlights: ["New Condition", "8GB RAM", "Intel i3"],
    specs: {
      model: "Acer Aspire",
      RAM: "8GB",
      processor: "Intel Core i3",
      storage: "256GB SSD",
      battery: "6 hours",
      screen: "15.6\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 5"
    },
    seller: "Debobi's Electronics",
    ratings: 4.2,
    related: [14, 16, 21]
  },
  {
    id: 16,
    name: "Creative Laptop 7",
    price: "UGX 2,900,000",
    description: "Laptop designed for creative professionals and designers.",
    image: "laptop 7.jpg",
    images: ["laptop 7.jpg"],
    highlights: ["New Condition", "16GB RAM", "Intel i7"],
    specs: {
      model: "MacBook Pro",
      RAM: "16GB",
      processor: "Intel Core i7",
      storage: "512GB SSD",
      battery: "10 hours",
      screen: "13.3\" Retina",
      camera: "HD Webcam",
      OS: "macOS",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.7,
    related: [11, 17, 25]
  },
  {
    id: 17,
    name: "Executive Laptop 8",
    price: "UGX 3,100,000",
    description: "Premium laptop for executives with sleek design.",
    image: "laptop 8.jpg",
    images: ["laptop 8.jpg"],
    highlights: ["New Condition", "16GB RAM", "Intel i7"],
    specs: {
      model: "Dell Latitude",
      RAM: "16GB",
      processor: "Intel Core i7",
      storage: "512GB SSD",
      battery: "8 hours",
      screen: "14\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.6,
    related: [12, 16, 24]
  },
  {
    id: 18,
    name: "Versatile Laptop 9",
    price: "UGX 2,700,000",
    description: "Versatile laptop suitable for various tasks and uses.",
    image: "Laptop 9.jpg",
    images: ["Laptop 9.jpg"],
    highlights: ["New Condition", "16GB RAM", "AMD Ryzen 5"],
    specs: {
      model: "HP Envy",
      RAM: "16GB",
      processor: "AMD Ryzen 5",
      storage: "512GB SSD",
      battery: "7 hours",
      screen: "15.6\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.4,
    related: [11, 13, 19]
  },
  {
    id: 19,
    name: "Compact Laptop 10",
    price: "UGX 2,300,000",
    description: "Compact and powerful laptop for on-the-go productivity.",
    image: "laptop 10.jpg",
    images: ["laptop 10.jpg"],
    highlights: ["New Condition", "8GB RAM", "Intel i5"],
    specs: {
      model: "Lenovo Yoga",
      RAM: "8GB",
      processor: "Intel Core i5",
      storage: "256GB SSD",
      battery: "9 hours",
      screen: "13.3\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.3,
    related: [14, 18, 23]
  },
  {
    id: 20,
    name: "High-End Laptop 11",
    price: "UGX 3,500,000",
    description: "Top-tier laptop with cutting-edge technology.",
    image: "laptop 11.jpg",
    images: ["laptop 11.jpg"],
    highlights: ["New Condition", "32GB RAM", "Intel i9"],
    specs: {
      model: "Razer Blade",
      RAM: "32GB",
      processor: "Intel Core i9",
      storage: "1TB SSD",
      battery: "5 hours",
      screen: "15.6\" QHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.9,
    related: [13, 26, 27]
  },
  {
    id: 21,
    name: "Budget Laptop 12",
    price: "UGX 1,800,000",
    description: "Cost-effective laptop with essential features.",
    image: "laptop 12.jpg",
    images: ["laptop 12.jpg"],
    highlights: ["New Condition", "4GB RAM", "Intel Celeron"],
    specs: {
      model: "Acer Chromebook",
      RAM: "4GB",
      processor: "Intel Celeron",
      storage: "64GB SSD",
      battery: "10 hours",
      screen: "11.6\" HD",
      camera: "HD Webcam",
      OS: "Chrome OS",
      connectivity: "Wi-Fi 5"
    },
    seller: "Debobi's Electronics",
    ratings: 4.0,
    related: [15, 32]
  },
  {
    id: 22,
    name: "Multimedia Laptop 13",
    price: "UGX 2,750,000",
    description: "Laptop optimized for multimedia and entertainment.",
    image: "laptop 13.jpg",
    images: ["laptop 13.jpg"],
    highlights: ["New Condition", "16GB RAM", "Intel i7"],
    specs: {
      model: "MSI Creator",
      RAM: "16GB",
      processor: "Intel Core i7",
      storage: "512GB SSD",
      battery: "6 hours",
      screen: "15.6\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.5,
    related: [16, 20, 25]
  },
  {
    id: 23,
    name: "Travel Laptop 14",
    price: "UGX 2,200,000",
    description: "Lightweight laptop perfect for travel and mobility.",
    image: "laptop 14.jpg",
    images: ["laptop 14.jpg"],
    highlights: ["New Condition", "8GB RAM", "Intel i5"],
    specs: {
      model: "Samsung Galaxy Book",
      RAM: "8GB",
      processor: "Intel Core i5",
      storage: "256GB SSD",
      battery: "14 hours",
      screen: "13.3\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.4,
    related: [14, 19, 23]
  },
  {
    id: 24,
    name: "Professional Laptop 15",
    price: "UGX 3,000,000",
    description: "Professional-grade laptop for demanding tasks.",
    image: "laptop 15.jpg",
    images: ["laptop 15.jpg"],
    highlights: ["New Condition", "32GB RAM", "Intel i7"],
    specs: {
      model: "HP ZBook",
      RAM: "32GB",
      processor: "Intel Core i7",
      storage: "1TB SSD",
      battery: "6 hours",
      screen: "15.6\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.7,
    related: [12, 17, 24]
  },
  {
    id: 25,
    name: "Innovative Laptop 16",
    price: "UGX 2,850,000",
    description: "Innovative laptop with latest innovations.",
    image: "laptop 16.jpg",
    images: ["laptop 16.jpg"],
    highlights: ["New Condition", "16GB RAM", "AMD Ryzen 7"],
    specs: {
      model: "ASUS ZenBook",
      RAM: "16GB",
      processor: "AMD Ryzen 7",
      storage: "512GB SSD",
      battery: "8 hours",
      screen: "14\" FHD",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.6,
    related: [16, 22, 25]
  },
  {
    id: 26,
    name: "Elite Laptop 17",
    price: "UGX 3,300,000",
    description: "Elite laptop for top performance and style.",
    image: "laptop 17.jpg",
    images: ["laptop 17.jpg"],
    highlights: ["New Condition", "32GB RAM", "Intel i9"],
    specs: {
      model: "Alienware m15",
      RAM: "32GB",
      processor: "Intel Core i9",
      storage: "1TB SSD",
      battery: "4 hours",
      screen: "15.6\" FHD 240Hz",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.8,
    related: [13, 20, 27]
  },
  {
    id: 27,
    name: "Ultimate Laptop 18",
    price: "UGX 3,800,000",
    description: "The ultimate laptop with unmatched capabilities.",
    image: "laptop 18.jpg",
    images: ["laptop 18.jpg"],
    highlights: ["New Condition", "64GB RAM", "Intel i9"],
    specs: {
      model: "MSI Titan",
      RAM: "64GB",
      processor: "Intel Core i9",
      storage: "2TB SSD",
      battery: "3 hours",
      screen: "17.3\" 4K",
      camera: "HD Webcam",
      OS: "Windows 11",
      connectivity: "Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 5.0,
    related: [20, 26, 27]
  },
  {
    id: 28,
    name: "Smartphone 2",
    price: "UGX 1,300,000",
    description: "Advanced smartphone with superior camera and battery.",
    image: "phone 2.jpg",
    images: ["phone 2.jpg"],
    highlights: ["New Condition", "8GB RAM", "Snapdragon 888"],
    specs: {
      model: "Google Pixel 6",
      RAM: "8GB",
      processor: "Google Tensor",
      storage: "128GB",
      battery: "4614mAh",
      screen: "6.4\" OLED",
      camera: "50MP Dual",
      OS: "Android 12",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.6,
    related: [2, 29, 30]
  },
  {
    id: 29,
    name: "Flagship Phone 3",
    price: "UGX 1,500,000",
    description: "Flagship smartphone with premium features.",
    image: "phone 3.jpg",
    images: ["phone 3.jpg"],
    highlights: ["New Condition", "12GB RAM", "Snapdragon 8 Gen 1"],
    specs: {
      model: "OnePlus 10 Pro",
      RAM: "12GB",
      processor: "Snapdragon 8 Gen 1",
      storage: "256GB",
      battery: "5000mAh",
      screen: "6.7\" AMOLED",
      camera: "48MP Triple",
      OS: "Android 12",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.7,
    related: [2, 28, 33]
  },
  {
    id: 30,
    name: "Mid-Range Phone 4",
    price: "UGX 900,000",
    description: "Affordable mid-range smartphone with great value.",
    image: "phone 4.jpg",
    images: ["phone 4.jpg"],
    highlights: ["New Condition", "6GB RAM", "Snapdragon 778G"],
    specs: {
      model: "Xiaomi Mi 11",
      RAM: "6GB",
      processor: "Snapdragon 778G",
      storage: "128GB",
      battery: "4600mAh",
      screen: "6.55\" AMOLED",
      camera: "108MP Triple",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.4,
    related: [28, 31, 32]
  },
  {
    id: 31,
    name: "Compact Phone 5",
    price: "UGX 1,000,000",
    description: "Compact smartphone for easy handling.",
    image: "phone 5.jpg",
    images: ["phone 5.jpg"],
    highlights: ["New Condition", "4GB RAM", "Snapdragon 720G"],
    specs: {
      model: "Sony Xperia 5 III",
      RAM: "8GB",
      processor: "Snapdragon 888",
      storage: "128GB",
      battery: "4500mAh",
      screen: "6.1\" OLED",
      camera: "12MP Triple",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.3,
    related: [30, 35, 37]
  },
  {
    id: 32,
    name: "Budget Phone 6",
    price: "UGX 700,000",
    description: "Budget-friendly smartphone with essential features.",
    image: "phone 6.jpg",
    images: ["phone 6.jpg"],
    highlights: ["New Condition", "4GB RAM", "Helio G95"],
    specs: {
      model: "Realme 8",
      RAM: "4GB",
      processor: "Helio G95",
      storage: "64GB",
      battery: "5000mAh",
      screen: "6.4\" Super AMOLED",
      camera: "64MP Quad",
      OS: "Android 11",
      connectivity: "4G, Wi-Fi 5"
    },
    seller: "Debobi's Electronics",
    ratings: 4.1,
    related: [30, 36, 39]
  },
  {
    id: 33,
    name: "Photography Phone 7",
    price: "UGX 1,400,000",
    description: "Smartphone optimized for photography enthusiasts.",
    image: "phone 7.jpg",
    images: ["phone 7.jpg"],
    highlights: ["New Condition", "8GB RAM", "Snapdragon 888"],
    specs: {
      model: "Huawei P40 Pro",
      RAM: "8GB",
      processor: "Kirin 990",
      storage: "256GB",
      battery: "4200mAh",
      screen: "6.58\" OLED",
      camera: "50MP Quad",
      OS: "Android 10",
      connectivity: "4G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.5,
    related: [29, 34, 38]
  },
  {
    id: 34,
    name: "Gaming Phone 8",
    price: "UGX 1,600,000",
    description: "Smartphone designed for mobile gaming.",
    image: "phone 8.jpg",
    images: ["phone 8.jpg"],
    highlights: ["New Condition", "12GB RAM", "Snapdragon 8 Gen 1"],
    specs: {
      model: "Asus ROG Phone 5",
      RAM: "16GB",
      processor: "Snapdragon 888",
      storage: "256GB",
      battery: "6000mAh",
      screen: "6.78\" AMOLED 144Hz",
      camera: "64MP Triple",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.8,
    related: [29, 33, 36]
  },
  {
    id: 35,
    name: "Stylish Phone 9",
    price: "UGX 1,100,000",
    description: "Stylish smartphone with modern design.",
    image: "phone 9.jpg",
    images: ["phone 9.jpg"],
    highlights: ["New Condition", "6GB RAM", "Snapdragon 778G"],
    specs: {
      model: "Samsung Galaxy A52",
      RAM: "6GB",
      processor: "Snapdragon 720G",
      storage: "128GB",
      battery: "4500mAh",
      screen: "6.5\" Super AMOLED",
      camera: "64MP Quad",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.3,
    related: [31, 37, 39]
  },
  {
    id: 36,
    name: "Powerful Phone 10",
    price: "UGX 1,700,000",
    description: "Powerful smartphone for high performance.",
    image: "phone 10.jpg",
    images: ["phone 10.jpg"],
    highlights: ["New Condition", "12GB RAM", "Snapdragon 8 Gen 1"],
    specs: {
      model: "Black Shark 5",
      RAM: "12GB",
      processor: "Snapdragon 870",
      storage: "256GB",
      battery: "4650mAh",
      screen: "6.67\" AMOLED 144Hz",
      camera: "64MP Triple",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.6,
    related: [32, 34, 38]
  },
  {
    id: 37,
    name: "Eco-Friendly Phone 11",
    price: "UGX 1,200,000",
    description: "Eco-friendly smartphone with sustainable features.",
    image: "phone 11.jpg",
    images: ["phone 11.jpg"],
    highlights: ["New Condition", "6GB RAM", "Snapdragon 778G"],
    specs: {
      model: "Fairphone 4",
      RAM: "6GB",
      processor: "Snapdragon 750G",
      storage: "128GB",
      battery: "3905mAh",
      screen: "6.3\" IPS",
      camera: "48MP Dual",
      OS: "Android 11",
      connectivity: "4G, Wi-Fi 5"
    },
    seller: "Debobi's Electronics",
    ratings: 4.2,
    related: [31, 35, 39]
  },
  {
    id: 38,
    name: "Innovative Phone 12",
    price: "UGX 1,800,000",
    description: "Innovative smartphone with cutting-edge tech.",
    image: "phone 12.jpg",
    images: ["phone 12.jpg"],
    highlights: ["New Condition", "12GB RAM", "Snapdragon 8 Gen 1"],
    specs: {
      model: "Oppo Find X3 Pro",
      RAM: "12GB",
      processor: "Snapdragon 888",
      storage: "256GB",
      battery: "4500mAh",
      screen: "6.7\" AMOLED",
      camera: "50MP Triple",
      OS: "Android 11",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.7,
    related: [33, 36, 38]
  },
  {
    id: 39,
    name: "Ultimate Phone 13",
    price: "UGX 2,000,000",
    description: "The ultimate smartphone with all features.",
    image: "phone 13.jpg",
    images: ["phone 13.jpg"],
    highlights: ["New Condition", "16GB RAM", "Snapdragon 8 Gen 1"],
    specs: {
      model: "Samsung Galaxy S22 Ultra",
      RAM: "12GB",
      processor: "Snapdragon 8 Gen 1",
      storage: "512GB",
      battery: "5000mAh",
      screen: "6.8\" Dynamic AMOLED",
      camera: "108MP Quad",
      OS: "Android 12",
      connectivity: "5G, Wi-Fi 6"
    },
    seller: "Debobi's Electronics",
    ratings: 4.9,
    related: [2, 29, 38]
  }
];


const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const product = products.find(p => p.id === productId);

// Function to generate image carousel
function generateImageCarousel(images) {
  if (images.length === 1) {
    return `<img src="${images[0]}" class="detail-image" alt="${product.name}">`;
  }
  let carouselHTML = `<div class="image-carousel">
    <img src="${images[0]}" class="detail-image main-image" alt="${product.name}" id="main-image">
    <div class="thumbnails">`;
  images.forEach((img, index) => {
    carouselHTML += `<img src="${img}" class="thumbnail" data-index="${index}" alt="Thumbnail ${index + 1}">`;
  });
  carouselHTML += `</div></div>`;
  return carouselHTML;
}

// Function to generate highlights
function generateHighlights(highlights) {
  return highlights.map(h => `<li>${h}</li>`).join('');
}

// Function to generate specs table
function generateSpecsTable(specs) {
  let tableHTML = `<table class="specs-table">
    <thead><tr><th>Specification</th><th>Detail</th></tr></thead>
    <tbody>`;
  for (const [key, value] of Object.entries(specs)) {
    tableHTML += `<tr><td>${key.charAt(0).toUpperCase() + key.slice(1)}</td><td>${value}</td></tr>`;
  }
  tableHTML += `</tbody></table>`;
  return tableHTML;
}

// Function to generate related products
function generateRelatedProducts(relatedIds) {
  const relatedProducts = products.filter(p => relatedIds.includes(p.id)).slice(0, 4);
  let relatedHTML = `<div class="related-products">
    <h3>Related Products</h3>
    <div class="related-row">`;
  relatedProducts.forEach(p => {
    relatedHTML += `<div class="related-card">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${p.price}</p>
      <a href="product.html?id=${p.id}">View</a>
    </div>`;
  });
  relatedHTML += `</div></div>`;
  return relatedHTML;
}

document.getElementById("product-detail").innerHTML = `
  <a href="products.html" class="back-btn">← Back to Products</a>
  <div class="detail-container">
    <div class="detail-image-container">
      ${generateImageCarousel(product.images)}
    </div>
    <div class="detail-info">
      <h2>${product.name}</h2>
      <p class="price">${product.price}</p>
      <ul class="highlights">${generateHighlights(product.highlights)}</ul>
      <div class="buttons">
        <button class="buy-btn">Buy Now</button>
        <button class="contact-btn">Contact Seller</button>
      </div>
      <div class="seller-info">
        <p><strong>Seller:</strong> ${product.seller}</p>
        <p><strong>Ratings:</strong> ${product.ratings} ★</p>
      </div>
    </div>
  </div>
  <div class="specs-section">
    <h3>Specifications</h3>
    ${generateSpecsTable(product.specs)}
  </div>
  <div class="description-section">
    <h3>Description</h3>
    <p>${product.description}</p>
  </div>
  ${generateRelatedProducts(product.related)}
`;

// Add carousel functionality
if (product.images.length > 1) {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-image');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.src;
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  // Set first thumbnail as active
  thumbnails[0].classList.add('active');
}
