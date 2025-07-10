import React, { useState, useEffect } from 'react';
import { Home, PawPrint, ShoppingCart, X, Plus, Minus, CheckCircle, MapPin, Shield, Phone, Info, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

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

  const posts = [
    { id: 1, petName: 'Luna', type: 'Cat', breed: 'Maine Coon', owner: 'Aisha Khan', image: 'https://images.unsplash.com/photo-1574144611937-0130592f69e6?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Luna loves chasing laser pointers and cuddling.' },
    { id: 2, petName: 'Max', type: 'Dog', breed: 'Beagle', owner: 'Rajesh Singh', image: 'https://images.unsplash.com/photo-1543466835-09a76895ed13?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Max is a playful pup who enjoys long walks in the park.' },
    { id: 3, petName: 'Sparky', type: 'Bird', breed: 'Cockatiel', owner: 'Priya Sharma', image: 'https://images.unsplash.com/photo-1518791841-f7ce3d721e88?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Sparky loves to whistle tunes and mimic sounds.' },
    { id: 4, petName: 'Coco', type: 'Rabbit', breed: 'Holland Lop', owner: 'Amit Patel', image: 'https://images.unsplash.com/photo-1559132177-3e5f2e8f1d1f?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Coco is a shy but sweet rabbit who enjoys fresh greens.' },
    { id: 5, petName: 'Goldie', type: 'Fish', breed: 'Goldfish', owner: 'Sara Devi', image: 'https://images.unsplash.com/photo-1522069169903-f54817551571?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Goldie gracefully swims around, bringing peace to the room.' },
    { id: 6, petName: 'Rocky', type: 'Hamster', breed: 'Syrian', owner: 'Kabir Sharma', image: 'https://images.unsplash.com/photo-1579169008272-3f2d2f3b3b3b?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Rocky loves running on his wheel and collecting treats.' },
    { id: 7, petName: 'Whiskers Jr.', type: 'Cat', breed: 'Domestic Shorthair', owner: 'Fatima Ali', image: 'https://images.unsplash.com/photo-1514888717190-c637492c57a2?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'A curious and playful kitten always ready for adventure.' },
    { id: 8, petName: 'Bruno', type: 'Dog', breed: 'Labrador', owner: 'Deepak Kumar', image: 'https://images.unsplash.com/photo-1561037406-6133f443729e?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Bruno is a loyal and friendly companion, great with kids.' },
    { id: 9, petName: 'Sunny', type: 'Bird', breed: 'Canary', owner: 'Meena Reddy', image: 'https://images.unsplash.com/photo-1588523023023-3b2d1d0f8c8b?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', details: 'Sunny\'s cheerful singing brightens every morning.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100 flex flex-col items-center p-4">
      {/* Hero Section */}
      <div className={`text-center max-w-5xl bg-white p-8 rounded-3xl shadow-2xl transition-all duration-1000 transform ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} mb-12 mt-8 hover:scale-102`}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-pink-600">Cbee</span>! {/* Changed to pink-600 */}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Your adorable hub for all things pets. Discover, connect, and share the love!
        </p>
      </div>

      {/* Dynamic Scroll Section - Featured Pets */}
      <div className={`container mx-auto mt-12 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Meet Our <span className="text-pink-600">Featured Pets</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((pet, index) => (
            <div
              key={pet.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 delay-${index * 100} hover:scale-105`}
              style={{ opacity: showContent ? 1 : 0, transform: showContent ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <img
                src={pet.image}
                alt={pet.petName}
                className="w-full h-64 object-cover rounded-t-3xl"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/F0F4F8/333?text=${encodeURIComponent(pet.petName)}`; }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pet.petName} - {pet.type}</h3>
                <p className="text-gray-700 text-base mb-2">Breed: {pet.breed}</p>
                <p className="text-gray-600 text-sm mb-4">{pet.details}</p>
                <button
                  onClick={() => showNotification(`Viewing ${pet.petName}'s full profile... (Not implemented)`)}
                  className="mt-2 bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-600 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action - Join Community */}
      <div className={`container mx-auto mt-16 bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-3xl shadow-2xl text-center text-white transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <h3 className="text-4xl font-extrabold mb-4">Join Our Community!</h3>
        <p className="text-xl mb-6">Connect with fellow pet enthusiasts and share your love for animals.</p>
        <button
          onClick={() => showNotification('Sign up feature coming soon!')}
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white"
        >
          Sign Up Now
        </button>
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
      const apiKey = ""; // Leave this as-is; Canvas will provide it at runtime.
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
    { id: 1, name: 'Premium Dog Food', price: 2800, description: 'Nutritious and delicious food for your canine companion.', image: 'https://images.unsplash.com/photo-1588523023023-3b2d1d0f8c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4OTZ8MHwxfHxkb2clMjBmb29kfGVufDB8fHx8MTcxOTk0OTY0Mnww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: 'Interactive Cat Toy', price: 650, description: 'Keep your feline friend entertained for hours.', image: 'https://images.unsplash.com/photo-1627916568474-0f2c0f0f0f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4OTZ8MHwxfHxjYXQlMjB0b3l8ZW58MHx8fHwxNzE5OTQ5NjQyfDB&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 3, name: 'Comfort Pet Bed', price: 3500, description: 'A cozy and soft bed for ultimate pet relaxation.', image: 'https://images.unsplash.com/photo-1598133502209-b903061f0f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4OTZ8MHwxfHxkb2clMjBiZWR8ZW5ufDB8fHx8MTcxOTk0OTY0Mnww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 4, name: 'Pet Grooming Kit', price: 1800, description: 'Everything you need for a well-groomed pet.', image: 'https://images.unsplash.com/photo-1583337130417-ab7e42d7a3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4OTZ8MHwxfHxwZXQlMjBncm9vbWluZyUyMGtpdHxlbnwwfHx8fDE3MTk5NDk2NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 5, name: 'Bird Seed Mix', price: 450, description: 'High-quality seed mix for various bird species.', image: 'https://images.unsplash.com/photo-1588523023023-3b2d1d0f8c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4OTZ8MHwxfHxiaXJkJTIwc2VlZHxlbnwwfHx8fDE3MTk5NDk2NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 6, name: 'Fish Tank Decor', price: 750, description: 'Enhance your aquarium with beautiful decorations.', image: 'https://images.unsplash.com/photo-1598133502209-b903061f0f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4OTZ8MHwxfHxmaXNoJTIwdGFuayUyMGRlY29yfGVufDB8fHx8MTcxOTk0OTY0Mnww&ixlib=rb-4.0.3&q=80&w=1080' },
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission that causes page reload
    const recipientEmail = 'cbee69a@gmail.com';
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

    // Construct the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Create a temporary anchor element to trigger the mailto link without navigating the current page
    const a = document.createElement('a');
    a.href = mailtoLink;
    a.target = '_blank'; // Open in a new tab/window (or email client)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    showNotification('Your email client will open with your message. Please send it from there!');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after initiating email
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Get in <span className="text-purple-600">Touch</span>
        </h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center mb-8">
            Have questions, feedback, or need assistance? Fill out the form below or reach us through other channels.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-lg font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Subject of your inquiry"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Send Message
            </button>
          </form>

          {/* Other Contact Options */}
          <div className="mt-10 text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Connect</h3>
            <p className="text-lg text-gray-700 flex items-center justify-center">
              <Mail className="mr-3 text-pink-600" size={24} /> Email us at:{' '}
              <a href="mailto:support@cbee.com" className="text-purple-600 hover:underline ml-2">support@cbee.com</a>
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

// Policy Page Component (formerly PortfolioPage)
function PolicyPage({ showNotification }) {
  const PRIVACY_POLICY_PDF_URL = 'https://www.africau.edu/images/default/sample.pdf'; // Placeholder PDF URL

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our <span className="text-purple-600">Policy</span>
        </h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Here you can find our comprehensive Privacy Policy, detailing how we collect, use, and protect your data.
          </p>
          <a
            href={PRIVACY_POLICY_PDF_URL}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            download="Cbee_Privacy_Policy.pdf" // Suggests a filename for download
          >
            <Shield className="mr-3" size={24} /> Download Privacy Policy (PDF)
          </a>
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

