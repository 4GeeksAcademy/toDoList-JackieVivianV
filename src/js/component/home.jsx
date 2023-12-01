import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const [remove, setRemove] = useState([]);

	function handleTask(event){
		setTask(event.target.value);
	}

	function handleList(event){
			if (event.keyCode === 13) {
				const newData = [...list, event.target.value]; // Crea un nuevo array con el dato adicional
				setList(newData); // Actualiza el estado con el nuevo array
				console.log(list);
				event.target.value = '';
			}
		
	}

	//function handleRemove(event){
		
	//	setRemove(list.filter(a => a !== event.target.value))
		//console.log("newList")
		//list.removeChild();
	//}


		
		// Eliminar tarea
		
		//	function removeTask(listItem) {
		//	  taskList.removeChild(listItem);
		   
		//	}


	return (
		<div className="container d-block justify-content-center bg-black p-5" style={{width: "30rem"}}>
			<h1 className="text-center text-light p-2">My To-Do List</h1>
			<input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm p-5" onChange={handleTask} onKeyUp={handleList} placeholder="Add your task for today here :)"></input>
			<ul className="text-light p-3">
				{list.map((item, index) => (
         			 <li key={index} style={{listStyleType: "none"}} className="bg-dark p-2">
            		{item}
					<span onClick={() => {setList(list.filter((_, i) => i !== index))}} className="d-flex justify-content-end"> x</span>
          			</li>
       				 ))}
			</ul>
			<span className="text-sm text-light"></span>
		</div>
		
	);
};





export default Home;
