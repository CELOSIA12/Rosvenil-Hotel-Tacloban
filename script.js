// ====================
// PAGE MANAGEMENT SYSTEM
// ====================
let currentPage = 'home';

// Page content templates
const pages = {
    home: `
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Experience Comfort in Tacloban City</h1>
                <p>Discover our special offers and enjoy a memorable stay at Rosvenil Hotel, located in the heart of Tacloban City. Affordable luxury with 24/7 service.</p>
                <button class="btn" onclick="loadPage('booking')">BOOK NOW</button>
            </div>
        </section>

        <!-- Main Content -->
        <main class="container">
            <!-- Page Title -->
            <div class="page-title">
                <h1>Special Offers</h1>
                <p>Exclusive deals and packages just for you</p>
            </div>

            <!-- Offers Grid -->
            <div class="offers-grid" id="offers">
                <!-- Offer 1 -->
                <div class="offer-card">
                    <div class="offer-img" style="background-image: url('https://uploads.onecompiler.io/42yy7kb7e/44c7ccvbc/21.jpg');"></div>
                    <div class="offer-content">
                        <h3>Alfresco Dining Experience</h3>
                        <p>Enjoy a delightful meal at our Rosvenil Cafe with our special alfresco dining setup. Perfect for family gatherings and romantic dinners.</p>
                        <div class="offer-details">
                            <p><i class="fas fa-utensils"></i> <strong>Location:</strong> Rosvenil Cafe</p>
                            <p><i class="fas fa-clock"></i> <strong>Hours:</strong> 24/7 Service</p>
                            <p><i class="fas fa-tag"></i> <strong>Price Range:</strong> Budget-Friendly ($)</p>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Book Now</button>
                    </div>
                </div>

                <!-- Offer 2 -->
                <div class="offer-card">
                    <div class="offer-img" style="background-image: url('https://uploads.onecompiler.io/42yy7kb7e/44c7ccvbc/15.jpg');"></div>
                    <div class="offer-content">
                        <h3>Socsargen Grill Special</h3>
                        <p>Fire up your night with our authentic Socsargen Grill specialties. A unique culinary experience right at our hotel premises.</p>
                        <div class="offer-details">
                            <p><i class="fas fa-fire"></i> <strong>Feature:</strong> Authentic Socsargen Grill</p>
                            <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> Hotel Premises</p>
                            <p><i class="fas fa-check-circle"></i> <strong>Service:</strong> Dine-in & Takeout</p>
                        </div>
                        <button class="btn" onclick="loadPage('dining')">Learn More</button>
                    </div>
                </div>

                <!-- Offer 3 -->
                <div class="offer-card">
                    <div class="offer-img" style="background-image: url('https://uploads.onecompiler.io/42yy7kb7e/44c7ccvbc/1.jpg');"></div>
                    <div class="offer-content">
                        <h3>Extended Stay Discount</h3>
                        <p>Book a stay of 3 nights or more and receive exclusive discounts on your accommodation. Perfect for travelers exploring Tacloban.</p>
                        <div class="offer-details">
                            <p><i class="fas fa-bed"></i> <strong>Accommodation:</strong> All Room Types</p>
                            <p><i class="fas fa-calendar-alt"></i> <strong>Minimum Stay:</strong> 3 Nights</p>
                            <p><i class="fas fa-percentage"></i> <strong>Discount:</strong> Up to 15% Off</p>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Check Availability</button>
                    </div>
                </div>
            </div>

            <!-- Room Preview Gallery -->
            <div class="gallery-section">
                <h2>Room Preview</h2>
                <p>Explore our comfortable and well-appointed rooms</p>
                <div class="scroll-gallery">
                    <div class="gallery-track">
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/2.jpg" alt="Hotel Room 1">
                            <div class="gallery-overlay">
                                <h4>Standard Room</h4>
                                <p>Comfortable and cozy</p>
                                <button class="gallery-view-btn" onclick="loadPage('rooms')">View Details</button>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/3.jpg" alt="Hotel Room 2">
                            <div class="gallery-overlay">
                                <h4>Deluxe Room</h4>
                                <p>Spacious with premium amenities</p>
                                <button class="gallery-view-btn" onclick="loadPage('rooms')">View Details</button>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/4.jpg" alt="Hotel Room 3">
                            <div class="gallery-overlay">
                                <h4>Executive Suite</h4>
                                <p>Luxury at its finest</p>
                                <button class="gallery-view-btn" onclick="loadPage('rooms')">View Details</button>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/5.jpg" alt="Hotel Room 4">
                            <div class="gallery-overlay">
                                <h4>Family Room</h4>
                                <p>Perfect for family stays</p>
                                <button class="gallery-view-btn" onclick="loadPage('rooms')">View Details</button>
                            </div>
                        </div>
                    </div>
                    <button class="scroll-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                    <button class="scroll-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="text-center mt-3">
                    <button class="btn" onclick="loadPage('rooms')">View All Rooms</button>
                </div>
            </div>

            <!-- Food Preview Gallery -->
            <div class="gallery-section">
                <h2>Food Preview</h2>
                <p>Discover our delicious culinary offerings</p>
                <div class="scroll-gallery">
                    <div class="gallery-track">
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/7.jpg" alt="Food 1">
                            <div class="gallery-overlay">
                                <h4>Signature Dish</h4>
                                <p>Chef's special creation</p>
                                <button class="gallery-view-btn" onclick="loadPage('dining')">View Details</button>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/6.jpg" alt="Food 2">
                            <div class="gallery-overlay">
                                <h4>Local Delicacies</h4>
                                <p>Authentic Tacloban flavors</p>
                                <button class="gallery-view-btn" onclick="loadPage('dining')">View Details</button>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/9.jpg" alt="Food 3">
                            <div class="gallery-overlay">
                                <h4>International Cuisine</h4>
                                <p>Global flavors served fresh</p>
                                <button class="gallery-view-btn" onclick="loadPage('dining')">View Details</button>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/12.jpg" alt="Food 4">
                            <div class="gallery-overlay">
                                <h4>Seafood Platter</h4>
                                <p>Fresh from local waters</p>
                                <button class="gallery-view-btn" onclick="loadPage('dining')">View Details</button>
                            </div>
                        </div>
                    </div>
                    <button class="scroll-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                    <button class="scroll-btn next-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="text-center mt-3">
                    <button class="btn" onclick="loadPage('dining')">View Full Menu</button>
                </div>
            </div>

            <!-- Map Section -->
            <div class="map-section">
                <h2>Find Us</h2>
                <p>Visit us at our convenient location in Tacloban City</p>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.901046970495!2d124.9986225749379!3d11.243856089108937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330877af3f2a6d2f%3A0x6f1b1b6b5b5b5b5b!2s302%20P.%20Burgos%20St%2C%20Tacloban%20City%2C%20Leyte!5e0!3m2!1sen!2sph!4v1680500000000!5m2!1sen!2sph"
                        width="100%"
                        height="400"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Rosvenil Hotel Tacloban Location">
                    </iframe>
                </div>
                <div class="map-actions">
                    <a href="https://www.google.com/maps/dir//302+P.+Burgos+St,+Tacloban+City,+Leyte/@11.2438561,124.9986226,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x330877af3f2a6d2f:0x6f1b1b6b5b5b5b5b!2m2!1d125.0011975!2d11.2438561!3e0"
                       class="btn"
                       target="_blank">
                       <i class="fas fa-directions"></i> Get Directions
                    </a>
                    <button class="btn map-btn" id="copyAddressBtn">
                        <i class="fas fa-copy"></i> Copy Address
                    </button>
                </div>
            </div>

            <!-- Hotel Information -->
            <div class="hotel-info">
                <h2>About Rosvenil Hotel Tacloban</h2>
                <p>Located at 302 P. Burgos St, Tacloban City, Rosvenil Hotel offers comfortable accommodations with 24/7 service. Our facilities include Rosvenil Cafe and Socsargen Grill, providing guests with delicious dining options throughout their stay.</p>
               
                <div class="info-grid">
                    <div class="info-item">
                        <h4><i class="fas fa-map-marker-alt"></i> Address</h4>
                        <p>302 P. Burgos St, Tacloban City, Philippines</p>
                    </div>
                    <div class="info-item">
                        <h4><i class="fas fa-phone-alt"></i> Phone</h4>
                        <p>+63 917 830 4757</p>
                    </div>
                    <div class="info-item">
                        <h4><i class="fas fa-envelope"></i> Email</h4>
                        <p>rosvenilhotel@gmail.com</p>
                    </div>
                    <div class="info-item">
                        <h4><i class="fas fa-clock"></i> Hours</h4>
                        <p>24 Hours Open</p>
                    </div>
                    <div class="info-item">
                        <h4><i class="fas fa-utensils"></i> Dining</h4>
                        <p>Dine-in & Alfresco Seating</p>
                    </div>
                    <div class="info-item">
                        <h4><i class="fas fa-star"></i> Rating</h4>
                        <p>90% Recommended(1817 Reviews)</p>
                    </div>
                </div>
            </div>
        </main>
    `,

    rooms: `
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Luxurious Accommodations</h1>
                <p>Choose from our range of comfortable and well-appointed rooms designed to make your stay memorable and relaxing.</p>
                <button class="btn" onclick="loadPage('booking')">BOOK NOW</button>
            </div>
        </section>

        <!-- Main Content -->
        <main class="container">
            <!-- Page Title -->
            <div class="page-title">
                <h1>Our Rooms & Suites</h1>
                <p>Find the perfect accommodation for your stay</p>
            </div>

            <!-- Standard Room -->
            <div class="room-detail" id="standard">
                <div class="room-header">
                    <h2>Standard Room</h2>
                    <span class="room-price">From ₱1,500 / night</span>
                </div>
                <div class="room-content">
                    <div class="room-image">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/2.jpg" alt="Standard Room">
                    </div>
                    <div class="room-description">
                        <p>Our Standard Room offers comfort and convenience for solo travelers or couples. Featuring a cozy queen-sized bed, modern amenities, and a private bathroom.</p>
                        <div class="room-features">
                            <h4><i class="fas fa-check-circle"></i> Room Features:</h4>
                            <ul>
                                <li><i class="fas fa-bed"></i> Queen Size Bed</li>
                                <li><i class="fas fa-wifi"></i> Free High-Speed WiFi</li>
                                <li><i class="fas fa-tv"></i> 32" LED TV with Cable</li>
                                <li><i class="fas fa-snowflake"></i> Air Conditioning</li>
                                <li><i class="fas fa-shower"></i> Private Bathroom with Hot Shower</li>
                                <li><i class="fas fa-coffee"></i> Coffee/Tea Making Facilities</li>
                            </ul>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Book This Room</button>
                    </div>
                </div>
            </div>

            <!-- Deluxe Room -->
            <div class="room-detail" id="deluxe">
                <div class="room-header">
                    <h2>Deluxe Room</h2>
                    <span class="room-price">From ₱2,200 / night</span>
                </div>
                <div class="room-content">
                    <div class="room-image">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/3.jpg" alt="Deluxe Room">
                    </div>
                    <div class="room-description">
                        <p>Spacious and elegant, our Deluxe Room offers additional space and premium amenities for a more comfortable stay. Perfect for business travelers or extended stays.</p>
                        <div class="room-features">
                            <h4><i class="fas fa-check-circle"></i> Room Features:</h4>
                            <ul>
                                <li><i class="fas fa-bed"></i> King Size Bed or Twin Beds</li>
                                <li><i class="fas fa-wifi"></i> Free High-Speed WiFi</li>
                                <li><i class="fas fa-tv"></i> 40" Smart TV</li>
                                <li><i class="fas fa-snowflake"></i> Air Conditioning</li>
                                <li><i class="fas fa-bath"></i> Bathtub & Rain Shower</li>
                                <li><i class="fas fa-desktop"></i> Work Desk with Lamp</li>
                                <li><i class="fas fa-couch"></i> Sitting Area</li>
                            </ul>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Book This Room</button>
                    </div>
                </div>
            </div>

            <!-- Executive Suite -->
            <div class="room-detail" id="executive">
                <div class="room-header">
                    <h2>Executive Suite</h2>
                    <span class="room-price">From ₱3,500 / night</span>
                </div>
                <div class="room-content">
                    <div class="room-image">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/4.jpg" alt="Executive Suite">
                    </div>
                    <div class="room-description">
                        <p>Experience luxury at its finest in our Executive Suite. Featuring separate living and sleeping areas, premium amenities, and exclusive services.</p>
                        <div class="room-features">
                            <h4><i class="fas fa-check-circle"></i> Room Features:</h4>
                            <ul>
                                <li><i class="fas fa-bed"></i> King Size Bed</li>
                                <li><i class="fas fa-door-open"></i> Separate Living Room</li>
                                <li><i class="fas fa-tv"></i> 2x 50" Smart TVs</li>
                                <li><i class="fas fa-wine-glass-alt"></i> Mini Bar</li>
                                <li><i class="fas fa-bath"></i> Jacuzzi Bathtub</li>
                                <li><i class="fas fa-concierge-bell"></i> Butler Service Available</li>
                                <li><i class="fas fa-utensils"></i> Complimentary Breakfast</li>
                            </ul>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Book This Suite</button>
                    </div>
                </div>
            </div>

            <!-- Family Room -->
            <div class="room-detail" id="family">
                <div class="room-header">
                    <h2>Family Room</h2>
                    <span class="room-price">From ₱2,800 / night</span>
                </div>
                <div class="room-content">
                    <div class="room-image">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/5.jpg" alt="Family Room">
                    </div>
                    <div class="room-description">
                        <p>Perfect for families or groups, our Family Room features multiple beds and ample space. Designed to accommodate up to 4 guests comfortably.</p>
                        <div class="room-features">
                            <h4><i class="fas fa-check-circle"></i> Room Features:</h4>
                            <ul>
                                <li><i class="fas fa-bed"></i> 2 Queen Beds or 4 Single Beds</li>
                                <li><i class="fas fa-users"></i> Capacity: 4 Persons</li>
                                <li><i class="fas fa-tv"></i> 43" Smart TV</li>
                                <li><i class="fas fa-snowflake"></i> Air Conditioning</li>
                                <li><i class="fas fa-shower"></i> Family-sized Bathroom</li>
                                <li><i class="fas fa-couch"></i> Spacious Sitting Area</li>
                                <li><i class="fas fa-gamepad"></i> Board Games Available</li>
                            </ul>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Book This Room</button>
                    </div>
                </div>
            </div>

            <!-- Amenities Section -->
            <div class="amenities-section">
                <h2>Hotel Amenities</h2>
                <div class="amenities-grid">
                    <div class="amenity-item">
                        <i class="fas fa-wifi"></i>
                        <h4>Free WiFi</h4>
                        <p>High-speed internet throughout the hotel</p>
                    </div>
                    <div class="amenity-item">
                        <i class="fas fa-swimming-pool"></i>
                        <h4>Swimming Pool</h4>
                        <p>Outdoor pool available for guests</p>
                    </div>
                    <div class="amenity-item">
                        <i class="fas fa-utensils"></i>
                        <h4>24/7 Dining</h4>
                        <p>Rosvenil Cafe open round the clock</p>
                    </div>
                    <div class="amenity-item">
                        <i class="fas fa-parking"></i>
                        <h4>Free Parking</h4>
                        <p>Secure parking available</p>
                    </div>
                    <div class="amenity-item">
                        <i class="fas fa-concierge-bell"></i>
                        <h4>24/7 Reception</h4>
                        <p>Always available to assist you</p>
                    </div>
                    <div class="amenity-item">
                        <i class="fas fa-dumbbell"></i>
                        <h4>Fitness Center</h4>
                        <p>Basic exercise equipment available</p>
                    </div>
                </div>
            </div>
        </main>
    `,

    dining: `
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Culinary Excellence</h1>
                <p>Experience delicious local and international cuisine at our restaurants and cafes</p>
            </div>
        </section>

        <!-- Main Content -->
        <main class="container">
            <!-- Page Title -->
            <div class="page-title">
                <h1>Dining Options</h1>
                <p>Explore our diverse culinary offerings</p>
            </div>

            <!-- Rosvenil Cafe -->
            <div class="restaurant-section">
                <div class="restaurant-header">
                    <h2>Rosvenil Cafe</h2>
                    <span class="restaurant-hours"><i class="fas fa-clock"></i> Open 24/7</span>
                </div>
                <div class="restaurant-content">
                    <div class="restaurant-image">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44c7ccvbc/21.jpg" alt="Rosvenil Cafe">
                    </div>
                    <div class="restaurant-info">
                        <p>Our main dining area offering a wide variety of local and international dishes. Open 24/7 for your convenience.</p>
                        <div class="restaurant-features">
                            <h4><i class="fas fa-utensils"></i> Features:</h4>
                            <ul>
                                <li><i class="fas fa-check"></i> 24/7 Service</li>
                                <li><i class="fas fa-check"></i> Indoor & Alfresco Seating</li>
                                <li><i class="fas fa-check"></i> Breakfast Buffet (6AM-10AM)</li>
                                <li><i class="fas fa-check"></i> A la Carte Menu Available</li>
                                <li><i class="fas fa-check"></i> Free WiFi</li>
                                <li><i class="fas fa-check"></i> Takeout Available</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Socsargen Grill -->
            <div class="restaurant-section" id="grill">
                <div class="restaurant-header">
                    <h2>Socsargen Grill</h2>
                    <span class="restaurant-hours"><i class="fas fa-clock"></i> 5:00 PM - 11:00 PM</span>
                </div>
                <div class="restaurant-content">
                    <div class="restaurant-image">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44drygmdm/socgrills.webp" alt="Socsargen Grill">
                    </div>
                    <div class="restaurant-info">
                        <p>Experience authentic Filipino grill specialties in a casual outdoor setting. Perfect for family gatherings and groups.</p>
                        <div class="restaurant-features">
                            <h4><i class="fas fa-fire"></i> Features:</h4>
                            <ul>
                                <li><i class="fas fa-check"></i> Authentic Filipino Grill</li>
                                <li><i class="fas fa-check"></i> Outdoor Seating</li>
                                <li><i class="fas fa-check"></i> Live Music (Weekends)</li>
                                <li><i class="fas fa-check"></i> Group Packages Available</li>
                                <li><i class="fas fa-check"></i> Family-style Serving</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Signature Dishes -->
            <div class="menu-section">
                <h2>Signature Dishes</h2>
                <div class="menu-grid">
                    <div class="menu-item" id="signature">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/12.jpg" alt="Signature Dish">
                        <div class="menu-details">
                            <h4>Rosvenil Special Platter</h4>
                            <p>Our chef's special creation featuring grilled meats, seafood, and fresh vegetables</p>
                            <span class="menu-price">₱599</span>
                        </div>
                    </div>
                   
                    <div class="menu-item" id="local">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/16.jpg" alt="Local Delicacies">
                        <div class="menu-details">
                            <h4>Rosvenil Special Sisig</h4>
                            <p>Authentic local delicacy made from pig face, spices and fresh eggs</p>
                            <span class="menu-price">₱250</span>
                        </div>
                    </div>
                   
                    <div class="menu-item" id="seafood">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44c7ccvbc/15.jpg" alt="Seafood Platter">
                        <div class="menu-details">
                            <h4>Seafood Platter</h4>
                            <p>Fresh catch from local waters including fish, shrimp, squid, and crabs</p>
                            <span class="menu-price">₱499</span>
                        </div>
                    </div>
                   
                    <div class="menu-item" id="international">
                        <img src="https://uploads.onecompiler.io/42yy7kb7e/44cph34s6/9.jpg" alt="International Cuisine">
                        <div class="menu-details">
                            <h4>International Buffet</h4>
                            <p>Selection of international dishes including pasta, steak, and Asian favorites</p>
                            <span class="menu-price">₱650</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dining Hours -->
            <div class="hours-section">
                <h2>Operating Hours</h2>
                <div class="hours-grid">
                    <div class="hour-item">
                        <h4><i class="fas fa-utensils"></i> Rosvenil Cafe</h4>
                        <p>Monday - Sunday: 24/7</p>
                        <p>Breakfast Buffet: 6:00 AM - 10:00 AM</p>
                    </div>
                    <div class="hour-item">
                        <h4><i class="fas fa-fire"></i> Socsargen Grill</h4>
                        <p>Monday - Sunday: 5:00 PM - 11:00 PM</p>
                        <p>Live Music: Friday & Saturday 7:00 PM - 10:00 PM</p>
                    </div>
                    <div class="hour-item">
                        <h4><i class="fas fa-mug-hot"></i> Coffee Shop</h4>
                        <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                        <p>Pastries & Light Snacks Available</p>
                    </div>
                </div>
            </div>

            <!-- Reservation Section -->
            <div class="reservation-section">
                <h2>Make a Reservation</h2>
                <p>Book your table for a delightful dining experience</p>
                <button class="btn" onclick="loadPage('contact')">Contact for Reservation</button>
            </div>
        </main>
    `,

    contact: `
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Get In Touch</h1>
                <p>We're here to help you plan your perfect stay at Rosvenil Hotel Tacloban</p>
            </div>
        </section>

        <!-- Main Content -->
        <main class="container">
            <!-- Page Title -->
            <div class="page-title">
                <h1>Contact Us</h1>
                <p>Reach out to us for inquiries, reservations, or assistance</p>
            </div>

            <!-- Contact Info Grid -->
            <div class="contact-grid">
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Address</h3>
                    <p>302 P. Burgos St, Tacloban City<br>Leyte, Philippines 6500</p>
                </div>
               
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <h3>Phone Numbers</h3>
                    <p>+63 917 830 4757<br>+63 917 830 4758</p>
                </div>
               
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3>Email</h3>
                    <p>rosvenilhotel@gmail.com<br>reservations@rosvenilhotel.com</p>
                </div>
               
                <div class="contact-card">
                    <div class="contact-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3>Operating Hours</h3>
                    <p>24/7 Reception<br>Check-in: 2:00 PM<br>Check-out: 12:00 PM</p>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-section">
                <h2>Send Us a Message</h2>
                <form id="contactForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name"><i class="fas fa-user"></i> Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="fas fa-envelope"></i> Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                   
                    <div class="form-row">
                        <div class="form-group">
                            <label for="phone"><i class="fas fa-phone"></i> Phone Number</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="subject"><i class="fas fa-tag"></i> Subject *</label>
                            <select id="subject" name="subject" required>
                                <option value="">Select a subject</option>
                                <option value="booking">Room Booking</option>
                                <option value="reservation">Dining Reservation</option>
                                <option value="inquiry">General Inquiry</option>
                                <option value="event">Event Planning</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label for="message"><i class="fas fa-comment"></i> Message *</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                   
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>

            <!-- Map Section -->
            <div class="map-section">
                <h2>Find Us</h2>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.901046970495!2d124.9986225749379!3d11.243856089108937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330877af3f2a6d2f%3A0x6f1b1b6b5b5b5b5b!2s302%20P.%20Burgos%20St%2C%20Tacloban%20City%2C%20Leyte!5e0!3m2!1sen!2sph!4v1680500000000!5m2!1sen!2sph"
                        width="100%"
                        height="400"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Rosvenil Hotel Tacloban Location">
                    </iframe>
                </div>
                <div class="map-actions">
                    <a href="https://www.google.com/maps/dir//302+P.+Burgos+St,+Tacloban+City,+Leyte/@11.2438561,124.9986226,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x330877af3f2a6d2f:0x6f1b1b6b5b5b5b5b!2m2!1d125.0011975!2d11.2438561!3e0"
                       class="btn"
                       target="_blank">
                       <i class="fas fa-directions"></i> Get Directions
                    </a>
                    <button class="btn map-btn" id="copyAddressBtn">
                        <i class="fas fa-copy"></i> Copy Address
                    </button>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-grid">
                    <div class="faq-item">
                        <h4><i class="fas fa-question-circle"></i> What are the check-in and check-out times?</h4>
                        <p>Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability.</p>
                    </div>
                    <div class="faq-item">
                        <h4><i class="fas fa-question-circle"></i> Do you accept credit cards?</h4>
                        <p>Yes, we accept all major credit cards (Visa, MasterCard, American Express). We also accept cash payments in Philippine Peso.</p>
                    </div>
                    <div class="faq-item">
                        <h4><i class="fas fa-question-circle"></i> Is parking available?</h4>
                        <p>Yes, we offer free parking for our guests. The parking area is secure and monitored 24/7.</p>
                    </div>
                    <div class="faq-item">
                        <h4><i class="fas fa-question-circle"></i> Do you have WiFi?</h4>
                        <p>Yes, free high-speed WiFi is available throughout the hotel including all rooms and public areas.</p>
                    </div>
                </div>
            </div>
        </main>
    `,

    booking: `
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Book Your Stay</h1>
                <p>Reserve your perfect room at Rosvenil Hotel Tacloban</p>
            </div>
        </section>

        <!-- Main Content -->
        <main class="container">
            <!-- Page Title -->
            <div class="page-title">
                <h1>Make a Reservation</h1>
                <p>Fill out the form below to book your stay</p>
            </div>

            <!-- Booking Form -->
            <div class="booking-form-section">
                <form id="bookingForm">
                    <div class="form-section">
                        <h3><i class="fas fa-user-circle"></i> Personal Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="firstName">First Name *</label>
                                <input type="text" id="firstName" name="firstName" required>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" required>
                            </div>
                        </div>
                       
                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" required>
                            </div>
                        </div>
                       
                        <div class="form-group">
                            <label for="address">Address</label>
                            <textarea id="address" name="address" rows="2"></textarea>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3><i class="fas fa-calendar-alt"></i> Booking Details</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="checkIn">Check-in Date *</label>
                                <input type="date" id="checkIn" name="checkIn" required>
                            </div>
                            <div class="form-group">
                                <label for="checkOut">Check-out Date *</label>
                                <input type="date" id="checkOut" name="checkOut" required>
                            </div>
                        </div>
                       
                        <div class="form-row">
                            <div class="form-group">
                                <label for="roomType">Room Type *</label>
                                <select id="roomType" name="roomType" required>
                                    <option value="">Select Room Type</option>
                                    <option value="standard">Standard Room - ₱1,500/night</option>
                                    <option value="deluxe">Deluxe Room - ₱2,200/night</option>
                                    <option value="executive">Executive Suite - ₱3,500/night</option>
                                    <option value="family">Family Room - ₱2,800/night</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="guests">Number of Guests *</label>
                                <select id="guests" name="guests" required>
                                    <option value="">Select Number</option>
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                    <option value="5+">5+ Guests</option>
                                </select>
                            </div>
                        </div>
                       
                        <div class="form-row">
                            <div class="form-group">
                                <label for="rooms">Number of Rooms *</label>
                                <select id="rooms" name="rooms" required>
                                    <option value="">Select Number</option>
                                    <option value="1">1 Room</option>
                                    <option value="2">2 Rooms</option>
                                    <option value="3">3 Rooms</option>
                                    <option value="4">4 Rooms</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="specialOffer">Special Offer (Optional)</label>
                                <select id="specialOffer" name="specialOffer">
                                    <option value="">No Special Offer</option>
                                    <option value="alfresco">Alfresco Dining Experience</option>
                                    <option value="extended">Extended Stay Discount</option>
                                    <option value="weekend">Weekend Getaway Package</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3><i class="fas fa-concierge-bell"></i> Special Requests</h3>
                        <div class="form-group">
                            <label for="requests">Additional Requests or Requirements</label>
                            <textarea id="requests" name="requests" rows="4" placeholder="Any special requests, dietary requirements, or other needs..."></textarea>
                        </div>
                       
                        <div class="form-group">
                            <label for="payment">Payment Method *</label>
                            <select id="payment" name="payment" required>
                                <option value="">Select Payment Method</option>
                                <option value="cash">Pay at Hotel (Cash)</option>
                                <option value="card">Pay at Hotel (Credit Card)</option>
                                <option value="bank">Bank Transfer</option>
                            </select>
                        </div>
                    </div>

                    <div class="terms-section">
                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="terms" name="terms" required>
                            <label for="terms">I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a> *</label>
                        </div>
                       
                        <div class="form-group checkbox-group">
                            <input type="checkbox" id="newsletter" name="newsletter">
                            <label for="newsletter">Subscribe to our newsletter for special offers and updates</label>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-large">Submit Booking Request</button>
                </form>
            </div>

            <!-- Booking Information -->
            <div class="booking-info">
                <h2>Important Information</h2>
                <div class="info-grid">
                    <div class="info-card">
                        <i class="fas fa-check-circle"></i>
                        <h4>Confirmation</h4>
                        <p>You will receive a confirmation email within 24 hours of submitting your booking request.</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-credit-card"></i>
                        <h4>Payment</h4>
                        <p>No credit card required to make a reservation. Payment is made upon arrival at the hotel.</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-clock"></i>
                        <h4>Cancellation</h4>
                        <p>Free cancellation up to 48 hours before check-in. No fees for changes or cancellations.</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-phone"></i>
                        <h4>Need Help?</h4>
                        <p>Call us at +63 917 830 4757 or email rosvenilhotel@gmail.com for assistance.</p>
                    </div>
                </div>
            </div>
        </main>
    `
};

