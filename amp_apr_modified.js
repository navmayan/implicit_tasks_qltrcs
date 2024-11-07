define(['pipAPI', 'https://jeremybena.github.io/APR_AMP/AMP_modified/AMP_parameters_modified.js'], function(APIConstructor, ampExtension){
//Adapted from Bengayev, E. (2020, July 27). Running Project Implicit’s AMP from Qualtrics [Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-amp/  

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Francis West',  //Will be used in the user feedback 
				nameForLogging : 'francis_target', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Francis.jpg'}]

			}, 
			{
				nameForFeedback : 'Control',  //Will be used in the user feedback 
				nameForLogging : 'control', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Control1.jpg'}, 
					{image : 'Control2.jpg'}, 
					{image : 'Control3.jpg'}, 
					{image : 'Control4.jpg'}, 
					{image : 'Control5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'training', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'Control1.jpg'}, {image : 'Control2.jpg'}, {image : 'Control3.jpg'}, {image : 'Control4.jpg'}, {image : 'Control5.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://jeremybena.github.io/APR_AMP/images'
		}
	});
});
