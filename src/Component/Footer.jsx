// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 fixed bottom-0 left-0 right-0 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-xl font-semibold">
          &copy; {new Date().getFullYear()} NeighbourHood News. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