// Function to load a page
function loadPage(pageName) {
    currentPage = pageName;
   
    // Update active navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
   
    // Set active link
    const navLinks = {
        'home': document.querySelector('nav a[onclick="loadPage(\'home\')"]'),
        'rooms': document.querySelector('nav a[onclick="loadPage(\'rooms\')"]'),
        'dining': document.querySelector('nav a[onclick="loadPage(\'dining\')"]'),
        'contact': document.querySelector('nav a[onclick="loadPage(\'contact\')"]'),
        'booking': document.querySelector('nav a[onclick="loadPage(\'booking\')"]')
    };
   
    if (navLinks[pageName]) {
        navLinks[pageName].classList.add('active');
    }
   
    // Load page content
    const pageContent = document.getElementById('page-content');
    if (pages[pageName]) {
        pageContent.innerHTML = pages[pageName];
        document.title = getPageTitle(pageName);
       
        // Re-initialize page-specific functionality
        setTimeout(() => {
            initPageFeatures();
            initGalleryScroll();
            initSupabaseForms();
            checkAvailabilityOnDateChange();
        }, 100);
    }
   
    // Close dropdown menu if open
    closeDropdownMenu();
   
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get page title
function getPageTitle(pageName) {
    const titles = {
        'home': 'Rosvenil Hotel Tacloban - Special Offers',
        'rooms': 'Rooms & Suites - Rosvenil Hotel Tacloban',
        'dining': 'Dining - Rosvenil Hotel Tacloban',
        'contact': 'Contact Us - Rosvenil Hotel Tacloban',
        'booking': 'Book Now - Rosvenil Hotel Tacloban'
    };
    return titles[pageName] || 'Rosvenil Hotel Tacloban';
}

// ====================
// 1. MENU TOGGLE FUNCTIONALITY
// ====================
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
let isMenuOpen = false;
       
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    dropdownMenu.classList.toggle('active');
    menuToggle.innerHTML = isMenuOpen ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
}
       
