"use client";

import { useState } from "react";

export default function SignInPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className='m-3'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Вход в систему
      </h1>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SignIn();
          }}
        >
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Логин
            </label>
            <input
              type='text'
              id='login'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='John или Василий'
              required
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Пароль
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Пароль'
              required
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

function SignIn() {
  
  
  return;
}
