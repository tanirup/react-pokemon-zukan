// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} ポケモン図鑑</p>
    </footer>
  );
};

export default Footer;