function closeDropdownMenu() {
    dropdownMenu.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    isMenuOpen = false;
}
       
// ====================
// 2. COOKIE BANNER
// ====================
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
const rejectCookies = document.getElementById('rejectCookies');
       
// Check if user has already made a choice
if (!localStorage.getItem('cookieChoice')) {
    cookieBanner.classList.remove('hidden');
}
       
// Accept cookies
acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'accepted');
    cookieBanner.classList.add('hidden');
});
       
// Reject cookies
rejectCookies.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'rejected');
    cookieBanner.classList.add('hidden');
});
       
// ====================
// 3. GALLERY SCROLL FUNCTIONALITY
// ====================
function initGalleryScroll() {
    const galleries = document.querySelectorAll('.scroll-gallery');
           
    galleries.forEach(gallery => {
        const track = gallery.querySelector('.gallery-track');
        const prevBtn = gallery.querySelector('.prev-btn');
        const nextBtn = gallery.querySelector('.next-btn');
        const galleryItems = track.querySelectorAll('.gallery-item');
               
        if (!track || !prevBtn || !nextBtn) return;
               
        let currentPosition = 0;
        const itemWidth = galleryItems[0].offsetWidth + 20; // 20px is the gap
        const maxScroll = track.scrollWidth - track.clientWidth;
               
        // Next button click
        nextBtn.addEventListener('click', () => {
            if (currentPosition < maxScroll) {
                currentPosition += itemWidth * 2; // Scroll by 2 items
                if (currentPosition > maxScroll) currentPosition = maxScroll;
                track.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            }
        });
               
        // Previous button click
        prevBtn.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition -= itemWidth * 2; // Scroll by 2 items
                if (currentPosition < 0) currentPosition = 0;
                track.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            }
        });
               
        // Update position on scroll
        track.addEventListener('scroll', () => {
            currentPosition = track.scrollLeft;
        });
    });
}
       
