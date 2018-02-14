import React from 'react';
import { Link } from 'react-router-dom';

export const Prompt = () => {
   if (window.location.pathname === "/drafts/new" || 
      /\/drafts\/\d*/.test(window.location.pathname) || 
      /\/posts\/\d*/.test(window.location.pathname)) {
      return null;
   }
   
   return (
   <div className="Prompt">
      It's about time you started writing!
      <Link to='/drafts/new'><span className="blinking-cursor">I</span></Link>
   </div>
)}