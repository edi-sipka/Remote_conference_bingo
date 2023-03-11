import React from 'react'
import Animation from './Animation';


function Popup()

{
	return (

<div>

<div class="relative flex justify-center items-center">
  <div id="menu" class="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
  <Animation />
    <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
      <div class="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
        <div role="banner">
   <img src='https://americancoachingacademy.com/wp-content/uploads/2021/02/bingo.png'/>
        </div>
        <div class="mt-12">
          <h1 role="main" class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800">🎉 Congratulations! 🎉</h1>
        </div>
        <div class="mt">
          <p class="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800">You have finished the Remote bingo game! Refresh the page and play it again.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


	)
}
export default Popup;


