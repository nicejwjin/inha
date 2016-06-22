Template.body.events({
  'click [name=btn_send]': function() {

    if($('[name=s_num]').val() === "") {
      return;
    }

    var obj = {};
    obj.s_num = $('[name=s_num]').val();
    obj.name = $('[name=name]').val();
    obj.email = $('[name=email]').val();
    obj.phone = $('[name=phone]').val();

    Students.insert(obj);

    $('[name=s_num]').val("");
    $('[name=name]').val("");
    $('[name=email]').val("");
    $('[name=phone]').val("");



  }
});

Template.body.helpers({
  students: function() {
    return Students.find()
  }
});