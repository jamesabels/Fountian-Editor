import fountain from '../../static/js/fountain-js.min.js'
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
		token.forEach(function (scene, index) {
			console.log('SCENES!!!', scene)
			if (token.type !== 'title') {
					token.title.forEach(function (title, index) {
					let tmpTitle = {text: title, type: 'title', scene_number: 0}
					titlePage.push(tmpTitle)
				})
			}
			if (token.credit !== undefined) {
					token.credit.forEach(function (credit, index) {
					let tmpCredit = {text: credit, type: 'credit', scene_number: 0}
					titlePage.push(tmpCredit)
				})
			}
			if (token.authors !== undefined) {
					token.authors.forEach(function (author, index) {
					let tmpAuthor = {text: author, type: 'author', scene_number: 0}
					titlePage.push(tmpAuthor)
				})
			}
			if (token.contact !== undefined) { 
					token.contact.forEach(function (contact, index) {
					let tmpContact = {text: contact, type: 'contact', scene_number: 0}
					titlePage.push(tmpContact)
				})
			}
			if (token.source !== undefined) { 
					token.source.forEach(function (source, index) {
					let tmpSource = {text: source, type: 'source', scene_number: 0}
					titlePage.push(tmpSource)
				})
			}
			if (token.copyright !== undefined) { 
					token.copyright.forEach(function (copyright, index) {
					let tmpCopyright = {text: copyright, type: 'copyright', scene_number: 0}
					titlePage.push(tmpCopyright)
				})
			}
			if (token.note !== undefined) { 
					token.note.forEach(function (note, index) {
					let tmpNote = {text: note, type: 'note', scene_number: 0}
					titlePage.push(tmpNote)
				})
			}
			if (token.draft_date !== undefined) { 
					token.draft_date.forEach(function (date, index) {
					let tmpDraft = {text: date, type: 'draft_date', scene_number: 0}
					titlePage.push(tmpDraft)
				})
			}
			if (token.date !== undefined) { 
					token.date.forEach(function (date, index) {
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

	console.log('RAW FOUNTAIN OUTPUT', output)

	// output.tokens = output.tokens.reverse()
	
	var page_break = 0;
	var pages;
	var page;

	pages = []
	page = {
		page_number: null,
		page_name: '',
		page_desc: '',
		tokens: [],
		text: '',
		html: ''
	}

	output.tokens.forEach(function(token, index) {

		if(token.type !== 'page_break') {
			page.page_name = 'Please add a page title'
			page.page_desc = 'Please add a page description'
			page.tokens.push(fountainActions.parseLines(token))
		}
		else {
			page.text = fountainActions.stripHTML(page.tokens.filter(Boolean).reverse().join("\n"))
			page.html = fountain.parse(fountainActions.stripHTML(page.tokens.filter(Boolean).join("\n")), true, function (output) {
				console.log('OUTPUT!', output)
				return output.html.script
			}),
			page.tokens.push(fountainActions.parseLines(token))
			pages.push(page)
			page = {
				page_number: page_break,
				page_name: '',
				page_desc: '',
				tokens: [],
				text: '',
				html: ''
			}
		}
	})

	page.text = fountainActions.stripHTML(page.tokens.filter(Boolean).reverse().join("\n"))
	page.html = fountain.parse(fountainActions.stripHTML(page.tokens.filter(Boolean).join("\n")), true, function (output) {
		console.log('OUTPUT!', output)
		return  output.html.script
	}),
	pages.push(page)
	pages = pages

	// var scenes = fountainActions.parseScenes(pages)

	console.log('RETURNING PAGES', pages)

	return pages
}

fountainActions.parseScenes = function (scenes) {

	// console.log('RAW SCENES', output.script.scenes)

	let savedScenes = []
	let savedItems = []
	let parsedScenes = []

	// scenes = scenes.reverse()

	var tmpScene;

	// Push script title page 
	// parsedScenes.push(fountainActions.parseTile(pages))

	// for(let i = 0; i < pages.length; i++ ) {
		
	// scenes.forEach(function (sceneArray, index) {
	// 	sceneArray.forEach(function (token, index) {

	// 	})
	// })
		
		// savedScenes.push(pages[0][i])
	// }

	for(let i = 0; i < scenes.length; i++ ) {
		tmpScene = {
			scene_name: 'Please add a scene title.',
			scene_desc: 'Please add a short description.',
			scene: []
		}

		scenes[i].forEach(function(token, index) {

			if (token.type === 'scene_heading' || token.type === 'heading') {
				tmpScene.scene_name = token.heading
			}
			
			if (token.type !== undefined) {
				if (token.type !== 'dialogue-single' || token.type !== 'dialogue-double') {

					tmpScene.scene.push(fountainActions.parseLines(token))
				}
				if (token.type === 'dialogue-single') {
					let ds = fountainActions.parseDialouge(token.characters, index, token.type);
					if (ds !== null) {
						tmpScene.scene.push(ds.text  + '\n')
						tmpScene.scene.push(ds.name)
					}
				}
				if (token.type === 'dialogue-double') {
					let dd = fountainActions.parseDialouge(token.characters, index, token.type);
					if (dd !== null) {
						tmpScene.scene.push(dd.text  + '\n')
						tmpScene.scene.push(dd.name)
					}
				}
				else {
					return
				}
			}
		})
		
		tmpScene.scene = fountainActions.stripHTML(tmpScene.scene.filter(Boolean).join(""))
		tmpScene.scene_desc = tmpScene.scene
		parsedScenes.push(tmpScene)
	}

	console.log('SAVED SCENES', parsedScenes)
	return parsedScenes

}

fountainActions.parseLines = function (token) {
	
	let parsedLines = []
	let parsedScenes = []
	let parsedTitle = []
	let parsedScene;
	let titleScene;

	// console.log('Parsing RAW Token', token)

	if (undefined) {
		console.log('Found undefined', token)
		return
	}
	if (token.type === 'title') {
		return token.text + " \n"
	}
	else if (token.type === 'credit') {
		return token.text + " \n"
	}
	else if (token.type === 'author') {
		return token.text + " \n"
	}
	else if (token.type === 'date') {
		return token.text + " \n"
	}
	else if (token.type === 'copyright') {
		return token.text + " \n"
	}
	else if (token.type === 'draft_date') {
		return token.text + " \n"
	}
	else if (token.type === 'note') {
		return token.text + " \n"
	}
	else if (token.type === 'source') {
		return token.text + " \n"
	}
	else if (token.type === 'contact') {
		return token.text + " \n"
	}
	else if (token.type === 'scene_heading') {
		return token.text + " \n"
	}
	else if (token.type === 'heading') {
		return token.heading + " \n"
	}
	else if (token.type === 'action') {
		return token.text + " \n"
	}
	else if (token.type === 'character') {
		return token.text
	}
	else if (token.type === 'dialogue') {
		return token.text + " \n"
	}
	else if (token.type === 'dialogue-single') {
		console.log('Found a', token.type)
	}
	else if (token.type === 'dialogue-double') {
		console.log('Found a', token.type)
	}
	else if (token.type === 'dialogue_begin' ) {
		console.log('Found a', token.type)
	}
	else if (token.type === 'unknown' ) {
		console.log('Found a', token.type)
	}
	else if (token.type === 'dialogue_end') {
		return " \n"
	}
	else if (token.type === 'parenthetical') {
		return token.text + " \n"
	}
	else if (token.type === 'notes') {
		return 'NOTE: ' + token.text + " \n"
	}
	else if (token.type === 'centered') {
		return token.text + " \n"
	}
	else if (token.type === 'transition') {
		return token.text + " \n\n"
	}
	else if (token.type === 'synopsis') {
		return token.text + " \n"
	}
	else if (token.type === 'page_break') {
		return '====' + " \n"
	}
	else if (token.type === 'section') {
		return token.text + " \n"
	}
	else {
		console.warn('UNKNOWN SCENE TYPE', token)
	}

		
	// 	// console.log(parsedScene.token.join("\n"))
	// 	parsedScene.scene = fountainActions.stripHTML(parsedScene.token.reverse().join(""))

	// 	if (parsedScene.scene !== '') {
	// 		parsedScenes.push(parsedScene)
	// 	}
	// 	else {
	// 		console.log('FOUND EMPTY SCENE', parsedScene)
	// 	}

	// 	console.log('RETURING PAGES SCENES', parsedScenes)
	// 	return parsedScenes
	// // }

	// // titleScene.scene = fountainActions.stripHTML(titleScene.token.reverse().join(""))
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
