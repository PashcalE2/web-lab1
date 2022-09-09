function createField(re) {
    this['regexp'] = re;
}
    // absolute regexp
createField.prototype.regexp = /^(-?\d(?:[.,]?\d+)?)$/m;
createField.prototype.valid = false;
createField.prototype.nullify = function() {
    this.valid = false;
};

var form_fields = new Array();
form_fields['XVar'] = new createField();
