const fountainActions = {}

fountainActions.parseFountain = function (type) {
	// Init state
	let tempState = {
		title: [],
		credit: [],
		author: [],
		source: [],
		date: [],
		draft_date: [],
		copyright: [],
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
		section: [],
		text: []
	}
	// Store fountain output
	tempState.title = type.title
	tempState.html.script = type.html.script
	tempState.html.title_page = type.html.title_page
	tempState.tokens = type.tokens

	// Parse fountain output
	for (let i = 0; i < type.tokens.length; i++) {
		// console.log('PARSING TOKENS', scene)
		if (type.tokens[i].type === 'title') {
			console.log('TITLE TOKEN!!!!', type.tokens[i])
		}
		if (type.tokens[i].type === 'author') {
			tempState.author.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
		if (type.tokens[i].type === 'credit') {
			tempState.credit.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
		if (type.tokens[i].type === 'source') {
			tempState.source.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
		if (type.tokens[i].type === 'date') {
			tempState.date.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
		if (type.tokens[i].type === 'copyright') {
			tempState.copyright.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
		if (type.tokens[i].type === 'draft_date') {
			tempState.draft_date.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
				scene_number: type.tokens[i].scene_number
			})
		}
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
		else {
			tempState.text.push({
				type: type.tokens[i].type,
				text: type.tokens[i].text,
			})
		}
	}

	return tempState
}

fountainActions.parseTile = function (output) {

	let titlePage = []

	console.log('PARSING OUTPUT FOR TITLES', output)

	

	if (output.title_page.title !== undefined) {
		output.title_page.title.forEach(function (title, index) {
			let tmpTitle = {text: title, type: 'title', scene_number: 0}
			titlePage.push(tmpTitle)
		})
	}
	if (output.title_page.credit !== undefined) {
		output.title_page.credit.forEach(function (credit, index) {
			let tmpCredit = {text: credit, type: 'credit', scene_number: 0}
			titlePage.push(tmpCredit)
		})
	}
	if (output.title_page.authors !== undefined) {
		output.title_page.authors.forEach(function (author, index) {
			let tmpAuthor = {text: author, type: 'author', scene_number: 0}
			titlePage.push(tmpAuthor)
		})
	}
	if (output.title_page.contact !== undefined) { 
		output.title_page.contact.forEach(function (contact, index) {
			let tmpContact = {text: contact, type: 'contact', scene_number: 0}
			titlePage.push(tmpContact)
		})
	}
	if (output.title_page.source !== undefined) { 
		output.title_page.source.forEach(function (source, index) {
			let tmpSource = {text: source, type: 'source', scene_number: 0}
			titlePage.push(tmpSource)
		})
	}
	if (output.title_page.copyright !== undefined) { 
		output.title_page.copyright.forEach(function (copyright, index) {
			let tmpCopyright = {text: copyright, type: 'copyright', scene_number: 0}
			titlePage.push(tmpCopyright)
		})
	}
	if (output.title_page.note !== undefined) { 
		output.title_page.note.forEach(function (note, index) {
			let tmpNote = {text: note, type: 'note', scene_number: 0}
			titlePage.push(tmpNote)
		})
	}
	if (output.title_page.draft_date !== undefined) { 
		output.title_page.draft_date.forEach(function (date, index) {
			let tmpDraft = {text: date, type: 'draft_date', scene_number: 0}
			titlePage.push(tmpDraft)
		})
	}
	if (output.title_page.date !== undefined) { 
		output.title_page.date.forEach(function (date, index) {
			let tmpDate = {text: date, type: 'date', scene_number: 0}
			titlePage.push(tmpDate)
		})
	}

	
	console.log('PARSED TITLE PAGE', titlePage)
	
	return titlePage
}

fountainActions.parseScenes = function (output) {

	console.log('RAW SCENES', output.script.scenes)

	let array = output.script.scenes
	let savedScenes = []
	let savedItems = []
	let parsedScenes = []

	var tmpScene;

	array.reverse()

	// Push script title page 
	parsedScenes.push(fountainActions.parseTile(output))



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
	let parsedTitle = []
	let parsedScene;
	let titleScene;

	console.log('Parsing Scenes', scenes)
	
	titleScene = {
		scene_name: 'Title Page',
		scene_desc: 'The title page of the script',
		scene_type: '',
		scene_heading: '',
		scene_number: 0,
		scene: []
	}
	
	for(let i = 0; i < scenes.length; i++) {
			// console.log('SCENE NUMBER ', i)
			// console.log('SCENE ', scenes)
			// console.log('CURRENT SCENE', scenes[i])

			parsedScene = {
				scene_name: 'Please add a scene name',
				scene_desc: 'Please add a short description.',
				scene_type: 'scene',
				scene_heading: '',
				scene_number: 0,
				scene: []
			}

			scenes[i].forEach(function(scene, index) {
				if (scene.type === 'title') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'credit') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'author') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'date') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'copyright') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'draft_date') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'note') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'source') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'contact') {
					titleScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'heading') {
					parsedScene.scene_name = scene.text
					parsedScene.scene_number = scene.scene_number
					parsedScene.scene_heading = scene.text
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'action') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'dialogue-single') {
					parsedScene.scene.push(scene.name + "\n")
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'parenthetical') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'note') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'centered') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'transition') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'synopsis') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'page_break') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'section') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else {
					console.warn('UNKNOWN SCENE TYPE', scene)
				}
		})
		
		// console.log(parsedScene.scene.join("\n"))
		parsedScene.scene = fountainActions.stripHTML(parsedScene.scene.join(""))

		if (parsedScene.scene !== '') {
			parsedScenes.push(parsedScene)
		}
		else {
			console.log('FOUND EMPTY SCENE', parsedScene)
		}
	}

	titleScene.scene = fountainActions.stripHTML(titleScene.scene.join(""))
	parsedTitle.push(titleScene)
	
	let parsedScript = parsedTitle.concat(parsedScenes)
	// console.log('PARSED SCENE', parsedScene.scene)
	console.log("PARSED SCENES WITH TITLE PAGE!!", parsedScript)

	return parsedScript
}

fountainActions.parseDialouge = function (charArray, index, type) {
	let sceneDialoge = []
	let ds

	// console.log('CXHAR ARRAY ', charArray)

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
