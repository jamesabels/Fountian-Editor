var createPdf = require('pdfmake-browserified')

const PDFModule = {
  state: {},
  mutations: {},
  actions: {
    INIT_PDF (context) {
        console.log('initizlizing PDF')
        var docDefinition = { content: 'This is an sample PDF printed with pdfMake' }
        createPdf(docDefinition).open()
    }
  }
}

export default PDFModule
