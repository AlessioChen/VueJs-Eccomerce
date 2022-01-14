<template>
<div class="w-screen h-screen flex justify-center items-center font-sans antialiased bg-slate-200">
  <section class="mb-8 lg:mr-8 p-6 rounded shadow-md" style="width: 25rem;">
    <div class="flex justify-between items-start mb-6">
      <div class="p-2 bg-blue-lightest rounded-full">
        <svg class="w-10 h-10 text-blue" width="32" height="32" viewBox="0 0 24 24">
          <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" fill="currentColor" />
        </svg>
      </div>
      <button class="border border-transparent focus:border-blue trans-all-linear" type="button">
        <svg class="w-8 h-8 text-grey hover:text-grey-dark" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </button>
    </div>
    <div class="mb-3 leading-normal">
      <h1 class="mb-2 text-base font-bold">This content is password protected.</h1>
      <p class="mb-6 text-sm font-semibold text-grey-dark">Please enter your password.</p>
      <input class="mb-4 p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-blue trans-all-linear" name="password" type="password" placeholder="Enter your password" />
    </div>
    <footer class="flex justify-end align-center">
      <button class="mr-3 p-3 text-sm font-semibold border-2 border-grey-light rounded hover:bg-grey-light focus:bg-grey-light focus:border-blue trans-all-linear" type="button">Cancel</button>
      <button class="p-3 text-sm text-white font-semibold bg-blue-lighter rounded cursor-not-allowed" tabindex="0" type="button">Submit Password</button>
    </footer>
  </section>
</div>

</template>

<script>
export default {};
</script>

<style>


html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

*:focus,
button:focus,
input:focus {
  outline: none;
}

body {
  background-color: var(--main-background);
}

/* Added utilities */
.focus\:border-blue:focus {
  border-color: #3490dc;
}

.focus\:bg-grey-light:focus {
  background-color: #dae1e7;
}

.trans-all-linear {
  transition: all 150ms linear;
}
</style>