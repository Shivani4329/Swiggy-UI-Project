// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="Images/Swiggy-logo.png" alt="Swiggy Logo" className="mb-4 w-[90px]" />
            <p>&copy; {new Date().getFullYear()} Swiggy</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Company</h5>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Team</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Swiggy Blog</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Bug Bounty</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Swiggy One</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Swiggy Corporate</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Swiggy Instamart</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Help & Support</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Partner with us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Ride with us</a></li>
            </ul>
            <div className="mt-8">
              <h5 className="text-lg font-bold mb-2">Legal</h5>
              <ul>
                <li className="mb-1"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Refund & Cancellation</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Cookie Policy</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Offer Terms</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Phishing & Fraud</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-2">We deliver to</h5>
            <div className="grid grid-cols-2 gap-4">
              <ul>
                <li className="mb-1"><a href="#" className="hover:underline">New York</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Los Angeles</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Chicago</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Houston</a></li>
              </ul>
              <ul>
                <li className="mb-1"><a href="#" className="hover:underline">Phoenix</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Philadelphia</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">San Antonio</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">San Diego</a></li>
              </ul>
              <ul>
                <li className="mb-1"><a href="#" className="hover:underline">Dallas</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">San Jose</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Austin</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Jacksonville</a></li>
              </ul>
              <ul>
                <li className="mb-1"><a href="#" className="hover:underline">Fort Worth</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Columbus</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">Charlotte</a></li>
                <li className="mb-1"><a href="#" className="hover:underline">San Francisco</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
