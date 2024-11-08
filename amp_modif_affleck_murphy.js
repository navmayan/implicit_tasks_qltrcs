define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){
//Adapted from Bengayev, E. (2020, July 27). Running Project Implicit’s AMP from Qualtrics [Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-amp/  
	var API = new APIConstructor();
	
	
	return ampExtension({
		canvas : {
				maxWidth: 850,
				proportions : .8,
				background: '#000000',
				borderWidth: 4,
				canvasBackground: '#000000',
				borderColor: '#ffffff'
			}, 
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
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://navmayan.github.io/implicit_tasks_qltrcs/images'
		},

			trialsInBlock : [40,40,40], //Number of trials in each block 
			trialsInExample : 10, //Change to 0 if you don't want an example block
			
			//Duration parameters.
			fixationDuration : -1, //It means that by default we do not use fixation.
			primeDuration : 75, 
			postPrimeDuration : 0, //Duration of blank screen between prime and target.
			targetDuration : 100, //Duration of target presentation.
			showRatingDuration : 300, //In the 7-responses option, for how long to show the selected rating.
			ITI : 500, //Duration between trials.
			
			responses : 2, //Change to 7 for a 1-7 rating
	        // When using 7 response options, 
	        // we will Extremely unpleasant, Moderately unpleasant, Slightly unpleasant, neutral, Slightly pleasant, Moderately pleasant, Extremely pleasant.
		    targetCat : 'Chinese symbol', //The name of the targets (used in the instructions)
			
			//For the example block (often practice)
			exampleBlock_fixationDuration : -1, 
			exampleBlock_primeDuration : 75, 
			exampleBlock_postPrimeDuration : 0, 
			exampleBlock_targetDuration : 100, 
			
			
			//Instructions text for the 2-responses version.
			exampleBlockInst1: '<div><p style="font-size:20px; text-align:center; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			'Now you will complete a Visual Processing Task.<br/><br/>' + 
			'You will see pairs of pictures flashed one after the other.<br/><br/>' + 
			'The first picture shows a person, and the second shows a Chinese character.<br/><br/>' + 
			'Your job is to judge whether each person is a pleasant individual or an unpleasant individual.<br/><br/>' +
			'Of course, there are no right or wrong answers. Just report your intuition as to whether each person is a pleasant or unpleasant individual.<br/><br/>' +
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'To proceed with the instructions, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial">' + 
			'<color="ffffff">[Instructions 1/3]</p></div>',
			exampleBlockInst2: '<div><p style="font-size:20px; text-align:center; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			'Put your middle or index fingers on the E and I keys of your keyboard.<br/><br/>' + 
			'If you think someone is a more pleasant individual than average, press the E key on the left.<br/><br/>' + 
			'If you think someone is a less pleasant individual than average, press the I key on the right.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'To proceed with the instructions, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial">' + 
			'<color="ffffff">[Instructions 2/3]</p></div>',
			exampleBlockInst3: '<div><p style="font-size:20px; text-align:center; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			'It is important to note that the Chinese characters can sometimes bias people’s judgments of the people.<br/><br/>' + 
			'Because we are interested in how you can avoid being biased, please try your absolute best not to let the Chinese characters bias your judgment of the people!<br/><br/>' + 
			'Give us an honest assessment of each person, regardless of the images that follow them.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'To continue, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial">' + 
			'<color="ffffff">[Instructions 3/3]</p></div>',
			exampleBlockInst4: '<div><p style="font-size:20px; text-align:center; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			'To get a feel for the task, we will begin with 10 practice trials.<br/><br/>' + 
			"Again, your task is to judge whether the people are more pleasant individuals or less pleasant individuals than average by pressing either the 'E' or 'I' key.<br/><br/>" + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'When you are ready to try a few practice trials, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial">' + 
			'<color="ffffff">[Practice trials]</p></div>',
			firstBlockInst : '<div><p style="font-size:20px; text-align:center; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			"Practice is now complete and the Visual Processing Task will now begin.<br/><br/>" + 
			"As a reminder, if you think someone is a more pleasant individual than average, press the 'E' key.<br/><br/>" + 
			"If you think someone is a less pleasant individual than average, press the 'I' key.<br/><br/>" + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial">' + 
			'<color="ffffff"> </p></div>',
			middleBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			'Continue with the task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			"If you think a Chinese character looks more pleasant than average, press the 'E' key.<br/><br/>" + 
			"If you think a Chinese character looks less pleasant than average, press the 'I' key.<br/><br/>" + 
			'Judge each person and not the Chinese character that appears after it. ' + 
			'Pictures of Chinese characters can sometimes bias people’s judgments of the people.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="ffffff">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="ffffff"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			"If you think a Chinese character looks more pleasant than average, press the 'E' key.<br/><br/>" + 
			"If you think a Chinese character looks less pleasant than average, press the 'I' key.<br/><br/>" + 
			'Judge each person and not the Chinese character that appears after it. ' + 
			'Pictures of Chinese characters can sometimes bias people’s judgments of the people.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="ffffff"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="ffffff">[Round blockNum of nBlocks]</p></div>',


			//Instructions text for the 7-responses version.
			exampleBlockInst7: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Rate your feelings toward the targetCats from <i>Extremely negativeAdj</i> to <i>Extremely positiveAdj</i>. ' + 
			'The items appear and disappear quickly.  ' + 
			'Remember to ignore the item that appears before the targetCat and evaluate only the targetCat.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 1 of nBlocks]</p></div>',
			firstBlockInst7 : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			"See how fast it is? Don't worry if you miss some. " + 
			'Go with your gut feelings.<br/><br/>' + 
			'Concentrate on each targetCat and rate it based on your own feelings. ' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'Notice: you can respond with your mouse or the keys 1-7.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
			middleBlockInst7 : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Continue to another round of this task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on each targetCat and rate it based on your own feelings. ' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst7 : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on each targetCat and rate it based on your own feelings. ' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',

			endText: '<div><p style="font-size:20px; text-align:center; vertical-align:bottom; margin-left:10px; font-family:arial"><color="FFFFFF">'+
			'You have completed the Visual Processing Task.<br/><br/>Press "space" to resume the study.</p></div>', 
			
			//The feedback messages:
			//The task will save a "feedback" variable that details the number of each type of responses after primes of each category. 
			//And also "result" that will construct a preference message, based on those numbers.
			//In the text you provide below, CATEGORYA, and CATEGORYB will be replaced with the names of the relevant categories.
			fb_att2WithCatA_att1withCatB : 'Your data suggest an automatic preference of CATEGORYA over CATEGORYB.',
			fb_equal_CatAvsCatB : 'Your data suggest no preference between CATEGORYA and CATEGORYB.'
			
		};			
	});
});
