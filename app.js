let rl= String (prompt("Enter Your e-mail account:" ) )	;
let rg= Number (prompt("Enter Your password:" ) )	;


let email= 'aumikhan@gmail.com';
let pass=151515;
	

if(email === rl && pass === rg){
document.write(` <img style='width:200px; height:200px; display:block; margin:auto; ' src="img/a1.jpg"><h2 style="text-align:center">Name:Aumi khan </br> Date of Birth:1998</br> Job:Web Developer</h2>`);
}
else	 { 
document.write(`<h2 style="text-align:center; color:red">Your email or password is incorrect. <span style:"color:green">Try Again</span></h2>`);
}		