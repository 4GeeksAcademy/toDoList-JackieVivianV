import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

	const storedList = JSON.parse(localStorage.getItem('list'))
	const [task, setTask] = useState("");
	const [list, setList] = useState(storedList);
	const [visible, setVisibleItem] = useState("none");
	const [hoverIndex, setHoverIndex] = useState(null);

	useEffect(() => {
  	localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	

	function mouseHoverEvent(index){
			setVisibleItem("d-flex");    //hace visible la x
			setHoverIndex(index); // para que solo aparezca la x en el <li> en el que estoy posicionada
	}
	
	function mouseLeaveEvent(){
		setVisibleItem("d-none");       //hace invisible la x
	}
	
	
	function handleTask(event){
		setTask(event.target.value);
	}

	function handleRemoveItem(index) {
		setList((prevList) => prevList.filter((_, i) => i !== index));
	  }

	function handleList(event){
			if (event.keyCode === 13) {
				const newData = [...list, event.target.value]; // Crea un nuevo array con el dato adicional
				setList(newData); // Actualiza el estado con el nuevo array
				console.log(list);
				event.target.value = '';
			}
		
	}



	return (
		<div className="container d-block bg-dark p-5 col-lg-6 col-md-4 col-sm-10 mt-5 pb-3" style={{width: "30rem"}}>
			<h1 className="text-light p-2 d-flex justify-content-center">My To-Do List</h1>
			<input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm p-5" onChange={handleTask} onKeyUp={handleList} placeholder="Add your task for today here :)"></input>
			<ul className="text-light pt-3" style={{ paddingLeft: "0rem", display: "flex", flexDirection: "column", gap: "10px" }}>
 			 	{list.map((item, index) => (
    				<li key={index} style={{ listStyleType: "none" }} className="bg-dark d-flex justify-content-between align-items-center p-2 border border-secondary" onMouseEnter={()=> mouseHoverEvent(index)} onMouseLeave={mouseLeaveEvent}>
      					<span>{item}</span>
						<div>
      					<span onClick={() => handleRemoveItem(index)} className={`text-secondary ${hoverIndex === index ? visible : "d-none"}`} > x</span>
						</div>
					</li>
 				 ))}
			</ul>
			<span className="text-light font-italic" style={{fontFamily: "fantasy", fontSize: "small"}}>{list.length} items left</span>
		</div>
		
	);
};





export default Home;
