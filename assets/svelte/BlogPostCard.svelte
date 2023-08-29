<div class="flex flex-col relative w-72 my-5 bg-surface-800 blog-post">
  <a target="_blank" rel="noreferrer" underline="none" href="#df">
    <div class="background-box bg-surface-700/70 bg-cover bg-center" />
    <div class="flex flex-col justify-between flex-1 p-5">
      <h2 class="text-xl">title</h2>
      <p class="mt-8 text-primary-600">creator</p>
    </div>
  </a>
</div>

<style>
  p {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }

  .blog-post {
    @media screen and (max-width: 37.5rem) {
      width: 90vw;
    }
  }

  .background-box {
    padding-bottom: 60%;
  }
</style>
