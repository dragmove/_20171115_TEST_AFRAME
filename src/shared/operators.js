import {Observable} from 'rxjs';

Observable.prototype.safeSubscribe = function (next, error, complete) {
  const subscription = this.subscribe((item) => {
    try {
      console.log('safeSubscribe next(item) - item :', item);
      next(item);

    } catch (e) {
      console.log('Observable.prototype.safeSubscribe error :', e.stack || e);

      subscription.unsubscribe();
    }
  }, error, complete);

  return subscription;
};

Observable.prototype.catchWrap = function() {
  return this.catch(error => {
    console.log('catchWrap error :', error);

    return Observable.of({error: error});
  });
};