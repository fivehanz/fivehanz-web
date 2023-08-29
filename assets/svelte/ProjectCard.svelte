<div class="about-card my-12">
  <div class="thumb-box bg-surface-700/70">
    <div class="thumb" />
    <div class="tags">
      <!-- {tags.map((tag) => ( -->
      <span class="chip chip-font variant-filled-surface m-1">tag</span>
      <span class="chip chip-font variant-filled-surface m-1">tag</span>
      <span class="chip chip-font variant-filled-surface m-1">tag</span>
      <!-- ))} -->
    </div>
  </div>

  <div class="card-desc">
    <div class="titles">
      <h2 class="title">title not provided</h2>
      <p class="subtitle">subtitle not provided</p>
    </div>

    <p class="paragraph">description not provided</p>

    <div class="links">
      <!-- {links.map((link) => ( -->
      <a
        class="btn btn-sm variant-filled"
        href="#d"
        target="_blank"
        rel="noreferrer"
      >
        link.title
      </a>
      <a
        class="btn btn-sm variant-filled"
        href="#d"
        target="_blank"
        rel="noreferrer"
      >
        link.title
      </a>
      <a
        class="btn btn-sm variant-filled"
        href="#d"
        target="_blank"
        rel="noreferrer"
      >
        link.title
      </a>
      <!-- ))} -->
    </div>
  </div>
</div>

<style>
  .about-card {
    display: grid;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      grid-template-rows: 18rem auto;
      height: 35rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 18rem auto;
      width: 55rem;
    }
  }

  .thumb-box {
    position: relative;
    width: 18rem;
    height: 18rem;

    @media (max-width: 1024px) {
      min-width: 92vw;
    }
  }

  .tags {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .chip-font {
    font-weight: 600;
  }

  .card-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .titles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 600;
  }

  .links {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
</style>
