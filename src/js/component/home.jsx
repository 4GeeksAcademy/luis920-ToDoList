import React, { useState } from "react";
import {Todolist} from "./todolist.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



//create your first component
const Home = () => {
  
	return (
		<div >
			<Todolist/>
		</div>
	);
};

export default Home;
