/** keytarjs.org 2013 (cc) by-sa  */
$.fn.keytar = function(keyCode, method){
  $(document).keyup(function(e){
    if (e.keyCode == keyCode)
      $(this)[method]();
  }.bind(this));
  return this;
};
