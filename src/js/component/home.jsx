import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let count = 0;
const Home = () => {

	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const [visible, setVisibleItem] = useState("none");
	const [hoverIndex, setHoverIndex] = useState(null);
	

	function mouseHoverEvent(index){
			setVisibleItem("flex");    //hace visible la x
			setHoverIndex(index); // para que solo aparezca la x en el <li> en el que estoy posicionada
	}
	
	function mouseLeaveEvent(){
		setVisibleItem("none");       //hace invisible la x
	}
	
	
	function handleTask(event){
		setTask(event.target.value);
	}

	function handleRemoveItem(index) {
		setList((prevList) => prevList.filter((_, i) => i !== index));
		count--;
	  }

	function handleList(event){
			if (event.keyCode === 13) {
				const newData = [...list, event.target.value]; // Crea un nuevo array con el dato adicional
				setList(newData); // Actualiza el estado con el nuevo array
				console.log(list);
				count++
				event.target.value = '';
			}
		
	}



	return (
		<div className="container d-block bg-dark p-5 col-lg-6 col-md-4 col-sm-10 mt-5 pb-3" style={{width: "30rem"}}>
			<h1 className="text-light p-2 d-flex justify-content-center">My To-Do List</h1>
			<input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm p-5" onChange={handleTask} onKeyUp={handleList} placeholder="Add your task for today here :)"></input>
			<ul className="text-light pt-3" style={{ paddingLeft: "0rem", display: "flex", flexDirection: "column", gap: "10px" }}>
 			 	{list.map((item, index) => (
    				<li key={index} style={{ listStyleType: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }} className="bg-dark p-2 border border-secondary" onMouseEnter={()=> mouseHoverEvent(index)} onMouseLeave={mouseLeaveEvent}>
      					<span>{item}</span>
						<div>
      					<span onClick={() => handleRemoveItem(index)} className="text-secondary" style={{ display: hoverIndex === index ? visible : "none" }}> x</span>
						</div>
					</li>
 				 ))}
			</ul>
			<span className="text-light font-italic" style={{fontFamily: "fantasy", fontSize: "small"}}>{count} items left</span>
		</div>
		
	);
};





export default Home;
