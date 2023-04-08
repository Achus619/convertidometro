<script lang="ts">
  type Tarjeta = {
    nombre: string;
    montoConsumido: number;
  };

  const buscarTarjetasGuardadas = () =>
    (JSON.parse(localStorage.getItem("tarjetas")) as Tarjeta[]) || [];

  let nuevaTarjeta: string;
  let tarjetas: Tarjeta[] = buscarTarjetasGuardadas();
  const crearTarjeta = () => {
    localStorage.setItem(
      "tarjetas",
      JSON.stringify([...tarjetas, { nombre: nuevaTarjeta, montoConsumido: 0 }])
    );

    nuevaTarjeta = "";
    tarjetas = buscarTarjetasGuardadas();
  };
</script>

<form on:submit|preventDefault={crearTarjeta}>
  <label for="nueva-tarjeta"
    >Nueva tarjeta
    <input bind:value={nuevaTarjeta} type="text" name="nueva-tarjeta" />
    <button type="submit">Agregar</button>
  </label>
</form>

{#each tarjetas as tarjeta}
  <article>
    <header>{tarjeta.nombre}</header>
    <body>
      Monto consumido: <strong>{tarjeta.montoConsumido}</strong>
    </body>
  </article>
{/each}
