import {Observable} from 'rxjs';

Observable.prototype.safeSubscribe = function (next, error, complete) {
  const subscription = this.subscribe((item) => {
    try {
      next(item);

    } catch (e) {
      subscription.unsubscribe();
    }
  }, error, complete);

  return subscription;
};

Observable.prototype.catchWrap = function() {
  return this.catch(error => {
    return Observable.of({error: error});
  });
};