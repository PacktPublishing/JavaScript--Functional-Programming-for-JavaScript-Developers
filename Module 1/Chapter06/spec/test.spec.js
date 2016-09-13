describe("mocking configurator", function() {
  var cofigurator = null;
  var responseJSON = {};

  beforeEach(function() {
    configurator = {
      submitPOSTRequest: function(payload) {
        //This is a mock service which will eventually be replaced with
        //a real service
        console.log(payload);
        return {"status": "200"};
      }
    };

    spyOn(configurator, 'submitPOSTRequest').and.returnValue({"status": "200"});

    configurator.submitPOSTRequest({
      "port":"8000",
      "client-encoding":"UTF-8"
    });

  });

  it("the spy was called", function() {
    expect(configurator.submitPOSTRequest).toHaveBeenCalled();
  });

  it("the arguments of the spy's call are tracked", function() {
    expect(configurator.submitPOSTRequest).toHaveBeenCalledWith({"port":"8000","client-encoding":"UTF-8"});
  });
});
