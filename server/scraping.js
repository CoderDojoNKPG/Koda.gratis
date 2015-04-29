Meteor.startup(function () {

  Meteor.methods({
    'getDojos': function getDojos(user) {
      var cheerio = Meteor.npmRequire('cheerio'),
      result = Meteor.http.get("http://coderdojo.se");
      $ = cheerio.load(result.content);

      Dojo = $('h4').html();
      console.log(Dojo);

      return Dojo;
    }

});
});
