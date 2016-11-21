const fountainActions = {}

fountainActions.parseFountain = function (type) {
	// Init state
	let tempState = {
		title: '',
		html: {
			script: '',
			title_page: ''
		},
		tokens: [],
		characters: [],
		scene_headings: [],
		action: [],
		dialogue_begin: [],
		dialogue_end: [],
		dialogue: [],
		parens: [],
		notes: [],
		centered: [],
		page_break: [],
		transition: [],
		synopsis: [],
		section: []
	}
	// Store fountain output
	tempState.title = type.title
	tempState.html.script = type.html.script
	tempState.html.title_page = type.html.title_page
	tempState.tokens = type.tokens

	// Parse fountain output
	for (let i = 0; i < type.tokens.length; i++) {
		// console.log('PARSING TOKENS', type.tokens[i])
		if (type.tokens[i].type === 'scene_heading') {
			tempState.scene_headings.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
		if (type.tokens[i].type === 'action') {
			tempState.action.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'dialogue_begin') {
			tempState.dialogue_begin.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				dual: type.tokens[i].dual
			})
		}
		if (type.tokens[i].type === 'dialogue_end') {
			tempState.dialogue_end.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'dialogue') {
			tempState.dialogue.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'character') {
			tempState.characters.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'parenthetical') {
			tempState.parens.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'note') {
			tempState.notes.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'centered') {
			tempState.centered.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'page_break') {
			tempState.page_break.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'transition') {
			tempState.transition.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'synopsis') {
			tempState.synopsis.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text
			})
		}
		if (type.tokens[i].type === 'section') {
			tempState.section.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				depth: type.tokens[i].depth
			})
		}
	}

	return tempState
}

fountainActions.parseScenes = function (output) {

	console.log('RAW SCENES', output.script.scenes)

	let array = output.script.scenes
	let savedScenes = []
	let savedItems = []
	let parsedScenes = []

	var tmpScene;

	array.reverse()

	for(let i = 0; i < array.length; i++ ) {
		// console.log("SCENES: ", array[i])

		savedScenes.push(array[i])

		savedScenes[i].forEach(function(scene, index) {
			scene.scene_number = i
			scene.item_index = index
		})
	}

	for(let i = 0; i < savedScenes.length; i++ ) {
		
		tmpScene = []

		savedScenes[i].forEach(function(scene, index) {
			
			if (scene.type !== undefined) {
				if (scene.type === 'heading') {
					console.log('Found heading', scene.item_index)
					let heading = {text: scene.heading, item_index: scene.item_index}
					tmpScene.push(heading)
				}
				if (scene.type === 'action') {
					console.log('Found action!', scene.item_index)
					let action = {text: scene.text, item_index: scene.item_index}
					tmpScene.push(action)
				}
				if (scene.type === 'dialogue-single') {
					console.log('Found a dilaouge-single', scene.item_index)
					// let ds = {characters: scene.characters, item_index: scene.item_index}

					let ds = fountainActions.parseDialouge(scene.characters, index);
					tmpScene.push(ds)
					tmpScene = tmpScene.filter(Boolean)
				}
				if (scene.type === 'parenthetical') {
					console.log('Found a paren!', scene.item_index)
					let paren = {text: scene.text, item_index: scene.item_index}
					tmpScene.push(paren)
				}
			}
		})
		
		console.log(tmpScene)
		parsedScenes.push(tmpScene)
		console.log('FINAL SCENE LIST ', parsedScenes)
	}

	// for(let i = 0; i < savedScenes.length; i++ ) {
	// 	// console.log("SCENES: ", array[i])
	// }


	console.log(savedScenes)
		
		// console.log('Parsing Scene ', i)

		// let scene = {}
		// let heading = []
		// let lines = []
		// let dialogArray = []
		
		// array[i].forEach(function(element, index) {

		// 	if (element.text !== undefined) {
		// 		lines.push(element.text)
		// 	}
		// 	if (element.heading !== undefined) {
		// 		heading.push(element.heading)		
		// 	}
		// 	if (element.type === 'dialogue-single') {
		// 		console.log('Found dialog Single!', element.characters)

		// 		for(let i=0; i < element.characters.length; i++) {
		// 			if (element.characters[i].name !== undefined) {
		// 				console.log(element.characters[i].name)
		// 				dialogArray.push(element.characters[i].name)
		// 			}
		// 			if (element.characters[i].lines !== undefined) {
		// 				element.characters[i].lines.forEach(function(line, index) {
		// 					dialogArray.push(line.text)
		// 				})
		// 			}
		// 		}
		// 	}
		// 	if (element.type === 'dialogue-double') {
		// 		console.log('Found dialog Double!', element.characters)
		// 	}
		// 	// console.log(element)
		// 	// scene.heading = element.heading
		// 	// scene.type = element.type
		// 	// scene.text = element.text
		// 	// scene.scene_number = index
			
		// }, this);

		// console.log('DIALOG ARRAY', dialogArray)
		// lines.push(dialogArray.reverse().join(" \n"))

		// console.log('LINES', lines.reverse().join(" \n"))

		// scene.scene_name = heading.join("")
		// scene.scene_desc = ""
		// scene.scene_heading = heading.join("")
		// scene.scene_number =  i + 1
		// scene.scene_index = i
		// scene.scene = this.stripHTML(lines.reverse().join(" \n"))

		// savedScenes.push(scene)

		// for(let z = 0; i < output.script.scenes[i].length; i++ ) {
		// 	console.log(output.script.scenes[i][z].type)

		// switch(output.script.scenes[i][z].type) {
		// 	case 'heading':
		// 		console.log('HEADING!!!')
		// 	default: 
		// 		console.log('FOUND AND OBJECT!')
		// }
		// }

	// }

	return savedScenes
}

fountainActions.parseDialouge = function (charArray, index) {
	let sceneDialoge = []
	let ds

	console.log('CXHAR ARRAY ', charArray)

	ds = {
		name: "",
		text: "",
		dialouge_index: 0
	}
	
	for(let i=0; i < charArray.length; i++) {

		// ds = {
		// 	name: "",
		// 	text: "",
		// 	dialouge_index: i
		// }

		console.log(charArray[i].type)
		
		if (charArray[i].name !== undefined) {
			// console.log(charArray[i].name)
			ds.name = charArray[i].name
		}
		else {
			console.log('No lines!')
			
		}
		if (charArray[i].lines !== undefined) {
			// console.log(charArray[i].lines[i].text)
			ds.text = charArray[i].lines[i].text
		}
		else {
			console.log('No Name!')
		}

		ds.dialouge_index = index

	// 	for(let z=0; z < charArray.characters.length; z++) {
	// 		charArray.characters[i].forEach(function(subchar, index) {
	// 			console.log('FOUND A SUBCHAR', subchar)
	// 		})
	// 	}
	}
	
	if (ds.name === "") {
		console.log('Dropping dialogue')
		return null
	}
	else if (ds.name !== "") {
		return ds
	}
}

fountainActions.stripHTML = function(string) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = string;
   return tmp.textContent || tmp.innerText || "";
}

export default fountainActions
