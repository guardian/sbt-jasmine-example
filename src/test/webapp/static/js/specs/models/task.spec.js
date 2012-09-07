require(['models/task', 'jquery'],
    function(Task, $) {

        describe('Task: initialize', function() {
            it('should not be done', function() {
                var model = new Task('the title');
                expect(model.isDone()).toEqual(false);
            });

            it('should store and allow reading back the title', function() {
                var model = new Task('the title');
                expect(model.getTitle()).toEqual('the title');
            });
        });
    }
);
