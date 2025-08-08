import React, { useState } from "react";
import { Calendar, Clock, User, MapPin, Phone, Mail, CheckCircle, XCircle } from "lucide-react";

const EventBookingForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [errors, setErrors] = useState({});

  // Mock available dates and times
  const availableDates = [
    "2024-01-15", "2024-01-16", "2024-01-17", "2024-01-18",
    "2024-01-20", "2024-01-22", "2024-01-23", "2024-01-25"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!selectedDate) newErrors.date = "Please select a date";
    if (!selectedTime) newErrors.time = "Please select a time";
    if (!eventName.trim()) newErrors.eventName = "Event name is required";
    if (!organizer.trim()) newErrors.organizer = "Organizer name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!guests) newErrors.guests = "Number of guests is required";
    else if (isNaN(guests) || parseInt(guests) <= 0) newErrors.guests = "Please enter a valid number of guests";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setBookingConfirmed(true);
    }
  };

  const resetForm = () => {
    setSelectedDate("");
    setSelectedTime("");
    setEventName("");
    setOrganizer("");
    setEmail("");
    setPhone("");
    setGuests("");
    setSpecialRequests("");
    setBookingConfirmed(false);
    setErrors({});
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your event has been successfully booked. We've sent a confirmation email to {email}.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Booking Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Event:</span> {eventName}</p>
                <p><span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><span className="font-medium">Time:</span> {selectedTime}:00</p>
                <p><span className="font-medium">Guests:</span> {guests}</p>
              </div>
            </div>
            <button
              onClick={resetForm}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Book Another Event
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Hall Booking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserve our beautiful event hall for your special occasion. Perfect for weddings, conferences, parties, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
                  Booking Details
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                          errors.date ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select a date</option>
                        {availableDates.map(date => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                          errors.time ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}:00</option>
                        ))}
                      </select>
                    </div>
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Name
                    </label>
                    <input
                      type="text"
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                        errors.eventName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Wedding Reception, Business Conference"
                    />
                    {errors.eventName && <p className="text-red-500 text-sm mt-1">{errors.eventName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      min="1"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                        errors.guests ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Approximate number of guests"
                    />
                    {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-indigo-600" />
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organizer Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={organizer}
                        onChange={(e) => setOrganizer(e.target.value)}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                          errors.organizer ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.organizer && <p className="text-red-500 text-sm mt-1">{errors.organizer}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`pl-10 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
                  placeholder="e.g., Dietary restrictions, audio/visual needs, decoration preferences..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-lg"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Confirm Booking</span>
              </button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Event Hall Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">123 Celebration Avenue, Downtown District</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Capacity</h3>
                  <p className="text-gray-600">Up to 300 guests for seated events</p>
                  <p className="text-gray-600">Up to 500 guests for cocktail receptions</p>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Amenities</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Full kitchen with catering facilities</li>
                    <li>• Professional audio/visual equipment</li>
                    <li>• High-speed Wi-Fi</li>
                    <li>• On-site parking (200 spaces)</li>
                    <li>• Climate control system</li>
                    <li>• Professional event coordination</li>
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Pricing</h3>
                  <p className="text-gray-600">Starting at $1,500 per day</p>
                  <p className="text-sm text-gray-500">Discounts available for non-profit organizations and weekday bookings</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-3">Need Assistance?</h2>
              <p className="text-indigo-100 mb-4">
                Our event specialists are here to help you plan the perfect event.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">events@venue.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBookingForm;