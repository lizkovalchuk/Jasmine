//LAB 4 - JS ENCRYPTION

	function encryptIt(){

	var msgOut = document.getElementById("getMD5__output");
	var userInput = document.getElementById("md5form_txt").value;
	var userPass = CryptoJS.MD5(userInput);

		if (userInput === ""){
			document.getElementById("getMD5__output").innerHTML = "You did not enter any characters";
		} 
		else  {
		document.getElementById("getMD5__output").innerHTML = userPass;
		}	
		return false;
	};

