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
					let heading = {text: scene.heading, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(heading)
				}
				if (scene.type === 'action') {
					let action = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(action)
				}
				if (scene.type === 'dialogue-single') {
					let ds = fountainActions.parseDialouge(scene.characters, index, scene.type);
					tmpScene.push(ds)
				}
				if (scene.type === 'parenthetical') {
					let paren = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(paren)
				}
				if (scene.type === 'note') {
					let note = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(note)
				}
				if (scene.type === 'centered') {
					let centered = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(centered)
				}
				if (scene.type === 'transition') {
					let transition = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(transition)
				}
				if (scene.type === 'synopsis') {
					let synopsis = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(synopsis)
				}
				if (scene.type === 'page_break') {
					let pageBreak = {text: scene.text, item_index: scene.item_index, type: scene.type, scene_number: index + 1}
					tmpScene.push(pageBreak)
				}
				if (scene.type === 'section') {
					let section = {text: scene.text, item_index: scene.item_index, depth: scene.depth, type: scene.type, scene_number: index + 1}
					tmpScene.push(section)
				}
				else {
					return
				}
			}
		})
		
		tmpScene = tmpScene.filter(Boolean)
		parsedScenes.push(tmpScene)
	}

	console.log('SAVED SCENES', parsedScenes)

	return fountainActions.parseLines(parsedScenes)
}

fountainActions.parseLines = function (scenes) {
	
	let parsedLines = []
	let parsedScenes = []
	let parsedScene;

	console.log('Parsing Scenes', scenes)

	for(let i = 0; i < scenes.length; i++) {
			console.log('SCENE NUMBER ', i)
			console.log('SCENE ', scenes)
			console.log('CURRENT SCENE', scenes[i])

			parsedScene = {
				scene_name: "Please add a scene name",
				scene_desc: "Please add a short description.",
				scene_heading: "",
				scene_number: 0,
				scene: []
			}

			scenes[i].forEach(function(scene, index){

				if (scene.type === 'heading') {
					parsedScene.scene_name = scene.text
					parsedScene.scene_number = scene.scene_number
					parsedScene.scene_heading = scene.text
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'action') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'dialogue-single') {
					parsedScene.scene.push(scene.name + "\n")
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'parenthetical') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'note') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'centered') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'transition') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'synopsis') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'page_break') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				if (scene.type === 'section') {
					parsedScene.scene.push(scene.text + "\n\n")
				}	
		})
		
		console.log(parsedScene.scene.join("\n"))
		parsedScene.scene = fountainActions.stripHTML(parsedScene.scene.join(""))
		parsedScenes.push(parsedScene)
	}
	
	// console.log('PARSED SCENE', parsedScene.scene)
	console.log("PARSED SCENES ", parsedScenes)
	return parsedScenes
}

fountainActions.parseDialouge = function (charArray, index, type) {
	let sceneDialoge = []
	let ds

	console.log('CXHAR ARRAY ', charArray)

	ds = {
		name: "",
		text: "",
		dialouge_index: 0,
		type: type,
		scene_number: index + 1
	}
	
	for(let i=0; i < charArray.length; i++) {

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
	}
	
	if (ds.name === "") {
		console.log('Dropping dialogue')
		return null
	}
	else if (ds.name !== "") {
		console.log(ds)
		return ds
	}
}

fountainActions.stripHTML = function(string) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = string;
   return tmp.textContent || tmp.innerText || "";
}

export default fountainActions
