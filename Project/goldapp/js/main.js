$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#tvForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data, key){
	if(!key){
			var id		= Math.floor(Math.random()*100000002);

		}else{
			//Set the id to the existing key we're editing so that it will save over the data.
			//The key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the saveShow function.
			id = key;

			
		}

	//Gather up all our form values and store in an object
		//Object properties contain array with the form label and input value.
		
		
		var item 			={};
			item.date 		= ["Date", $("#sdate").val()];
			item.showname	= ["Show Name", $("#sname").val()];
			item.networks	= ["Network:", $("#networks").val()];
			item.important	= ["How Important?", $("#important").val()];
			item.specialnotes	= ["Notes:", $("#notes").val()];
			/*item.parentalBlock	= ["Block?:", $("#parental").val()];
			item.recurring	= ["Recurring?:", $("#reclabel").val()];*/


		//Save data into local storage: Using Stringify to convert out object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("TV Show was Added!");

	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
