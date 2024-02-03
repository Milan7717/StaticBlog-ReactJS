import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <Navbar  className='fixed top-0 w-full' fluid  rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="/src/assets/img/bloglogo.png" className='h-[37px] rounded-xl object-center object-center' />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/blog" >Blog</Navbar.Link>
        <Navbar.Link href="/portfolio" >Portfolio</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Nav
