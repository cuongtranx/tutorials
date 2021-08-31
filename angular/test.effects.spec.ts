import { Injectable } from '@angular/core';
import { Action, createAction } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { hot } from 'jasmine-marbles';

import { provideMockActions } from '@ngrx/effects/testing';

const TestAction = createAction('test action');

@Injectable()
class TestEffects {
    constructor(private actions$: Actions) {}

    public test$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TestAction),
            map(() => TestAction())
        );
    });
}

fdescribe('test', () => {
    let effects: TestEffects;
    let actions$: Observable<Action>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TestEffects, provideMockActions(() => actions$)]
        });
        effects = TestBed.inject<TestEffects>(TestEffects);
        // or by using a marble diagram
        actions$ = hot('--a-', { a: TestAction });
    });

    fit('test', () => {
        expect(effects.test$).toBeObservable(hot('--a-', { a: TestAction() }));
    });
});
