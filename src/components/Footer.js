import React from "react";

export default function Footer({ name, partner }) {
  return (
    <footer className="text-center py-4 text-white">
      <p>
        Created by <strong>{name}</strong> and <strong>{partner}</strong> • For U.S. History Class
      </p>
    </footer>
  );
}
