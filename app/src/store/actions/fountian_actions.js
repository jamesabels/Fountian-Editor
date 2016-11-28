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
		if (type.tokens[i].type === 'notes') {
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

fountainActions.parseTile = function (pages) {

	let titlePage = []

	console.log('PARSING OUTPUT FOR TITLES', pages)

	
	pages.forEach(function (scene, index) {
		scene.forEach(function (scene, index) {
			console.log('SCENES!!!', scene)
			if (scene.type !== 'title') {
					scene.title.forEach(function (title, index) {
					let tmpTitle = {text: title, type: 'title', scene_number: 0}
					titlePage.push(tmpTitle)
				})
			}
			if (scene.credit !== undefined) {
					scene.credit.forEach(function (credit, index) {
					let tmpCredit = {text: credit, type: 'credit', scene_number: 0}
					titlePage.push(tmpCredit)
				})
			}
			if (scene.authors !== undefined) {
					scene.authors.forEach(function (author, index) {
					let tmpAuthor = {text: author, type: 'author', scene_number: 0}
					titlePage.push(tmpAuthor)
				})
			}
			if (scene.contact !== undefined) { 
					scene.contact.forEach(function (contact, index) {
					let tmpContact = {text: contact, type: 'contact', scene_number: 0}
					titlePage.push(tmpContact)
				})
			}
			if (scene.source !== undefined) { 
					scene.source.forEach(function (source, index) {
					let tmpSource = {text: source, type: 'source', scene_number: 0}
					titlePage.push(tmpSource)
				})
			}
			if (scene.copyright !== undefined) { 
					scene.copyright.forEach(function (copyright, index) {
					let tmpCopyright = {text: copyright, type: 'copyright', scene_number: 0}
					titlePage.push(tmpCopyright)
				})
			}
			if (scene.note !== undefined) { 
					scene.note.forEach(function (note, index) {
					let tmpNote = {text: note, type: 'note', scene_number: 0}
					titlePage.push(tmpNote)
				})
			}
			if (scene.draft_date !== undefined) { 
					scene.draft_date.forEach(function (date, index) {
					let tmpDraft = {text: date, type: 'draft_date', scene_number: 0}
					titlePage.push(tmpDraft)
				})
			}
			if (scene.date !== undefined) { 
					scene.date.forEach(function (date, index) {
					let tmpDate = {text: date, type: 'date', scene_number: 0}
					titlePage.push(tmpDate)
				})
			}

		})
	})


	
	// console.log('PARSED TITLE PAGE', titlePage)
	console.log('TITLE PAGE!!!', titlePage)
	return titlePage
}

fountainActions.parsePages = function (output) {
	
	var page_break = 1;
	var pages;
	var page;

	pages = []
	page = {
		page_number: 0,
		page_name: '',
		page_desc: '',
		tokens: []
	}

	output.tokens.forEach(function(token, index) {

		if(token.type !== 'page_break') {
			page.page_number = page_break
			page.page_name = 'Page ' + page_break
			page.page_desc = 'This is page ' + page_break
			page.tokens.push(token)
		}
		else {
			page_break = page_break + 1
			pages.push(page)
			page = {
				page_number: 0,
				page_name: '',
				page_desc: '',
				tokens: []
			}
		}
	})

	pages.push(page)

	// var scenes = fountainActions.parseScenes(pages)

	console.log('RETURNING PAGES', pages)

	return pages
}

fountainActions.parseScenes = function (pages) {

	// console.log('RAW SCENES', output.script.scenes)

	let savedScenes = []
	let savedItems = []
	let parsedScenes = []

	var tmpScene;

	// Push script title page 
	// parsedScenes.push(fountainActions.parseTile(pages))

	// for(let i = 0; i < pages.length; i++ ) {
		
	pages.forEach(function (page, index) {
		savedScenes.push(page)
	})
		
		// savedScenes.push(pages[0][i])
	// }

	for(let i = 0; i < savedScenes.length; i++ ) {
		tmpScene = []
		savedScenes[i].scenes.forEach(function(scene, index) {
			
			if (scene.type !== undefined) {
				if (scene.type !== 'dialogue-single' || scene.type !== 'dialogue-double') {
					tmpScene.push({text: scene.text, type: scene.type, scene_number: index + 1})
				}
				if (scene.type === 'dialogue-single') {
					let ds = fountainActions.parseDialouge(scene.characters, index, scene.type);
					tmpScene.push(ds)
				}
				if (scene.type === 'dialogue-double') {
					let dd = fountainActions.parseDialouge(scene.characters, index, scene.type);
					tmpScene.push(dd)
				}
				else {
					return
				}
			}
		})
		
		tmpScene = tmpScene.filter(Boolean)
		let scene = tmpScene.reverse()
		parsedScenes.push(scene)
	}

	console.log('SAVED SCENES', parsedScenes)
	return parsedScenes

}

fountainActions.parseLines = function (scenes) {
	
	let parsedLines = []
	let parsedScenes = []
	let parsedTitle = []
	let parsedScene;
	let titleScene;

	console.log('Parsing RAW Scenes', scenes)
	
	// titleScene = {
	// 	scene_name: 'Title Page',
	// 	scene_desc: 'The title page of the script',
	// 	scene_type: '',
	// 	scene_heading: '',
	// 	scene_number: 0,
	// 	scene: []
	// }
	
	// for(let i = 0; i < scenes.length; i++) {
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

			scenes.forEach(function(scene, index) {

				// parsedScene = {
				// 	scene_name: 'Please add a scene name',
				// 	scene_desc: 'Please add a short description.',
				// 	scene_type: 'scene',
				// 	scene_heading: '',
				// 	scene_number: 0,
				// 	scene: []
				// }

				if (scene.type === 'title') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'credit') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'author') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'date') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'copyright') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'draft_date') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'note') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'source') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'contact') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'scene_heading') {
					parsedScene.scene_name = scene.text
					parsedScene.scene_number = scene.scene_number
					parsedScene.scene_heading = scene.text
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'action') {
					parsedScene.scene.push(scene.text + "\n\n")
				}
				else if (scene.type === 'character') {
					parsedScene.scene.push(scene.text + "\n")
				}
				else if (scene.type === 'dialogue') {
					parsedScene.scene.push(scene.text + "\n")
				}
				else if (scene.type === 'dialogue_begin' ) {
					console.log('Found a', scene.type)
				}
				else if (scene.type === 'dialogue_end') {
					parsedScene.scene.push("\n")
				}
				else if (scene.type === 'parenthetical') {
					parsedScene.scene.push(scene.text + "\n")
				}
				else if (scene.type === 'notes') {
					parsedScene.scene.push('NOTE: ' + scene.text + "\n\n")
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
		parsedScene.scene = fountainActions.stripHTML(parsedScene.scene.reverse().join(""))

		if (parsedScene.scene !== '') {
			parsedScenes.push(parsedScene)
		}
		else {
			console.log('FOUND EMPTY SCENE', parsedScene)
		}

		console.log('RETURING PAGES SCENES', parsedScenes)
		return parsedScenes
	// }

	// // titleScene.scene = fountainActions.stripHTML(titleScene.scene.reverse().join(""))
	// // parsedTitle.push(titleScene)
	
	// // let parsedScript = parsedTitle.concat(parsedScenes)
	// // console.log('PARSED SCENE', parsedScene.scene)
	// // console.log("PARSED SCENES WITH TITLE PAGE!!", parsedScript)

	// console.log('PARSED SCRIPT', parsedScript)
	// return parsedScript
}

fountainActions.parseDialouge = function (charArray, index, type) {
	let sceneDialoge = []
	let ds

	// console.log('CXHAR ARRAY ', charArray)

	ds = {
		name: '',
		text: '',
		dialouge_index: 0,
		type: type,
		scene_number: index + 1
	}
	
	for(let i=0; i < charArray.length; i++) {

		// console.log(charArray[i].type)
		
		if (charArray[i].name !== undefined) {
			// console.log(charArray[i].name)
			ds.name = charArray[i].name
		}
		else {
			// console.log('No lines!')
			
		}
		if (charArray[i].lines !== undefined) {
			// console.log(charArray[i].lines[i].text)
			ds.text = charArray[i].lines[i].text
		}
		else {
			// console.log('No Name!')
		}

		ds.dialouge_index = index
	}
	
	if (ds.name === "") {
		// console.log('Dropping dialogue')
		return null
	}
	else if (ds.name !== "") {
		// console.log(ds)
		return ds
	}
}

fountainActions.stripHTML = function(string) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = string;
   return tmp.textContent || tmp.innerText || "";
}

export default fountainActions
