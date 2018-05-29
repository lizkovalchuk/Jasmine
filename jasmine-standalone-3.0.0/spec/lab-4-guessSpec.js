describe("Test guessNum Fuction", function(){

	//first spec
	describe("guessNum Test to Pass", function(){
		it("should return You guessed it! when the correct number is entered", function(){
			var testNum = 4; //4 is the correct value
			expect(guessNum(testNum)).toEqual("You guessed it!");
		});
	});

	//second spec
	describe("guessNum Test to Fail", function(){
		it("should return Guess again for any whole number between 1 and 10 (inclusive) except the correct answer.", function(){
			var testNum = 9; //4 is the correct value
			expect(guessNum(testNum)).toEqual("Guess again.");
		});
	});

	//third spec
	describe("guessNum Test to Fail", function(){
		it("should return A number was not input. if the value entered is not a number.", function(){
			var testNum = "s"; //4 is the correct value
			expect(guessNum(testNum)).toEqual("A number was not input.");
		});
	});

	//fourth spec
	describe("guessNum Test to Fail", function(){
		it("The function should return A value was not entered. if it receives an empty string.", function(){
			var testNum = ""; //4 is the correct value
			expect(guessNum(testNum)).toEqual("A value was not entered.");
		});
	});

	//fifth spec

	describe("guessNum Test to Fail", function(){
		it("The function should return A value was not entered. if it receives an empty string.", function(){
			var testNum = 1; //4 is the correct value
			expect(guessNum(testNum)).toEqual("Guess again.");
		});
	});

	//sixth spec


	describe("guessNum Test to Fail", function(){
		it("The function should return Way off! Pick between 1 and 10. if the value entered is 0.", function(){
			var testNum = 0; //4 is the correct value
			expect(guessNum(testNum)).toEqual("Way off! Pick between 1 and 10.");
		});
	});

	//seventh spec

	describe("guessNum Test to Fail", function(){
		it("The function should return Guess again. if the value entered is 10.", function(){
			var testNum = 10; //4 is the correct value
			expect(guessNum(testNum)).toEqual("Guess again.");
		});
	});

	//eigth spec
	//The function should return "Way off! Pick between 1 and 10." if the value entered is 11.

	describe("guessNum Test to Fail", function(){
		it("The function should return Way off! Pick between 1 and 10. if the value entered is 11.", function(){
			var testNum = 11; //4 is the correct value
			expect(guessNum(testNum)).toEqual("Way off! Pick between 1 and 10.");
		});
	});




}); //end of first describe