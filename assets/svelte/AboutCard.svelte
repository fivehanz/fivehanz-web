<script>
  import Linkedin from "./icons/Linkedin.svelte";
  import Twitter from "./icons/Twitter.svelte";
  import Github from "./icons/Github.svelte";
  import Gitlab from "./icons/Gitlab.svelte";
</script>

<div class="about-card">
  <div class="thumb-box bg-surface-700/70">
    <div class="thumb" />
  </div>

  <div class="card-desc">
    <div class="titles">
      <h2 class="title">haniel rameshbabu (hanz)</h2>
    </div>

    <p class="paragraph">WIP / TBC.</p>

    <div class="social-icons">
      <a
        href="https://www.linkedin.com/in/fivehanz/"
        class="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="https://twitter.com/fivehanz"
        class="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://github.com/fivehanz"
        class="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        href="https://gitlab.com/fivehanz/"
        class="social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Gitlab />
      </a>
    </div>
  </div>
</div>

<style>
  .about-card {
    max-width: 60rem;
    display: grid;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      min-width: 85vw;
      grid-template-rows: 18rem auto;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 18rem auto;
      width: 55rem;
    }
  }

  .thumb-box {
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    margin: 1rem auto;
  }

  .card-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    line-height: 1.5;
  }

  .titles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .social-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    /* margin: 1.5rem 0; */
  }

  .social-icon {
    cursor: pointer;
    /* width: 4rem;
    height: 4rem; */
  }
</style>
