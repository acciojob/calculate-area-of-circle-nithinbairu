 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
			if(radius!==null&&!isNaN(radius)&&radius.trim()!==''&&radius>0){
				radius=parseFloat(radius);
				let area=Math.round(Math.PI*Math.pow(radius,2)*100)/100;
				alert(`The area of the circle with radius ${radius} is ${area}`)
			}else{
				alert(`Please enter a valid positive number for the radius.`)
			}
			 
           
}
calculateArea();
