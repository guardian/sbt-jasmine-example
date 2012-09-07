define(function() {
  function Task(title) {
    this.title = title;
    this.done = false;
  }

  Task.prototype.getTitle = function() {
    return this.title;
  };

  Task.prototype.isDone = function() {
    return this.done;
  };

  return Task;
});
