import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/home" >
                Home
        </NavLink>
		<NavLink to="/about" >
			About
		</NavLink>
		<NavLink to="/contact" >
			Contact Us
		</NavLink>
		<NavLink to="/blogs" >
			Blogs
		</NavLink>
		<NavLink to="/sign-in" >
			Sign Up
		</NavLink>
		
		<NavLink to="/register" >
                Register
        </NavLink>
		<NavLink to="/dropdown" >
                More
        </NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
