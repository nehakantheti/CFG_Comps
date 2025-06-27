import React, { useState } from "react";

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    contributions: [],
    availability: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const contributionOptions = [
    "Teaching", "Fundraising", "Event Support", "Content Creation", "Social Media", "Technical Support"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'contributions') {
      const updated = checked
        ? [...formData.contributions, value]
        : formData.contributions.filter((item) => item !== value);
      setFormData(prev => ({ ...prev, contributions: updated }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    if (formData.contributions.length === 0) {
      setError('Please select at least one contribution area');
      setLoading(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      console.log("Volunteer data submitted:", formData);
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        contributions: [],
        availability: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 md:p-12">
      <div className="max-w-2xl w-full bg-gray-900 p-6 md:p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Volunteer Signup</h2>
        <p className="text-gray-400 text-center mt-2 text-sm md:text-base">
          Join us and make a difference by contributing your time and skills.
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm">
            Thank you for signing up! We'll be in touch soon.
          </div>
        )}

        <form className="mt-6 md:mt-8 space-y-4 md:space-y-5" onSubmit={handleSubmit}>
          {/* Name, Email, Phone, City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-2.5 md:p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm md:text-base"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-2.5 md:p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm md:text-base"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-2.5 md:p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm md:text-base"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="p-2.5 md:p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* Contribution Areas */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">What can you contribute?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {contributionOptions.map((item) => (
                <label key={item} className="flex items-center space-x-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    name="contributions"
                    value={item}
                    checked={formData.contributions.includes(item)}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Availability (e.g., Weekends, Evenings)"
            className="w-full p-2.5 md:p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm md:text-base"
          />

          {/* Motivation */}
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Why do you want to volunteer?"
            className="w-full p-2.5 md:p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm md:text-base"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-2.5 md:py-3 rounded-xl text-sm md:text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit Form'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerSignup;
