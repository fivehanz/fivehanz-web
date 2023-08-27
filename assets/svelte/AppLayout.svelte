<script>
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
</script>

<AppShell>
  <!-- header -->
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <h2 class="h2">app bar</h2>
      </svelte:fragment>
      <svelte:fragment slot="trail" />
    </AppBar>
  </svelte:fragment>

  <!-- main section -->
  <slot />

  <!-- footer -->
  <svelte:fragment slot="pageFooter">
    <!--Copyright section-->
    <div class="p-4 text-center variant-soft-surface">
      © {new Date().getFullYear()}
    </div>
  </svelte:fragment>
</AppShell>