// ====================
// 4. COPY ADDRESS FUNCTIONALITY
// ====================
function initCopyAddress() {
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    if (!copyAddressBtn) return;
           
    const hotelAddress = "302 P. Burgos St, Tacloban City, Philippines";
           
    copyAddressBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(hotelAddress)
            .then(() => {
                // Show success message
                const originalText = copyAddressBtn.innerHTML;
                copyAddressBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyAddressBtn.style.background = 'linear-gradient(135deg, #28a745, #218838)';
                       
                setTimeout(() => {
                    copyAddressBtn.innerHTML = originalText;
                    copyAddressBtn.style.background = 'linear-gradient(135deg, var(--dark-gray), #333)';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy address: ', err);
                alert('Failed to copy address. Please copy manually: ' + hotelAddress);
            });
    });
}

// ====================
// SUPABASE INTEGRATION - NEW
// ====================

// Show notification
function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #28a745, #218838)' : 'linear-gradient(135deg, #dc3545, #c82333)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 2000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        min-width: 300px;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        margin-left: auto;
    `;
    
    closeBtn.addEventListener('click', () => notification.remove());
    
    setTimeout(() => {
        if (notification.parentNode) notification.remove();
    }, 5000);
}

// Add notification styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(notificationStyle);

// Initialize Supabase forms
function initSupabaseForms() {
    // Booking Form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        // Remove existing listener and add new one
        const newBookingForm = bookingForm.cloneNode(true);
        bookingForm.parentNode.replaceChild(newBookingForm, bookingForm);
        newBookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const newContactForm = contactForm.cloneNode(true);
        contactForm.parentNode.replaceChild(newContactForm, contactForm);
        newContactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.removeEventListener('submit', handleNewsletterSubmit);
        form.addEventListener('submit', handleNewsletterSubmit);
    });
}

// Handle booking form submission
async function handleBookingSubmit(e) {
    e.preventDefault();
    
    if (typeof db === 'undefined') {
        showNotification('error', 'Database not connected. Please check your Supabase configuration.');
        return;
    }
    
    const formData = {
        firstName: document.getElementById('firstName')?.value,
        lastName: document.getElementById('lastName')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        address: document.getElementById('address')?.value,
        checkIn: document.getElementById('checkIn')?.value,
        checkOut: document.getElementById('checkOut')?.value,
        roomType: document.getElementById('roomType')?.value,
        guests: document.getElementById('guests')?.value,
        rooms: document.getElementById('rooms')?.value,
        requests: document.getElementById('requests')?.value,
        payment: document.getElementById('payment')?.value
    };
    
    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'phone', 'checkIn', 'checkOut', 'roomType', 'guests', 'rooms', 'payment'];
    for (let field of required) {
        if (!formData[field]) {
            showNotification('error', `Please fill in all required fields.`);
            return;
        }
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    const result = await db.createBooking(formData);
    
    if (result.success) {
        showNotification('success', result.message);
        e.target.reset();
        
        if (result.data && result.data.booking_reference) {
            setTimeout(() => {
                showNotification('success', `Your booking reference: ${result.data.booking_reference}. Please save this for future reference.`);
            }, 3000);
        }
    } else {
        showNotification('error', result.message);
    }
    
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
}

// Handle contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();
    
    if (typeof db === 'undefined') {
        showNotification('error', 'Database not connected. Please check your Supabase configuration.');
        return;
    }
    
    const formData = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        subject: document.getElementById('subject')?.value,
        message: document.getElementById('message')?.value
    };
    
    const result = await db.submitContact(formData);
    
    if (result.success) {
        showNotification('success', result.message);
        e.target.reset();
    } else {
        showNotification('error', result.message);
    }
}

// Handle newsletter submission
async function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    if (emailInput && emailInput.value && typeof db !== 'undefined') {
        const result = await db.subscribeNewsletter(emailInput.value);
        showNotification(result.success ? 'success' : 'error', result.message);
        if (result.success) emailInput.value = '';
    } else if (typeof db === 'undefined') {
        showNotification('error', 'Database not connected. Please check your Supabase configuration.');
    }
}

// Check room availability in real-time
async function checkAvailabilityOnDateChange() {
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const roomType = document.getElementById('roomType');
    const rooms = document.getElementById('rooms');
    
    if (checkIn && checkOut && roomType && rooms && typeof db !== 'undefined') {
        const checkAvailability = async () => {
            if (checkIn.value && checkOut.value && roomType.value) {
                // Get room type ID from slug
                const roomTypes = await db.getRoomTypes();
                const selectedRoom = roomTypes.find(r => r.slug === roomType.value);
                
                if (selectedRoom) {
                    const isAvailable = await db.checkAvailability(
                        selectedRoom.id,
                        checkIn.value,
                        checkOut.value,
                        parseInt(rooms.value || 1)
                    );
                    
                    const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
                    if (submitBtn) {
                        if (!isAvailable) {
                            submitBtn.disabled = true;
                            submitBtn.style.opacity = '0.5';
                            showNotification('error', 'Selected room not available for these dates. Please choose different dates.');
                        } else {
                            submitBtn.disabled = false;
                            submitBtn.style.opacity = '1';
                        }
                    }
                }
            }
        };
        
        checkIn.removeEventListener('change', checkAvailability);
        checkOut.removeEventListener('change', checkAvailability);
        roomType.removeEventListener('change', checkAvailability);
        rooms.removeEventListener('change', checkAvailability);
        
        checkIn.addEventListener('change', checkAvailability);
        checkOut.addEventListener('change', checkAvailability);
        roomType.addEventListener('change', checkAvailability);
        rooms.addEventListener('change', checkAvailability);
    }
}

// Update room type dropdown from Supabase
async function updateRoomTypeDropdown() {
    const roomTypeSelect = document.getElementById('roomType');
    if (roomTypeSelect && typeof db !== 'undefined') {
        const rooms = await db.getRoomTypes();
        if (rooms && rooms.length > 0) {
            roomTypeSelect.innerHTML = '<option value="">Select Room Type</option>';
            rooms.forEach(room => {
                const option = document.createElement('option');
                option.value = room.slug;
                option.textContent = `${room.name} - ₱${room.price_per_night}/night (Max ${room.max_guests} guests)`;
                roomTypeSelect.appendChild(option);
            });
        }
    }
}

// Update special offers from Supabase
async function updateSpecialOffers() {
    const offersGrid = document.getElementById('offers');
    if (offersGrid && typeof db !== 'undefined') {
        const offers = await db.getSpecialOffers();
        if (offers && offers.length > 0) {
            offersGrid.innerHTML = '';
            offers.forEach(offer => {
                const offerCard = document.createElement('div');
                offerCard.className = 'offer-card';
                offerCard.innerHTML = `
                    <div class="offer-img" style="background-image: url('${offer.image_url}');"></div>
                    <div class="offer-content">
                        <h3>${offer.title}</h3>
                        <p>${offer.description}</p>
                        <div class="offer-details">
                            <p><i class="fas fa-tag"></i> <strong>Discount:</strong> ${offer.discount_percentage}% OFF</p>
                            <p><i class="fas fa-calendar-alt"></i> <strong>Valid Until:</strong> ${new Date(offer.valid_to).toLocaleDateString()}</p>
                        </div>
                        <button class="btn" onclick="loadPage('booking')">Book Now</button>
                    </div>
                `;
                offersGrid.appendChild(offerCard);
            });
        }
    }
}

// Initialize Supabase data
async function initSupabaseData() {
    if (typeof db !== 'undefined') {
        await updateRoomTypeDropdown();
        await updateSpecialOffers();
    }
}

// ====================
// 5. FORM SUBMISSION HANDLING (Original - Keep for fallback)
// ====================
function initForms() {
    // This is kept as fallback for when Supabase is not configured
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm && typeof db === 'undefined') {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
           
    // Booking Form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm && typeof db === 'undefined') {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
            bookingForm.reset();
        });
    }
}
       
// ====================
// 6. INITIALIZE PAGE FEATURES
// ====================
function initPageFeatures() {
    initGalleryScroll();
    initCopyAddress();
    initForms();
    initSupabaseForms();
    initSupabaseData();
}
       
// ====================
// 7. EVENT LISTENERS
// ====================
document.addEventListener('DOMContentLoaded', function() {
    // Load home page by default
    loadPage('home');
           
    // Menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }
           
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (dropdownMenu && !dropdownMenu.contains(e.target) && menuToggle && !menuToggle.contains(e.target)) {
            closeDropdownMenu();
        }
    });
           
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeDropdownMenu();
        }
    });
           
    // Close dropdown when clicking on a link inside it
    if (dropdownMenu) {
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeDropdownMenu();
            });
        });
    }
           
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
           
    if (header) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                   
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
                   
            lastScrollTop = scrollTop;
        });
    }
           
    // Initialize all features
    initPageFeatures();
});
