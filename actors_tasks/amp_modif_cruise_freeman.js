define(['pipAPI', 'https://navmayan.github.io/implicit_tasks_qltrcs/AMP_actors_parameters_modified.js'], function(APIConstructor, ampExtension){
//Adapted from Bengayev, E. (2020, July 27). Running Project Implicit’s AMP from Qualtrics [Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-amp/  
	var API = new APIConstructor();
	
	
	return ampExtension({

		primeCats :  [
			{
				nameForFeedback : 'Tom Cruise',  //Will be used in the user feedback 
				nameForLogging : 'tom_cruise', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Tom Cruise1.jpg'}, 
					{image : 'Tom Cruise2.jpg'}, 
					{image : 'Tom Cruise3.jpg'}, 
					{image : 'Tom Cruise4.jpg'}, 
					{image : 'Tom Cruise5.jpg'}]

			}, 
			{
				nameForFeedback : 'Morgan Freeman',  //Will be used in the user feedback 
				nameForLogging : 'morgan_freeman', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Morgan Freeman1.jpg'}, 
					{image : 'Morgan Freeman2.jpg'}, 
					{image : 'Morgan Freeman3.jpg'}, 
					{image : 'Morgan Freeman4.jpg'}, 
					{image : 'Morgan Freeman5.jpg'}]
			}
		],

		targetStimulusCSS : {color:'#0000FF','font-size':'2.3em'},
			//The prime categories.
		targetCats :  [
				{
					nameForLogging : 'chinese',  //Will be used in the logging
					//An array of all media objects for this category. The default is pic1-pic200.jpg
					mediaArray : [
						{image : 'pic1.jpg'}, {image : 'pic2.jpg'}, {image : 'pic3.jpg'}, {image : 'pic4.jpg'}, {image : 'pic5.jpg'}, {image : 'pic6.jpg'}, {image : 'pic7.jpg'}, {image : 'pic8.jpg'}, {image : 'pic9.jpg'}, 
						{image : 'pic10.jpg'}, {image : 'pic11.jpg'}, {image : 'pic12.jpg'}, {image : 'pic13.jpg'}, {image : 'pic14.jpg'}, {image : 'pic15.jpg'}, {image : 'pic16.jpg'}, {image : 'pic17.jpg'}, {image : 'pic18.jpg'}, {image : 'pic19.jpg'}, 
						{image : 'pic20.jpg'}, {image : 'pic21.jpg'}, {image : 'pic22.jpg'}, {image : 'pic23.jpg'}, {image : 'pic24.jpg'}, {image : 'pic25.jpg'}, {image : 'pic26.jpg'}, {image : 'pic27.jpg'}, {image : 'pic28.jpg'}, {image : 'pic29.jpg'}, 
						{image : 'pic30.jpg'}, {image : 'pic31.jpg'}, {image : 'pic32.jpg'}, {image : 'pic33.jpg'}, {image : 'pic34.jpg'}, {image : 'pic35.jpg'}, {image : 'pic36.jpg'}, {image : 'pic37.jpg'}, {image : 'pic38.jpg'}, {image : 'pic39.jpg'}, 
						{image : 'pic40.jpg'},{image : 'pic41.jpg'}, {image : 'pic42.jpg'}, {image : 'pic43.jpg'}, {image : 'pic44.jpg'}, {image : 'pic45.jpg'}, {image : 'pic46.jpg'}, {image : 'pic47.jpg'}, {image : 'pic48.jpg'}, {image : 'pic49.jpg'}, 
						{image : 'pic50.jpg'}, {image : 'pic51.jpg'}, {image : 'pic52.jpg'}, {image : 'pic53.jpg'}, {image : 'pic54.jpg'}, {image : 'pic55.jpg'}, {image : 'pic56.jpg'}, {image : 'pic57.jpg'}, {image : 'pic58.jpg'}, {image : 'pic59.jpg'}, 
						{image : 'pic60.jpg'}, {image : 'pic61.jpg'}, {image : 'pic62.jpg'}, {image : 'pic63.jpg'}, {image : 'pic64.jpg'}, {image : 'pic65.jpg'}, {image : 'pic66.jpg'}, {image : 'pic67.jpg'}, {image : 'pic68.jpg'}, {image : 'pic69.jpg'}, 
						{image : 'pic70.jpg'}, {image : 'pic71.jpg'}, {image : 'pic72.jpg'}, {image : 'pic73.jpg'}, {image : 'pic74.jpg'}, {image : 'pic75.jpg'}, {image : 'pic76.jpg'}, {image : 'pic77.jpg'}, {image : 'pic78.jpg'}, {image : 'pic79.jpg'}, 
						{image : 'pic80.jpg'}, {image : 'pic81.jpg'}, {image : 'pic82.jpg'}, {image : 'pic83.jpg'}, {image : 'pic84.jpg'}, {image : 'pic85.jpg'}, {image : 'pic86.jpg'}, {image : 'pic87.jpg'}, {image : 'pic88.jpg'}, {image : 'pic89.jpg'}, 
						{image : 'pic90.jpg'}, {image : 'pic91.jpg'}, {image : 'pic92.jpg'}, {image : 'pic93.jpg'}, {image : 'pic94.jpg'}, {image : 'pic95.jpg'}, {image : 'pic96.jpg'}, {image : 'pic97.jpg'}, {image : 'pic98.jpg'}, {image : 'pic99.jpg'}, 
						{image : 'pic110.jpg'}, {image : 'pic111.jpg'}, {image : 'pic112.jpg'}, {image : 'pic113.jpg'}, {image : 'pic114.jpg'}, {image : 'pic115.jpg'}, {image : 'pic116.jpg'}, {image : 'pic117.jpg'}, {image : 'pic118.jpg'}, {image : 'pic119.jpg'}, 
						{image : 'pic120.jpg'}
					]
					
				}
			],
		examplePrimeStimulus : 
		{
			nameForLogging : 'training', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'Control1.jpg'}, {image : 'Control2.jpg'}, {image : 'Control3.jpg'}, {image : 'Control4.jpg'}, {image : 'Control5.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://navmayan.github.io/implicit_tasks_qltrcs/images'
		}
			
	});
});