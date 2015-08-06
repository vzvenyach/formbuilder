function BuildForm (d) {
  this.d = d;

  this.makeForm = function () {
    var obj = this;
    var form = d.controls.map(function (el) {
      switch (el.type) {
        case "textarea":
          return obj.makeTextarea(el);
        default:
          return obj.makeInput(el);
       }
    })
    return form
  }

  this.makeInput = function (d) {
    var control = '<div class="form-group"><label for="' + d.name + '" class="control-label">' + d.label + '</label>\n';
    control += '<input class="form-control" id="' + d.name + '" name="' + d.name + '" type="' + d.type + '" placeholder="' + d.placeholder + '"></div>';
    return control;
  }

  // Generate a "textarea" type
  this.makeTextarea = function(d) {
    var control = '<div class="form-group"><label for="' + d.name + '" class="control-label">' + d.label + '</label>\n';
      control += '<textarea class="form-control" rows="3" id="' + d.name + '" name="' + d.name + '" placeholder="' + d.placeholder + '"></textarea></div>';
    return control;
  }
}

module.exports = BuildForm;