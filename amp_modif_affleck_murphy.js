define(['pipAPI', 'https://navmayan.github.io/implicit_tasks_qltrcs/AMP_actors_parameters_modified.js'], function(APIConstructor, ampExtension){
//Adapted from Bengayev, E. (2020, July 27). Running Project Implicit’s AMP from Qualtrics [Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-amp/  
	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Ben Affleck',  //Will be used in the user feedback 
				nameForLogging : 'ben_affleck', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Ben Affleck1.jpg'}, 
					{image : 'Ben Affleck2.jpg'}, 
					{image : 'Ben Affleck3.jpg'}, 
					{image : 'Ben Affleck4.jpg'}, 
					{image : 'Ben Affleck5.jpg'}]

			}, 
			{
				nameForFeedback : 'Eddie Murphy',  //Will be used in the user feedback 
				nameForLogging : 'eddie_murphy', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Eddie Murphy1.jpg'}, 
					{image : 'Eddie Murphy2.jpg'}, 
					{image : 'Eddie Murphy3.jpg'}, 
					{image : 'Eddie Murphy4.jpg'}, 
					{image : 'Eddie Murphy5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url: {//Where are your images at?
			image: 'https://navmayan.github.io/implicit_tasks_qltrcs/images'
		}
	});
});
