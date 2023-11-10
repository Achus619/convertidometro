<script lang="ts">
  import { onMount } from "svelte";
  import { buscarCotizaciones } from "./api/divisas";
  import type { Cotizaciones } from "./api/divisas";

  let cotizaciones: Cotizaciones;
  let valorIngresado: number;

  onMount(async () => {
    cotizaciones = await buscarCotizaciones();
  });

  function yenesAPesosTarjeta(yenes: number) {
    if (!cotizaciones) return null;
    const yenesEnDolares = yenes / cotizaciones.dolarAYen;

    return yenesEnDolares * cotizaciones.dolarTarjeta;
  }

  function yenesAUSD(yenes: number) {
    if (!cotizaciones) return null;

    return yenes / cotizaciones.dolarAYen;
  }

  function pesosABlue(yenes: number) {
    if (!cotizaciones) return null;

    const pesos = yenesAPesosTarjeta(yenes);
    return pesos / cotizaciones.dolarBlue;
  }

  $: valorConvertido = yenesAPesosTarjeta(valorIngresado)?.toFixed(2);
  $: valorConvertidoUSD = yenesAUSD(valorIngresado)?.toFixed(2);
  $: valorPotus = pesosABlue(valorIngresado)?.toFixed(2);
</script>

{#if !cotizaciones}
  <button aria-busy="true">carganding</button>
{:else}
  <p>Dolar tarjeta: ${cotizaciones.dolarTarjeta.toFixed(2)}</p>
  <p style={"color: #fffff"}>
    Dolar blue: ${cotizaciones.dolarBlue.toFixed(2)}
  </p>
  <p>USD = ¥{cotizaciones.dolarAYen.toFixed(2)}</p>
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
{#if valorConvertido}
  <p>🇦🇷 ${valorConvertido}</p>
  <p style={"color: coral"}>🇺🇸 ${valorConvertidoUSD}</p>
  <p>
    Pesos/dolar blue: <span style={"color: aquamarine"}>🇺🇸 ${valorPotus}</span>
  </p>
{/if}
