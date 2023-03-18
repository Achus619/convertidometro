<script lang="ts">
  import { onMount } from "svelte";
  import { buscarCotizaciones } from "./api/divisas";
  import type { Cotizaciones } from "./api/divisas";

  let cotizaciones: Cotizaciones;
  let valorIngresado: number;

  onMount(async () => {
    cotizaciones = await buscarCotizaciones();
  });

  function yenesAPesos(yenes: number) {
    if (!cotizaciones) return 0;
    const yenesEnDolares = yenes / cotizaciones.dolarAYen;

    return yenesEnDolares * cotizaciones.dolarTarjeta;
  }

  $: valorConvertido = yenesAPesos(valorIngresado);
</script>

<main class="container">
  <h1>Convertidometro</h1>

  {#if !cotizaciones}
    <button aria-busy="true">carganding</button>
  {:else}
    <p>Dolar tarjeta: ${cotizaciones.dolarTarjeta}</p>
    <p>USD = ¥{cotizaciones.dolarAYen}</p>
  {/if}

  <form>
    <label for="yen-input"
      >Yen
      <input
        bind:value={valorIngresado}
        type="number"
        name="yen-input"
        placeholder="Numerito va aquí"
        disabled={!cotizaciones}
      />
    </label>
  </form>

  <p>{valorConvertido}</p>
</main>
