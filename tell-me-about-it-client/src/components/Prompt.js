import React from 'react';
import { Link } from 'react-router-dom';

export const Prompt = () => {
   if (window.location.pathname === "/drafter") {
      return null;
   }
   
   return (
   <div className="Prompt">
      It's about time you started writing!
      <Link to='/drafter'><span className="blinking-cursor">I</span></Link>
   </div>
)}