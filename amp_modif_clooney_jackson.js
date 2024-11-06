define(['pipAPI', 'https://github.com/navmayan/implicit_tasks_qltrcs/AMP_actors_parameters_modified.js'], function(APIConstructor, ampExtension){
//Adapted from Bengayev, E. (2020, July 27). Running Project Implicit’s AMP from Qualtrics [Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-amp/  
	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'George Clooney',  //Will be used in the user feedback 
				nameForLogging : 'george_clooney', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'George Clooney1.jpg'}, 
					{image : 'George Clooney2.jpg'}, 
					{image : 'George Clooney3.jpg'}, 
					{image : 'George Clooney4.jpg'}, 
					{image : 'George Clooney5.jpg'}]

			}, 
			{
				nameForFeedback : 'Samuel L. Jackson',  //Will be used in the user feedback 
				nameForLogging : 'samuel_l_jackson', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Samuel L. Jackson1.jpg'}, 
					{image : 'Samuel L. Jackson2.jpg'}, 
					{image : 'Samuel L. Jackson3.jpg'}, 
					{image : 'Samuel L. Jackson4.jpg'}, 
					{image : 'Samuel L. Jackson5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://github.com/navmayan/implicit_tasks_qltrcs/images'
		}
	});
});
