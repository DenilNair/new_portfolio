import React, { useState } from 'react';
import Toggle from "react-toggle";
import './toggle.css';
const Toggler = () => {
    const [isDark, setIsDark] = useState(true);
  return (
    <Toggle
    checked={isDark}
    onChange={({ target }) => setIsDark(target.checked)}
    icons={{ checked: "🌙", unchecked: "🔆" }}
    aria-label="Dark mode toggle"
  />
  )
}

export default Toggler;