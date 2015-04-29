Meteor.call("getDojos", function(err, result) {  
  console.log("Dojos är: " + result);
  Session.set('dojos', result);
});

Template[getTemplate('footer')].helpers({
  footerCode: function(){
    return Settings.get('footerCode');
  },
  footerClass: function(){
    return Session.get('isPostsList') ? 'absolute' : 'static';
  },
  footerModules: function () {
    return footerModules;
  },
  getTemplate: function () {
    return getTemplate(this.template);
  },
  dojos: function() {
    return Session.get('dojos');
  }
});