import React, { useState, useEffect } from 'react';
import { Home, PawPrint, ShoppingCart, X, Plus, Minus, CheckCircle, MapPin, Shield, Phone, Mail } from 'lucide-react';

// Notification Modal Component
const NotificationModal = ({ message, show }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white p-6 rounded-xl shadow-2xl flex items-center space-x-3 transform scale-100 transition-transform duration-300">
        <CheckCircle className="text-green-500" size={24} />
        <p className="text-lg font-semibold text-gray-800">{message}</p>
      </div>
    </div>
  );
};

// Simulated Payment Modal Component
const PaymentModal = ({ isOpen, onClose, onConfirm, bookingFee, vetName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white p-8 rounded-xl shadow-2xl z-10 max-w-md w-full text-center transform scale-100 transition-transform duration-300">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Confirm Appointment</h3>
        <p className="text-lg text-gray-700 mb-6">
          You are about to book an appointment with <span className="font-semibold">{vetName}</span>.
        </p>
        <p className="text-2xl font-extrabold text-purple-600 mb-8">
          Booking Fee: ₹{bookingFee.toFixed(2)}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Pay Now
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ setCurrentPage, currentPage }) => (
  <nav className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-white text-3xl font-bold mb-4 md:mb-0">
        Cbee
      </div>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
        <li>
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              currentPage === 'home' ? 'bg-purple-500' : ''
            }`}
          >
            <Home className="mr-2" size={20} /> Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage('vet-services')}
            className={`flex items-center text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              currentPage === 'vet-services' ? 'bg-purple-500' : ''
            }`}
          >
            <PawPrint className="mr-2" size={20} /> Vet Services
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage('pet-products')}
            className={`flex items-center text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              currentPage === 'pet-products' ? 'bg-purple-500' : ''
            }`}
          >
            <ShoppingCart className="mr-2" size={20} /> Pet Shop
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage('policy')}
            className={`flex items-center text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              currentPage === 'policy' ? 'bg-purple-500' : ''
            }`}
          >
            <Shield className="mr-2" size={20} /> Policy
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage('contact-us')}
            className={`flex items-center text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              currentPage === 'contact-us' ? 'bg-purple-500' : ''
            }`}
          >
            <Phone className="mr-2" size={20} /> Contact Us
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

// Home Page Component
function HomePage({ setCurrentPage, showNotification }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setShowContent(true);
  }, []);

  // Updated Home Page Content with Unsplash images
  const homeContent = [
    {
      id: 1,
      image: 'https://bing.com/th/id/BCO.3d9f6caf-72b9-45fb-af42-31b86e04e62c.png',
      title: 'Expert Vet Care',
      description: 'Find trusted veterinarians near you for all your pet\'s health needs. Book appointments easily and get quick advice.',
      linkText: 'Find a Vet',
      linkPage: 'vet-services'
    },
    {
      id: 2,
      image: 'https://bing.com/th/id/BCO.3d232107-7054-4a85-bc6f-26fbc8f27afb.png',
      title: 'Shop Pet Products',
      description: 'Explore a wide range of high-quality food, toys, and accessories for your beloved companions.',
      linkText: 'Visit Pet Shop',
      linkPage: 'pet-products'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 flex flex-col items-center p-4">
      {/* Hero Section */}
      <div className={`text-center max-w-5xl bg-white p-8 rounded-3xl shadow-2xl transition-all duration-1000 transform ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} mb-12 mt-8 hover:scale-102`}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-pink-600">Cbee</span>!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Your adorable hub for all things pets. Discover, connect, and share the love!
        </p>
      </div>

      {/* Dynamic Scroll Section - Featured Content */}
      <div className={`container mx-auto mt-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Discover <span className="text-pink-600">Our Services & Products</span>
        </h2>
        {/* Adjusted grid/flex for spacing and positioning */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-x-24 gap-y-8 mt-8 w-full">
          {homeContent.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white p-6 rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 delay-${index * 100} hover:scale-105
              w-80 flex flex-col justify-between`}
              style={{ opacity: showContent ? 1 : 0, transform: showContent ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-3xl mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/F0F4F8/333?text=${encodeURIComponent(item.title)}`; }}
              />
              <div className="p-0 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base mb-4 flex-grow">{item.description}</p>
                <button
                  onClick={() => setCurrentPage(item.linkPage)}
                  className="mt-auto bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-600 transition-colors duration-200"
                >
                  {item.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Vet Services Page Component
function VetServicesPage({ showNotification }) {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedVet, setSelectedVet] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoadingChat, setIsLoadingChat] = useState(false);

  const BOOKING_FEE = 50; // Define the booking fee

  // Vet Data (moved here for encapsulation)
  const vets = [
    // Mumbai Vets
    { id: 1, name: 'Dr. Priya Sharma', specialty: 'Canine Health', location: 'Mumbai', image: 'https://placehold.co/100x100/A7F3D0/10B981?text=Dr.+Sharma', description: 'Experienced in dog behavior and general health.' },
    { id: 5, name: 'Dr. Rahul Kumar', specialty: 'Small Animal Medicine', location: 'Mumbai', image: 'https://placehold.co/100x100/BFDBFE/3B82F6?text=Dr.+Kumar', description: 'Expert in internal medicine for small animals.' },
    { id: 6, name: 'Dr. Sneha Patel', specialty: 'Dermatology', location: 'Mumbai', image: 'https://placehold.co/100x100/FFEDD5/F97316?text=Dr.+Patel', description: 'Specializes in skin and coat conditions.' },
    { id: 7, name: 'Dr. Arjun Reddy', specialty: 'Orthopedics', location: 'Mumbai', image: 'https://placehold.co/100x100/FECACA/EF4444?text=Dr.+Reddy', description: 'Focuses on bone and joint health.' },
    { id: 8, name: 'Dr. Meera Desai', specialty: 'Preventive Care', location: 'Mumbai', image: 'https://placehold.co/100x100/D1FAE5/047857?text=Dr.+Desai', description: 'Dedicated to vaccinations and routine check-ups.' },
    { id: 9, name: 'Dr. Vikram Rao', specialty: 'Ophthalmology', location: 'Mumbai', image: 'https://placehold.co/100x100/E0F7FA/2196F3?text=Dr.+Rao', description: 'Specialist in eye health and vision care.' },

    // Delhi Vets
    { id: 2, name: 'Dr. Rohan Gupta', specialty: 'Feline Specialist', location: 'Delhi', image: 'https://placehold.co/100x100/BFDBFE/3B82F6?text=Dr.+Gupta', description: 'Dedicated to the well-being of cats of all ages.' },
    { id: 10, name: 'Dr. Pooja Verma', specialty: 'Dental Care', location: 'Delhi', image: 'https://placehold.co/100x100/A7F3D0/10B981?text=Dr.+Verma', description: 'Provides comprehensive dental services for pets.' },
    { id: 11, name: 'Dr. Sanjeev Singh', specialty: 'Cardiology', location: 'Delhi', image: 'https://placehold.co/100x100/FFEDD5/F97316?text=Dr.+Singh', description: 'Heart specialist for all types of pets.' },
    { id: 12, name: 'Dr. Ritu Agarwal', specialty: 'Nutrition', location: 'Delhi', image: 'https://placehold.co/100x100/FECACA/EF4444?text=Dr.+Agarwal', description: 'Offers dietary advice and weight management plans.' },
    { id: 13, name: 'Dr. Alok Yadav', specialty: 'Behavioral Therapy', location: 'Delhi', image: 'https://placehold.co/100x100/D1FAE5/047857?text=Dr.+Yadav', description: 'Helps with pet behavioral issues and training.' },
    { id: 14, name: 'Dr. Neha Kapoor', specialty: 'Geriatric Care', location: 'Delhi', image: 'https://placehold.co/100x100/E0F7FA/2196F3?text=Dr.+Kapoor', description: 'Specialized care for senior pets.' },

    // Bengaluru Vets
    { id: 3, name: 'Dr. Anjali Singh', specialty: 'Exotic Pets', location: 'Bengaluru', image: 'https://placehold.co/100x100/FFEDD5/F97316?text=Dr.+Singh', description: 'Specializes in reptiles, birds, and small mammals.' },
    { id: 15, name: 'Dr. Karthik Rao', specialty: 'Surgery', location: 'Bengaluru', image: 'https://placehold.co/100x100/A7F3D0/10B981?text=Dr.+Rao', description: 'Experienced surgeon for various pet procedures.' },
    { id: 16, name: 'Dr. Divya Menon', specialty: 'Oncology', location: 'Bengaluru', image: 'https://placehold.co/100x100/BFDBFE/3B82F6?text=Dr.+Menon', description: 'Cancer treatment and support for pets.' },
    { id: 17, name: 'Dr. Suresh Babu', specialty: 'Emergency Vet', location: 'Bengaluru', image: 'https://placehold.co/100x100/FECACA/EF4444?text=Dr.+Babu', description: 'Provides urgent and critical care services.' },
    { id: 18, name: 'Dr. Deepika Sharma', specialty: 'Reproductive Health', location: 'Bengaluru', image: 'https://placehold.co/100x100/D1FAE5/047857?text=Dr.+Sharma', description: 'Focuses on breeding and reproductive issues.' },
    { id: 19, name: 'Dr. Vishal Gowda', specialty: 'Acupuncture', location: 'Bengaluru', image: 'https://placehold.co/100x100/E0F7FA/2196F3?text=Dr.+Gowda', description: 'Alternative therapy for pain management.' },

    // Chennai Vets
    { id: 4, name: 'Dr. Vivek Kumar', specialty: 'Emergency Vet', location: 'Chennai', image: 'https://placehold.co/100x100/FECACA/EF4444?text=Dr.+Kumar', description: 'Available for urgent care and critical pet conditions.' },
    { id: 20, name: 'Dr. Lakshmi Devi', specialty: 'Holistic Vet', location: 'Chennai', image: 'https://placehold.co/100x100/A7F3D0/10B981?text=Dr.+Devi', description: 'Integrative approach to pet health and wellness.' },
    { id: 21, name: 'Dr. Bharath Raj', specialty: 'Internal Medicine', location: 'Chennai', image: 'https://placehold.co/100x100/BFDBFE/3B82F6?text=Dr.+Raj', description: 'Diagnoses and treats complex internal diseases.' },
    { id: 22, name: 'Dr. Shanti Rao', specialty: 'Dermatology', location: 'Chennai', image: 'https://placehold.co/100x100/FFEDD5/F97316?text=Dr.+Rao', description: 'Specialist in skin allergies and conditions.' },
    { id: 23, name: 'Dr. Murali Krishna', specialty: 'Pediatrics', location: 'Chennai', image: 'https://placehold.co/100x100/D1FAE5/047857?text=Dr.+Krishna', description: 'Specialized care for puppies and kittens.' },
    { id: 24, name: 'Dr. Kavita Nair', specialty: 'Radiology', location: 'Chennai', image: 'https://placehold.co/100x100/E0F7FA/2196F3?text=Dr.+Nair', description: 'Expert in diagnostic imaging (X-rays, ultrasound).' },
  ];

  const locations = ['All', 'Mumbai', 'Delhi', 'Bengaluru', 'Chennai'];

  const filteredVets = vets.filter(vet =>
    selectedLocation === 'All' || vet.location === selectedLocation
  );

  const handleBookAppointmentClick = (vet) => {
    setSelectedVet(vet);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentConfirm = () => {
    setIsPaymentModalOpen(false);
    showNotification(`Appointment with ${selectedVet.name} booked successfully! (₹${BOOKING_FEE.toFixed(2)} charged)`);
    setSelectedVet(null); // Clear selected vet
  };

  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
    showNotification('Appointment booking cancelled.');
    setSelectedVet(null); // Clear selected vet
  };

  // Function to call Gemini API for pet advice
  const getPetAdvice = async () => {
    if (!chatInput.trim()) {
      setChatResponse('Please type your question.');
      return;
    }

    setIsLoadingChat(true);
    setChatResponse('Thinking...');

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: `Provide general pet care advice for the following question: ${chatInput}. Keep it concise and emphasize that this is not a substitute for professional veterinary advice.` }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setChatResponse(text);
      } else {
        setChatResponse('Sorry, I could not get advice at this time. Please try again.');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setChatResponse('An error occurred while fetching advice. Please try again later.');
    } finally {
      setIsLoadingChat(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Find a <span className="text-pink-600">Vet Near You</span>
        </h2>

        {/* Location Selection */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-10 gap-4">
          <label htmlFor="location-select" className="text-xl font-medium text-gray-700">
            Select Location:
          </label>
          <div className="relative w-full sm:w-auto">
            <select
              id="location-select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 pr-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <MapPin size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVets.length === 0 ? (
            <p className="col-span-full text-center text-gray-600 text-xl">No vets found for this location.</p>
          ) : (
            filteredVets.map((vet) => (
              <div key={vet.id} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center bg-blue-100 rounded-full w-24 h-24 mx-auto mb-6 overflow-hidden">
                  <img
                    src={vet.image}
                    alt={vet.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/BFDBFE/3B82F6?text=${encodeURIComponent(vet.name.split(' ').map(n => n[0]).join(''))}`; }}
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{vet.name}</h3>
                <p className="text-purple-600 text-xl font-semibold mb-3 text-center">{vet.specialty}</p>
                <p className="text-gray-700 text-lg text-center mb-4">{vet.description}</p>
                <p className="text-gray-500 text-md text-center flex items-center justify-center">
                  <MapPin className="mr-2" size={18} /> {vet.location}
                </p>
                <div className="text-center mt-6">
                  <button
                    onClick={() => handleBookAppointmentClick(vet)}
                    className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Pet Advice Section (LLM Integration) */}
      <div className="container mx-auto mt-16 bg-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Quick <span className="text-pink-600">Pet Advice ✨</span>
        </h3>
        <p className="text-center text-gray-700 mb-6">
          Ask a general question about pet care and get instant advice.
          <br />
          <span className="font-semibold text-red-500">Note: This advice is general and not a substitute for professional veterinary consultation.</span>
        </p>
        <div className="flex flex-col space-y-4">
          <textarea
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="4"
            placeholder="e.g., 'What are common signs of a sick cat?' or 'How often should I groom my dog?'"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          ></textarea>
          <button
            onClick={getPetAdvice}
            disabled={isLoadingChat}
            className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoadingChat ? 'Getting Advice...' : 'Get Advice ✨'}
          </button>
          {chatResponse && (
            <div className="bg-gray-100 p-4 rounded-lg mt-4 border border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Advice:</p>
              <p className="text-gray-700 whitespace-pre-wrap">{chatResponse}</p>
            </div>
          )}
        </div>
      </div>

      {selectedVet && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={handlePaymentCancel}
          onConfirm={handlePaymentConfirm}
          bookingFee={BOOKING_FEE}
          vetName={selectedVet.name}
        />
      )}
    </div>
  );
}

// Pet Products Page Component
function PetProductsPage({ cart, setCart, showNotification }) {
  // Pet Products data (moved here for encapsulation)
  const products = [
    { id: 2, name: 'Interactive Cat Toy', price: 650, description: 'A vibrant, feather-filled toy designed to stimulate your cat\'s natural hunting instincts and provide endless hours of playful engagement.', image: 'https://bing.com/th/id/BCO.b6395632-57e2-49a7-b762-acf9b442a1f8.png' },
    { id: 3, name: 'Comfort Pet Bed', price: 3500, description: 'Luxurious and orthopedic pet bed, crafted with memory foam for superior comfort and support, ensuring your furry friend gets the best rest.', image: 'https://bing.com/th/id/BCO.a1e85a7f-e8d0-4d39-9a46-0bc009d1cb6c.png' },
    { id: 4, name: 'Pet Grooming Kit', price: 1800, description: 'An all-in-one grooming solution with professional-grade brushes, combs, and clippers to keep your pet\'s coat healthy, shiny, and tangle-free.', image: 'https://bing.com/th/id/BCO.8cf643d5-6f6e-43f9-b9b2-fa93822f28da.png' },
    { id: 6, name: 'Fish Tank Decor', price: 750, description: 'Enhance your aquatic environment with realistic and safe fish tank decorations, creating a vibrant and stimulating underwater landscape for your fish.', image: 'https://bing.com/th/id/BCO.cca81caa-c36b-4374-af7d-12b5e31d7a61.png' },
  ];

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showNotification(`Added ${product.name} to cart!`);
  };

  // Function to update item quantity in cart
  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      ).filter(item => item.quantity > 0); // Remove if quantity becomes 0 or less
      return updatedCart;
    });
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showNotification('Item removed from cart.');
  };

  // Calculate total cart price
  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our <span className="text-pink-600">Pet Shop</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-3xl"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/F0F4F8/333?text=${encodeURIComponent(product.name)}`; }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-700 text-base mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 text-3xl font-extrabold">₹{product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Cart Section */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-8 text-center">
            Your <span className="text-purple-600">Cart</span>
          </h3>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">Your cart is empty. Start shopping for your pets!</p>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-2xl shadow-md">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl mr-4"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/F0F4F8/333?text=${encodeURIComponent(item.name)}`; }}
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-gray-600">₹{item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="text-xl font-bold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        <Plus size={18} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 border-gray-200 pt-6 mt-6">
                <span className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-0">Total: <span className="text-purple-600">₹{totalCartPrice.toFixed(2)}</span></span>
                <button
                  onClick={() => showNotification('Proceeding to secure checkout... (Not implemented)')}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Contact Us Page Component
function ContactUsPage({ showNotification }) {
  // Removed formData state and handleChange/handleSubmit functions
  const CONTACT_EMAIL = 'cbee69a@gmail.com';
  const CONTACT_PHONE = '+91 9019301910'; // Updated mobile number

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Get in <span className="text-purple-600">Touch</span>
        </h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            For any inquiries, please reach us via email or phone:
          </p>

          <p className="text-2xl font-bold text-gray-900 flex items-center justify-center mb-4">
            <Mail className="mr-3 text-pink-600" size={30} />
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-600 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>

          <p className="text-2xl font-bold text-gray-900 flex items-center justify-center mb-6">
            <Phone className="mr-3 text-pink-600" size={30} />
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-purple-600 hover:underline">
              {CONTACT_PHONE}
            </a>
          </p>

          {/* Removed social media and FAQs links as per simplification */}
          {/*
          <div className="flex justify-center space-x-6 mt-6">
            <button onClick={() => showNotification('Redirecting to Facebook...')} className="text-purple-600 hover:text-pink-600 transition-colors duration-200">
              <Facebook size={36} />
            </button>
            <button onClick={() => showNotification('Redirecting to Instagram...')} className="text-purple-600 hover:text-pink-600 transition-colors duration-200">
              <Instagram size={36} />
            </button>
            <button onClick={() => showNotification('Redirecting to Twitter...')} className="text-purple-600 hover:text-pink-600 transition-colors duration-200">
              <Twitter size={36} />
            </button>
          </div>
          <button
            onClick={() => showNotification('Redirecting to FAQs...')}
            className="mt-8 text-purple-600 hover:underline font-semibold text-lg"
          >
            Visit our FAQs for quick answers
          </button>
          */}
        </div>
      </div>
    </div>
  );
}

// Policy Page Component (formerly PortfolioPage)
function PolicyPage({ showNotification }) {
  // Directly embed the policy text
  const policyText = `
    OVERVIEW

    Terms of service

    Welcome to Cbee! Managed by Anirudh Athreya M. The terms "we", "us" and "our" refer
     to Cbee. Cbee operates this website, including all related information, content, features,
     tools, products and services in order to provide you, the customer, with a curated
     shopping experience (the "Services"). Cbee is powered by PHP, which enables us to
     provide the Services to you.

    The below terms and conditions, together with any policies referenced herein (these
     "Terms of Service" or "Terms") describe your rights and responsibilities when you use
     the Services.

    Please read these Terms of Service carefully, as they include important information
     about your legal rights and cover areas such as warranty disclaimers and limitations of
     liability.

    By visiting, interacting with or using our Services, you agree to be bound by these
     Terms of Service and our Privacy Policy.. If you do not agree to these Terms of Service
     or Privacy Policy, you should not use or access our Services.

    SECTION 1 - ACCESS AND ACCOUNT

    By agreeing to these Terms of Service, you represent that you are at least the age of
     majority in your state or province of residence, and you have given us your consent to
     allow any of your minor dependents to use the Services on devices you own, purchase
     or manage.

    To use the Services, including accessing or browsing our online stores or purchasing
     any of the products or services we offer, you may be asked to provide certain
     information, such as your email address, billing, payment, and shipping information. You
     represent and warrant that all the information you provide in our stores is correct,
     current and complete and that you have all rights necessary to provide this information.
     You are solely responsible for maintaining the security of your account credentials and
     for all of your account activity. You may not transfer, sell, assign, or license your account
     to any other person.

    SECTION 2 - OUR PRODUCTS

    We have made every effort to provide an accurate representation of our products and
     services in our online stores. However, please note that colors or product appearance
     may differ from how they may appear on your screen due to the type of device you use
     to access the store and your device settings and configuration.

    We do not warrant that the appearance or quality of any products or services purchased
     by you will meet your expectations or be the same as depicted or rendered in our online
     stores.

    All descriptions of products are subject to change at any time without notice at our sole
     discretion. We reserve the right to discontinue any product at any time and may limit the
     quantities of any products that we offer to any person, geographic region or jurisdiction,
     on a case-by-case basis.

    SECTION 3 - ORDERS

    When you place an order, you are making an offer to purchase. Cbee reserves the right
     to accept or decline your order for any reason at its discretion. Your order is not
     accepted until Cbee confirms acceptance. We must receive and process your payment
     before your order is accepted. Please review your order carefully before submitting, as
     Cbee may be unable to accommodate cancellation requests after an order is accepted.
     In the event that we do not accept, make a change to, or cancel an order, we will
     attempt to notify you by contacting the e-mail, billing address, and/or phone number
     provided at the time the order was made.

    Your purchases are subject to return or exchange solely in accordance with our Refund
     Policy ..

    You represent and warrant that your purchases are for your own personal or household
     use and not for commercial resale or export.

    SECTION 4 - PRICES AND BILLING

    Prices, discounts and promotions are subject to change without notice. The price
     charged for a product or service will be the price in effect at the time the order is placed
     and will be set out in your order confirmation email. Unless otherwise expressly stated,
     posted prices do not include taxes, shipping, handling, customs or import charges.
     Prices posted in our online stores may be different from prices offered in physical stores
     or in online or other stores operated by third parties. We may offer, from time to time,
     promotions on the Services that may affect pricing and that are governed by terms and
     conditions separate from these Terms. If there is a conflict between the terms for a
     promotion and these Terms, the promotion terms will govern.

    You agree to provide current, complete and accurate purchase, payment and account
     information for all purchases made at our stores. You agree to promptly update your
     account and other information, including your email address, credit card numbers and
     expiration dates, so that we can complete your transactions and contact you as needed.
     You represent and warrant that (i) the credit card information you provide is true,
     correct, and complete, (ii) you are duly authorized to use such credit card for the
     purchase, (iii) charges incurred by you will be honored by your credit card company, and
     (iv) you will pay charges incurred by you at the posted prices, including shipping and
     handling charges and all applicable taxes, if any.

    SECTION 5 - SHIPPING AND DELIVERY

    We are not liable for shipping and delivery delays. All delivery times are estimates only
     and are not guaranteed. We are not responsible for delays caused by shipping carriers,
     customs processing, or events outside our control. Once we transfer products to the
     carrier, title and risk of loss passes to you.

    SECTION 6 INTELLECTUAL PROPERTY

    Our Services, including but not limited to all trademarks, brands, text, displays, images,
     graphics, product reviews, video, and audio, and the design, selection, and
     arrangement thereof, are owned by Cbee, its affiliates or licensors and are protected by
     U.S. and foreign patent, copyright and other intellectual property laws.
     These Terms permit you to use the Services for your personal, non-commercial use
     only. You must not reproduce, distribute, modify, create derivative works of, publicly
     display, publicly perform, republish, download, store, or transmit any of the material on
     the Services without our prior written consent. Except as expressly provided herein,
     nothing in these Terms grants or shall be construed as granting a license or other rights
     to you under any patent, trademark, copyright, or other intellectual property of Cbee,
     PHP or any third party. Unauthorized use of the Services may be a violation of federal
     and state intellectual property laws. All rights not expressly granted herein are reserved
     by Cbee.

    Cbee's names, logos, product and service names, designs, and slogans are trademarks
     of Cbee or its affiliates or licensors. You must not use such trademarks without the prior
     written permission of Cbee. PHP's name, logo, product and service names, designs and
     slogans are trademarks of PHP. All other names, logos, product and service names,
     designs, and slogans on the Services are the trademarks of their respective owners.

    SECTION 7 - OPTIONAL TOOLS

    You may be provided with access to customer tools offered by third parties as part of
     the Services, which we neither monitor nor have any control nor input.
     You acknowledge and agree that we provide access to such tools "as is" and "as
     available" without any warranties, representations or conditions of any kind and without
     any endorsement. We shall have no liability whatsoever arising from or relating to your
     use of optional third-party tools.

    Any use by you of the optional tools offered through the site is entirely at your own risk
     and discretion and you should ensure that you are familiar with and approve of the
     terms on which tools are provided by the relevant third-party provider(s).
     We may also, in the future, offer new features through the Services (including the
     release of new tools and resources). Such new features shall also be deemed part of
     the Services and are subject to these Terms of Service.

    SECTION 8 - THIRD-PARTY LINKS

    The Services may contain materials and hyperlinks to websites provided or operated by
     third parties (including any embedded third party functionality). We are not responsible
     for examining or evaluating the content or accuracy of any third-party materials or
     websites you choose to access. If you decide to leave the Services to access these
     materials or third party sites, you do so at your own risk.

    We are not liable for any harm or damages related to your access of any third-party
     websites, or your purchase or use of any products, services, resources, or content on
     any third-party websites. Please review carefully the third-party's policies and practices
     and make sure you understand them before you engage in any transaction. Complaints,
     claims, concerns, or questions regarding third-party products and services should be
     directed to the third-party.

    SECTION 9 - RELATIONSHIP WITH PHP

    [NOTE TO MERCHANT: This section accurately characterizes PHP's relationship with
     your store and should not be removed or modified.]

    Cbee is powered by PHP, which enables us to provide the Services to you. However,
     any sales and purchases you make in our Store are made directly with Cbee. By using
     the Services, you acknowledge and agree that PHP is not responsible for any aspect of
     any sales between you and Cbee, including any injury, damage, or loss resulting from
     purchased products and services. You hereby expressly release PHP and its affiliates
     from all claims, damages, and liabilities arising from or related to your purchases and
     transactions with Cbee.

    SECTION 10 - PRIVACY POLICY

    All personal information we collect through the Services is subject to our Privacy Policy,
     and certain personal information may be subject to PHP's Privacy Policy, which can be
     viewed. By using the Services, you acknowledge that you have read these privacy
     policies.

    Because the Services are hosted by PHP, PHP collects and processes personal
     information about your access to and use of the Services in order to provide and
     improve the Services for you. Information you submit to the Services will be transmitted
     to and shared with PHP as well as third parties that may be located in other countries
     than where you reside, in order to provide services to you. Review our privacy policy.
     for more details on how we, PHP, and our partners use your personal information.

    SECTION 11 - FEEDBACK

    If you submit, upload, post, email, or otherwise transmit any ideas, suggestions,
     feedback, reviews, proposals, plans, or other content (collectively, "Feedback"), you
     grant us a perpetual, worldwide, sublicensable, royalty-free license to use, reproduce,
     modify, publish, distribute and display such Feedback in any medium for any purpose,

    including for commercial use. We may, for example, use our rights under this license to
     operate, provide, evaluate, enhance, improve and promote the Services and to perform
     our obligations and exercise our rights under the Terms of Service.

    You also represent and warrant that: (i) you own or have all necessary rights to all
     Feedback; (ii) you have disclosed any compensation or incentives received in
     connection with your submission of Feedback; and (iii) your Feedback will comply with
     these Terms. We are and shall be under no obligation (1) to maintain your Feedback in
     confidence; (2) to pay compensation for your Feedback; or (3) to respond to your
     Feedback.

    We may, but have no obligation to, monitor, edit or remove Feedback that we determine
     in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory,
     pornographic, obscene or otherwise objectionable or violates any party's intellectual
     property or these Terms of Service.

    You agree that your Feedback will not violate any right of any third-party, including
     copyright, trademark, privacy, personality or other personal or proprietary right. You
     further agree that your Feedback will not contain libelous or otherwise unlawful, abusive
     or obscene Feedback, or contain any computer virus or other malware that could in any
     way affect the operation of the Services or any related website. You may not use a false
     email address, pretend to be someone other than yourself, or otherwise mislead us or
     third-parties as to the origin of any Feedback. You are solely responsible for any
     Feedback you make and its accuracy. We take no responsibility and assume no liability
     for any Feedback posted by you or any third-party.

    SECTION 12 - ERRORS, INACCURACIES AND OMISSIONS

    Occasionally there may be information on or in the Services that contain typographical
     errors, inaccuracies or omissions that may relate to product descriptions, pricing,
     promotions, offers, product shipping charges, transit times and availability. We reserve
     the right to correct any errors, inaccuracies or omissions, and to change or update
     information or cancel orders if any information is inaccurate at any time without prior
     notice (including after you have submitted your order).

    SECTION 13 - PROHIBITED USES

    You may access and use the Services for lawful purposes only. You may not access or
     use the Services, directly or indirectly: (a) for any unlawful or malicious purpose; (b) to
     violate any international, federal, provincial or state regulations, rules, laws, or local
     ordinances; (c) to infringe upon or violate our intellectual property rights or the

    intellectual property rights of others; (d) to harass, abuse, insult, harm, defame, slander,
     disparage, intimidate, or harm any of our employees or any other person; (e) to transmit
     false or misleading information; (f) to send, knowingly receive, upload, download, use,
     or re-use any material that does not comply with the these Terms; (g) to transmit, or
     procure the sending of, any advertising or promotional material, including any "junk


    --- PAGE 6 ---

    mail," "chain letter," "spam," or any other similar solicitation; (h) to impersonate or
     attempt to impersonate any other person or entity; or (i) to engage in any other conduct
     that restricts or inhibits anyone's use or enjoyment of the Services, or which, as
     determined by us, may harm Cbee, PHP or users of the Services, or expose them to
     liability.

    In addition, you agree not to: (a) upload or transmit viruses or any other type of
     malicious code that will or may be used in any way that will affect the functionality or
     operation of the Services; (b) reproduce, duplicate, copy, sell, resell or exploit any
     portion of the Services; (c) collect or track the personal information of others; (d) spam,
     phish, pharm, pretext, spider, crawl, or scrape; or (e) interfere with or circumvent the
     security features of the Services or any related website, other websites, or the Internet.
     We reserve the right to suspend, disable, or terminate your account at any time, without
     notice, if we determine that you have violated any part of these Terms.

    SECTION 14 - TERMINATION

    We may terminate this agreement or your access to the Services (or any part thereof) in
     our sole discretion at any time without notice, and you will remain liable for all amounts
     due up to and including the date of termination.

    The following sections will continue to apply following any termination: Intellectual
     Property, Feedback, Termination, Disclaimer of Warranties, Limitation of Liability,
     Indemnification, Severability, Waiver; Entire Agreement, Assignment, Governing Law,
     Privacy Policy, and any other provisions that by their nature should survive termination.

    SECTION 15-DISCLAIMER OF WARRANTIES

    The information presented on or through the Services is made available solely for
     general information purposes. We do not warrant the accuracy, completeness, or
     usefulness of this information. Any reliance you place on such information is strictly at
     own risk. We disclaim all liability and responsibility arising from any reliance placed
     on such materials by you or any other visitor to the Services, or by anyone who may be
     informed of any of its contents.

    EXCEPT AS EXPRESSLY STATED BY Cbee, THE SERVICES AND ALL PRODUCTS
     OFFERED THROUGH THE SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE'
     FOR YOUR USE, WITHOUT ANY REPRESENTATION, WARRANTIES OR
     CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ALL
     IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY,

    MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, DURABILITY,
     TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE, REPRESENT OR
     WARRANT THAT YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED,
     TIMELY, SECURE OR ERROR-FREE. SOME JURISDICTIONS LIMIT OR DO NOT
     ALLOW THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES SO THE ABOVE
     DISCLAIMER MAY NOT APPLY TO YOU.


    --- PAGE 7 ---

    SECTION 16 - LIMITATION OF LIABILITY

    TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO CASE SHALL Cbee, OUR
     PARTNERS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS,
     CONTRACTORS, SERVICE PROVIDERS OR LICENSORS, OR THOSE OF PHP AND
     ITS AFFILIATES, BE LIABLE FOR ANY INJURY, LOSS, CLAIM, OR ANY DIRECT,
     INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES OF
     ANY KIND, INCLUDING, WITHOUT LIMITATION, LOST PROFITS, LOST REVENUE,
     LOST SAVINGS, LOSS OF DATA, REPLACEMENT COSTS, OR ANY SIMILAR
     DAMAGES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE),
     STRICT LIABILITY OR OTHERWISE, ARISING FROM YOUR USE OF ANY OF THE
     SERVICES OR ANY PRODUCTS PROCURED USING THE SERVICES, OR FOR ANY
     OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF THE SERVICES OR ANY
     PRODUCT, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN
     ANY CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
     RESULT OF THE USE OF THE SERVICES OR ANY CONTENT (OR PRODUCT)
     POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES,
     EVEN IF ADVISED OF THEIR POSSIBILITY.

    SECTION 17 - INDEMNIFICATION

    You agree to indemnify, defend and hold harmless Cbee, PHP, and our affiliates,
     partners, officers, directors, employees, agents, contractors, licensors, and service
     providers from any losses, damages, liabilities or claims, including reasonable
     attorneys' fees, payable to any third party due to or arising out of (1) your breach of
     these Terms of Service or the documents they incorporate by reference, (2) your
     violation of any law or the rights of a third party, or (3) your access to and use of the
     Services.

    We will notify you of any indemnifiable claim, provided that a failure to promptly notify
     will not relieve you of your obligations unless you are materially prejudiced. We may
     control the defense and settlement of such claim at your expense, including choice of
     counsel, but will not settle any claim requiring non-monetary obligations from you
     without your consent (not to be unreasonably withheld). You will cooperate in the
     defense of indemnified claims, including by providing relevant documents.

    SECTION 18 - SEVERABILITY

    In the event that any provision of these Terms of Service is determined to be unlawful,
     void or unenforceable, such provision shall nonetheless be enforceable to the fullest
     extent permitted by applicable law, and the unenforceable portion shall be deemed to be
     severed from these Terms of Service, such determination shall not affect the validity and
     enforceability of any other remaining provisions.


    --- PAGE 8 ---

    SECTION 19 - WAIVER; ENTIRE AGREEMENT

    The failure of us to exercise or enforce any right or provision of these Terms of Service
     shall not constitute a waiver of such right or provision.

    These Terms of Service and any policies or operating rules posted by us on this site or
     in respect to the Service constitutes the entire agreement and understanding between
     you and us and governs your use of the Service, superseding any prior or

    contemporaneous agreements, communications and proposals, whether oral or written,
     between you and us (including, but not limited to, any prior versions of the Terms of
     Service).

    Any ambiguities in the interpretation of these Terms of Service shall not be construed
     against the drafting party.

    SECTION 20 - ASSIGNMENT

    You may not delegate, transfer or assign this Agreement or any of your rights or
     obligations under these Terms without our prior written consent, and any such attempt
     will be null and void. We may transfer, assign, or delegate these Terms and our rights
     and obligations without consent or notice to you.

    SECTION 21 - GOVERNING LAW

    These Terms of Service and any separate agreements whereby we provide you
     Services shall be governed by and construed in accordance with the federal and state
     or territorial courts (Maharsatra, India) in the jurisdiction where Cbee is headquartered.
     You and Cbee consent to venue and personal jurisdiction in such

    courts (MAHARASTRA, INDIA).

    SECTION 22 - HEADINGS

    The headings used in this agreement are included for convenience only and will not limit
     or otherwise affect these Terms.

    SECTION 23-CHANGES TO TERMS OF SERVICE

    You can review the most current version of the Terms of Service at any time on this
     page.

    We reserve the right, in our sole discretion, to update, change, or replace any part of
     these Terms of Service by posting updates and changes to our website. It is your

    responsibility to check our website periodically for changes. We will notify you of any
     material changes to these Terms in accordance with applicable law, and such changes
     will be effective on the date specified in the notice. Your continued use of or access to
     the Services following the posting of any changes to these Terms of Service constitutes
     acceptance of those changes.

    SECTION 24 - CONTACT INFORMATION


    Questions about the Terms of Service should be sent to us at Email id :
     cbee69a@gmail.com.

    Return and refund policy

    No cancellation and No refund will be provided once the payment has been made for
     the services.

    Privacy policy

    Last updated: June 18, 2025

    Cbee operates this store and website, including all related information, content,
     features, tools, products and services, in order to provide you, the customer, with a
     curated shopping experience (the "Services"). Cbee is powered by PHP, which enables
     us to provide the Services to you. This Privacy Policy describes how we collect, use,
     and disclose your personal information when you visit, use, or make a purchase or other
     transaction using the Services or otherwise communicate with us. If there is a conflict
     between our Terms of Service and this Privacy Policy, this Privacy Policy controls with
     respect to the collection, processing, and disclosure of your personal information.

    Please read this Privacy Policy carefully. By using and accessing any of the Services,
     you acknowledge that you have read this Privacy Policy and understand the collection,
     use, and disclosure of your information as described in this Privacy Policy.

    Personal Information We Collect or Process

    When we use the term "personal information," we are referring to information that
     identifies or can reasonably be linked to you or another person. Personal information
     does not include information that is collected anonymously or that has been
     de-identified, so that it cannot identify or be reasonably linked to you. We may collect or
     process the following categories of personal information, including inferences drawn
     from this personal information, depending on how you interact with the Services, where
     you live, and as permitted or required by applicable law:

    • Contact details including your name, address, billing address, shipping address,
     phone number, and email address.

    • Financial information including credit card, debit card, and financial account
     numbers, payment card information, financial account information, transaction
     details, form of payment, payment confirmation and other payment details.
     Account information including your username, password, security questions,
     preferences and settings.

    • Transaction information including the items you view, put in your cart, add to
     your wishlist, or purchase, return, exchange or cancel and your past transactions.
     Communications with us including the information you include in

    communications with us, for example, when sending a customer support inquiry.
     • Device information including information about your device, browser, or network
     connection, your IP address, and other unique identifiers.

    • Usage information including information regarding your interaction with the
     Services, including how and when you interact with or navigate the Services.

    Personal Information Sources

    We may collect personal information from the following sources:

    • Directly from you including when you create an account, visit or use the
     Services, communicate with us, or otherwise provide us with your personal
     information;

    • Automatically through the Services including from your device when you use
     our products or services or visit our websites, and through the use of cookies and
     similar technologies;

    • From our service providers including when we engage them to enable certain
     technology and when they collect or process your personal information on our
     behalf;

    From our partners or other third parties.

    How We Use Your Personal Information

    Depending on how you interact with us or which of the Services you use, we may use
     personal information for the following purposes:

    • Provide, Tailor, and Improve the Services. We use your personal information
     to provide you with the Services, including to perform our contract with you, to
     process your payments, to fulfill your orders, to remember your preferences and
     items you are interested in in, to send notifications to you related to your account, to

    process purchases, returns, exchanges or other transactions, to create, maintain
     and otherwise manage your account, to arrange for shipping, to facilitate any
     returns and exchanges, to enable you to post reviews, and to create a
     customized shopping experience for you, such as recommending products
     related to your purchases. This may include using your personal information to
     better tailor and improve the Services.

    • Marketing and Advertising. We use your personal information for marketing
     and promotional purposes, such as to send marketing, advertising and
     promotional communications by email, text message or postal mail, and to show
     you online advertisements for products or services on the Services or other
     websites, including based on items you previously have purchased or added to
     your cart and other activity on the Services.

    • Security and Fraud Prevention. We use your personal information to
     authenticate your account, to provide a secure payment and shopping
     experience, detect, investigate or take action regarding possible fraudulent,
     illegal, unsafe, or malicious activity, protect public safety, and to secure our
     services. If you choose to use the Services and register an account, you are
     responsible for keeping your account credentials safe. We highly recommend
     that you do not share your username, password or other access details with
     anyone else.

    • Communicating with You. We use your personal information to provide you
     with customer support, to be responsive to you, to provide effective services to
     you and to maintain our business relationship with you.

    • Legal Reasons. We use your personal information to comply with applicable law
     or respond to valid legal process, including requests from law enforcement or
     government agencies, to investigate or participate in civil discovery, potential or
     actual litigation, or other adversarial legal proceedings, and to enforce or
     investigate potential violations of our terms or policies.

    How We Disclose Personal Information

    In certain circumstances, we may disclose your personal information to third parties for
     legitimate purposes subject to this Privacy Policy. Such circumstances may include:

    • With PHP, vendors and other third parties who perform services on our behalf
     (e.g. IT management, payment processing, data analytics, customer support,
     cloud storage, fulfillment and shipping).

    • With business and marketing partners to provide marketing services and
     advertise to you. Our business and marketing partners will use your information
     in accordance with their own privacy notices. Depending on where you reside,

    you may have a right to direct us not to share information about you to show you
     targeted advertisements and marketing based on your online activity with
     different merchants and websites..

    • When you direct, request us or otherwise consent to our disclosure of certain
     information to third parties, such as to ship you products or through your use of
     social media widgets or login integrations.

    • With our affiliates or otherwise within our corporate group.

    • In connection with a business transaction such as a merger or bankruptcy, to
     comply with any applicable legal obligations (including to respond to subpoenas,
     search warrants and similar requests), to enforce any applicable terms of service
     or policies, and to protect or defend the Services, our rights, and the rights of our
     users or others.

    Relationship with PHP

    The Services are hosted by PHP, which collects and processes personal information
     about your access to and use of the Services in order to provide and improve the
     Services for you. Information you submit to the Services will be transmitted to and
     shared with PHP as well as third parties that may be located in countries other than
     where you reside, in order to provide and improve the Services for you.

    Third Party Websites and Links

    The Services may provide links to websites or other online platforms operated by third
     parties. If you follow links to sites not affiliated or controlled by us, you should review
     their privacy and security policies and other terms and conditions. We do not guarantee
     and are not responsible for the privacy or security of such sites, including the accuracy,
     completeness, or reliability of information found on these sites. Information you provide
     on public or semi-public venues, including information you share on third-party social
     networking platforms may also be viewable by other users of the Services and/or users
     of those third-party platforms without limitation as to its use by us or by a third party. Our
     inclusion of such links does not, by itself, imply any endorsement of the content on such
     platforms or of their owners or operators, except as disclosed on the Services.

    Children's Data

    The Services are not intended to be used by children, and we do not knowingly collect
     any personal information about children under the age of majority in your jurisdiction. If
     you are the parent or guardian of a child who has provided us with their personal

    information, you may contact us using the contact details set out below to request that it
     be deleted.As of the Effective Date of this Privacy Policy, we do not have actual
     knowledge that we "share" or "sell" (as those terms are defined in applicable law)
     personal information of individuals under 16 years of age.

    Security and Retention of Your Information

    Please be aware that no security measures are perfect or impenetrable, and we cannot
     guarantee "perfect security." In addition, any information you send to us may not be
     secure while in transit. We recommend that you do not use unsecure channels to
     communicate sensitive or confidential information to us.

    How long we retain your personal information depends on different factors, such as
     whether we need the information to maintain your account, to provide you with Services,
     comply with legal obligations, resolve disputes or enforce other applicable contracts and
     policies.

    Your Rights and Choices

    Depending on where you live, you may have some or all of the rights listed below in
     relation to your personal information. However, these rights are not absolute, may apply
     only in certain circumstances and, in certain cases, we may decline your request as
     permitted by law.

    • Right to Access / Know. You may have a right to request access to personal
     information that we hold about you.

    • Right to Delete. You may have a right to request that we delete personal
     information we maintain about you.

    • Right to Correct. You may have a right to request that we correct inaccurate
     personal information we maintain about you.

    • Right of Portability. You may have a right to receive a copy of the personal
     information we hold about you and to request that we transfer it to a third party, in
     certain circumstances and with certain exceptions.

    • Managing Communication Preferences. We may send you promotional emails,
     and you may opt out of receiving these at any time by using the unsubscribe
     option displayed in our emails to you. If you opt out, we may still send you
     non-promotional emails, such as those about your account or orders that you
     have made.

    You may exercise any of these rights where indicated on the Services or by contacting
     us using the contact details provided below.

    We will not discriminate against you for exercising any of these rights. We may need to
     verify your identity before we can process your requests, as permitted or required under
     applicable law. In accordance with applicable laws, you may designate an authorized
     agent to make requests on your behalf to exercise your rights. Before accepting such a
     request from an agent, we will require that the agent provide proof you have authorized
     them to act on your behalf, and we may need you to verify your identity directly with us.
     We will respond to your request in a timely manner as required under applicable law.

    Complaints

    If you have complaints about how we process your personal information, please contact
     us using the contact details provided below. Depending on where you live, you may
     have the right to appeal our decision by contacting us using the contact details set out
     below, or lodge your complaint with your local data protection authority.

    International Transfers

    Please note that we may transfer, store and process your personal information outside
     the country you live in.

    If we transfer your personal information out of the European Economic Area or the
     United Kingdom, we will rely on recognized transfer mechanisms like the European
     Commission's Standard Contractual Clauses, or any equivalent contracts issued by the
     relevant competent authority of the UK, as relevant, unless the data transfer is to a
     country that has been determined to provide an adequate level of protection.

    Changes to This Privacy Policy

    We may update this Privacy Policy from time to time, including to reflect changes to our
     practices or for other operational, legal, or regulatory reasons. We will post the revised
     Privacy Policy on this website, update the "Last updated" date and provide notice as
     required by applicable law.

    Contact

    Should you have any questions about our privacy practices or this Privacy Policy, or if
     you would like to exercise any of the rights available to you, please call or email us at
    cbee69a@gmail.com

    shipping policy:
     All products will get delivered within 3 to 5 working days from the date of ordered.
     Refund Policy:

     No replacement and No exchange will be provided at any cost, No return and No refund and No cancellation will be provided once item   is ordered.
  `;

  // Function to format the policy text for display
  const formatPolicyText = (text) => {
    // Remove "--- PAGE X ---" markers
    let formattedText = text.replace(/---\s*PAGE\s*\d+\s*---/g, '');

    // Replace multiple newlines with a single paragraph break, then wrap in <p>
    // This handles actual paragraph breaks
    formattedText = formattedText.replace(/\n\s*\n+/g, '</p><p>');

    // Replace single newlines with a space, but keep double newlines for paragraphs
    formattedText = formattedText.replace(/(\S)\n(\S)/g, '$1 $2');

    // Convert SECTION headings to bolded h3 with margin-bottom for gap
    // This regex looks for "SECTION X - YYY" and captures the number and title.
    // It also ensures a new paragraph starts after the heading.
    formattedText = formattedText.replace(/(SECTION \d+ - .*?)(?=<p>|$)/g, '</h3><h3 class="font-bold mb-4 mt-8">$1</h3><p>');

    // Handle bullet points - convert lines starting with '•' to list items
    // This is a more robust way to handle lists.
    formattedText = formattedText.replace(/<p>•\s*(.*?)<\/p>/g, '<li>$1</li>');
    formattedText = formattedText.replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>'); // Wrap in ul if not already
    formattedText = formattedText.replace(/<\/ul>\s*<ul>/g, ''); // Fix for multiple ul tags if consecutive lists

    // Add initial paragraph tag if content doesn't start with a heading or list
    if (!formattedText.startsWith('<h3') && !formattedText.startsWith('<ul>') && formattedText.trim().length > 0) {
      formattedText = `<p>${formattedText}</p>`;
    }

    // Clean up any remaining empty paragraphs or extra spaces
    formattedText = formattedText.replace(/<p>\s*<\/p>/g, '');
    formattedText = formattedText.replace(/<p>\s*<ul>/g, '<ul>'); // Fix list spacing after p tag
    formattedText = formattedText.replace(/<\/ul>\s*<p>/g, '</ul>'); // Fix list spacing before p tag
    formattedText = formattedText.replace(/<p>\s*<h3/g, '<h3'); // Fix heading spacing after p tag
    formattedText = formattedText.replace(/<p>\s*Contact details/g, '<p>• Contact details'); // Fix for specific bullet point

    return formattedText;
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our <span className="text-purple-600">Policy</span>
        </h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto text-left text-gray-800 leading-relaxed overflow-auto max-h-[70vh]">
          {/* Render the formatted policy text using dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: formatPolicyText(policyText) }} className="prose max-w-none"></div>
        </div>
      </div>
    </div>
  );
}


// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Show a temporary modal message
  const showNotification = (message) => {
    setModalMessage(message);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setModalMessage('');
    }, 2000); // Hide after 2 seconds
  };

  return (
    <div className="font-quicksand antialiased">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} showNotification={showNotification} />}
      {currentPage === 'vet-services' && <VetServicesPage showNotification={showNotification} />}
      {currentPage === 'pet-products' && <PetProductsPage cart={cart} setCart={setCart} showNotification={showNotification} />}
      {currentPage === 'policy' && <PolicyPage showNotification={showNotification} />} {/* Render PolicyPage */}
      {currentPage === 'contact-us' && <ContactUsPage showNotification={showNotification} />}
      <NotificationModal message={modalMessage} show={showModal} />
    </div>
  );
};

export default App;
