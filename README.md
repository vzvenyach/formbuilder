# formbuilder

Start with a json (or yaml) representation of form controls... 

``` yaml
controls:
  - name: question
    label: Ask a question
    type: textarea
    placeholder: Ask a question
  - name: tags
    type: text
    placeholder: Add a tag
```

... and output a bootstrap-ready form:

``` html
<form class="form">
<div class="form-group"><label for="question" class="control-label">Ask a question</label>
<textarea class="form-control" rows="3" id="question" name="question" placeholder="Ask a question"></textarea></div><div class="form-group"><label for="tags" class="control-label">undefined</label>
<input class="form-control" id="tags" name="tags" type="text" placeholder="Add a tag"></div>
</form>
```

Just run `node app.js` and you'll get the form.

## Note

This is *very* much a proof of concept and not a functioning library. 

## To Do:

- [ ] Add command line options so that you can define the yaml/json file to generate the form
- [ ] Much more.

## License

MIT