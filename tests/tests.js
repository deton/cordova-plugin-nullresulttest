exports.defineAutoTests = function () {
  describe('Received null result from plugin', function () {
    it('should be null when plugin does not use thread', function (done) {
      plugins.nullresulttest.nothread(function onsuccess(result) {
        expect(result).toBeNull();
        done();
      }, function onfail(e) {
        done.fail(e);
      });
    });

    it('should be null when plugin uses thread', function (done) {
      plugins.nullresulttest.thread(function onsuccess(result) {
        expect(result).toBeNull();
        done();
      }, function onfail(e) {
        done.fail(e);
      });
    });

    it('should be null when plugin sends result from new thread', function (done) {
      plugins.nullresulttest.forcethreadresult(function onsuccess(result) {
        expect(result).toBeNull();
        done();
      }, function onfail(e) {
        done.fail(e);
      });
    });
  });
};
