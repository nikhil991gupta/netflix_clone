import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Head = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
  };

  return (
    <div className='flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black z-10 absolute'>
      <img className='w-56 mt-5 ' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='netflix-logo'></img>
      <div className='flex items-center'>
        <IoIosArrowDropdown size='24px' color='white'></IoIosArrowDropdown>
        {loggedIn ? (
          <>
            <h1 className='txt-lg font-medium text-white'>Shruti Jethwa</h1>
            <div className='ml-4'>
              <button className='bg-red-800 text-white px-4 py-2' onClick={handleLogout}>Logout</button>
              <button className='bg-red-800 text-white px-4 py-2 ml-2' >Search</button>
            </div>
          </>
        ) : (
          <button className='bg-red-800 text-white px-4 py-2' onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Head;
