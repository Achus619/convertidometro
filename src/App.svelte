<script lang="ts">
  import Convertidometro from "./Convertidometro.svelte";
  type Herramienta = "convertidometro" | "tarjetometro";
  let herramientaSeleccionada: Herramienta = "convertidometro";
</script>

<main class="container">
  <aside>
    <nav>
      <ul>
        <li>
          <button
            class="outline"
            on:click={() => (herramientaSeleccionada = "convertidometro")}
            >Convertidometro</button
          >
        </li>
        <li>
          <button
            class="outline"
            on:click={() => (herramientaSeleccionada = "tarjetometro")}
            >Tarjetómetro</button
          >
        </li>
      </ul>
    </nav>
  </aside>
  {#if herramientaSeleccionada === "convertidometro"}
    <Convertidometro />
  {:else}
    <h1>WIP</h1>
  {/if}
</main>
