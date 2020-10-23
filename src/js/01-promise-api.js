/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//     resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//   }

//   reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 2000);
// });

/*
  Планирование: если промис выполнился успешно - выполни первую ф-ю,
  если не успешно - 2ую. В result идёт результат resolve,
  а в error идёт результат reject.
  Это 2е инлайн функции, которые можно сделать внешними(пример ниже).
*/
/*
promise.then(
  result => {
  console.log(`✅ ${result}`);
  },
  error => {
    console.log(`❌ ${error}`);
  });
  */

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log(`❌ ${error}`);
}

//======================================================================================
 
/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error) - отлавливает ошибку один раз в конце цепочки
 * Promise.prototype.finally() - снимает загружщик вконце, не зависимо от исхода операции
 */

 const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
    resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
  }

  reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 2000);
});

 // then возвращает ещё один промис, выполненный успешно
/*
promise.
  then(result => {
    console.log(result);
    
    return 5;
  }).
  then(x => {
    console.log(x);

    return 10;
  }).
  then(y => {
    console.log(y);
  });
  */

// обработаем ошибку 
promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);

    //вручную выбрасывается ошибка в JS 
    throw new Error('Ошибка во втором then');

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду выполнен в любом случае'));
