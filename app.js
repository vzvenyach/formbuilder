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
    }
  ]
}
var BuildForm = require('./lib/buildform.js');
var form = new BuildForm(doc);
var out = form.makeForm();


// Dump the form into a template
var swig = require('swig');
var tpl = swig.compileFile('template.html',{autoescape:false});
console.log(tpl({form_controls: out.join('')}));