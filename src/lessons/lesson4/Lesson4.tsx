import React from 'react';
import './lesson_4';
import {handlePromise} from "./lesson_4";

const Lesson4 = () => {
    const createPromiseOnClickHandler = () => {
        const promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve;
            handlePromise.reject = reject;
        });
        handlePromise.promise = promise;
    };
    const resolvePromiseOnClickHandler = () => {
        handlePromise.resolve && handlePromise.resolve('successful');
        handlePromise.promise && handlePromise.promise.then(val => handlePromise.onSuccess(val));
    };
    const rejectPromiseOnClickHandler = () => {
        handlePromise.reject && handlePromise.reject('unsuccessful');
        handlePromise.promise && handlePromise.promise.catch(val => handlePromise.onError(val));
    };

    return (
        <div>
            <button id="btn-create-promise" onClick={createPromiseOnClickHandler}>Create Promise</button>
            <button id="btn-resolve-promise" onClick={resolvePromiseOnClickHandler}>Resolve Promise</button>
            <button id="btn-reject-promise" onClick={rejectPromiseOnClickHandler}>Reject Promise</button>
        </div>
    );
};

export default Lesson4;