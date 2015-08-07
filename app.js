#!/usr/bin/env node

// Define a form
var doc = {
  "controls": [
    {
      "name": "question",
      "label": "Ask a question",
      "type": "textarea",
      "placeholder": "Ask a question"
    },
    {
      "name": "tags",
      "type": "text",
      "placeholder": "Add a tag"
    },
    {
      "name": "selections",
      "label": "This is a selection",
      "type": "select",
      "options": ["Option 1", "Option 2"]
    }
  ]
}
var BuildForm = require('./lib/buildform.js');
var form = new BuildForm(doc);
var out = form.makeForm();

// console.log(out.join(''));

// Start Server
var server = require('./lib/server.js')(out);