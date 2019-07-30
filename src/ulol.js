;(function(global) {


	/* 	Variables Description
	---------------------------------------------------------------------------
		tagId - The HTML id tag name under which list is added
		tyeOfList - Can have 2 values ul(Unordered List) and ol(Ordered List)
		content - Array which containt the bullet points to show in list
	----------------------------------------------------------------------------

	*/
	var ulol = function(tagId,typeOfList,content) {

		//new Object of ulol
		return new ulol.init(tagId,typeOfList,content);
	};

//These variable are initiallised in run function  
var 

	tag,	//tag - tagId for JS purpose
	
	bullet; //bullet - ul/ol value
	

	ulol.prototype = {


		//Initial List formation
		run: function() {
			tag = document.getElementById(this.tagId);
			bullet = document.createElement(this.typeOfList);
			
			tag.appendChild(bullet);
			for(var i=0;i<this.content.length;i++)
			{
				var li = document.createElement('li');
				li.innerHTML = this.content[i];
				bullet.appendChild(li);
			}

			return this;
		},

		//To add new element to List 
		update:function(newVal = []){

/*				Few Error Checking 
				1.newVal should not be empty 
							and 
				2.It must be of Array type
												*/

			if(newVal.length<1)
				throw "Insufficient Parameters to update list";
			else if (newVal.constructor !== Array )
				throw "Array Expected in Parameter";
			else{

				//Adding element to the this.content
				this.content = this.content.concat(newVal);
				this.draw();

			}
		},


		//Return the length of list
		listLength:function() {
			let listOfLi = document.getElementsByTagName('li');
			return listOfLi.length;
		},


		//draw function to Redraw the list of the this.content value
		draw:function() {


			//Get all element of tag ol/ul 
			var el = document.querySelector(this.typeOfList);


			//Removing Element by putting innerHTML to empty
			el.innerHTML ='';								


			//Re-adding the li tag with the values of content
			for(var i=0;i<this.content.length;i++)
			{
				var li = document.createElement('li');
				li.innerHTML = this.content[i];
				bullet.appendChild(li);
			}
			
		},

		/*Remove function 
			1.remove element from specific position
			2. If no value pass the last element will be deleted
		*/
		remove:function(pos=this.listLength()) {

			/*Error Checking
				1.position should not be greater then size of list
				2.position should not be less than or equal to 0

			*/
			if (pos>this.listLength())
				throw "Value is greater then the size of List";
			else if(pos<=0)
				throw "Value should be positive";

			//Remove the element
			this.content.splice(pos-1,1);
			
			//Redraw the list
			this.draw();			
		}


	};



	ulol.init = function(tagId,typeOfList,content) {

		//Adding variables to ulol object

		var self= this;
		self.tagId = tagId;
		self.typeOfList = typeOfList;
		self.content = content;

		//Making chainable
		return this;
	};


	//Poiniting ulol.init prototype to ulol protoype
	ulol.init.prototype = ulol.prototype;


	//Attaching ulol object to windows(global) object
	global.ulol = ulol;
	
}(window));