var test = require('tape');
var fs = require('fs');
var yml = require('js-yaml');
var BuildForm = require('../lib/buildform.js');

test('build test', function (t) {
	t.plan(4)
  	var doc = yml.safeLoad(fs.readFileSync(__dirname + '/test.yml', 'utf8'));  
    
    var form = new BuildForm(); // Initialize the BuildForm module
    t.equal(typeof BuildForm, 'function');

    console.log("testing for BuildForm initialization")
    form = new BuildForm(doc);	// Initialize the BuildForm module
    t.equal(form.d.controls, doc.controls)

    console.log("testing for BuildForm form")
    t.equal(form.makeForm().join(''),'<div class="form-group"><label for="question" class="control-label">Ask a question</label>\n<textarea class="form-control" rows="3" id="question" name="question" placeholder="Ask a question"></textarea></div><div class="form-group">\n<input class="form-control" id="tags" name="tags" type="text" placeholder="Add a tag"></div><div class="form-group"><label for="status" class="control-label">There may be a label</label>\n<select class="form-control"><option>Option 1</option><option>Option 2</option></select>')

    console.log("testing the setAttr")
    t.equal(form.setAttr('<div class="form-group">', "test","value"), '<div test="value" class="form-group">')

});