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

  let xDeg = "0deg";
  let yDeg = "0deg";

  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      (event) => {
        const leftToRight = event.gamma; // gamma: left to right
        const frontToBack = event.beta; // beta: front back motion
        yDeg = "-" + leftToRight.toFixed(0) + "deg";
        xDeg = "-" + frontToBack.toFixed(0) + "deg";
      },
      true
    );
  }
</script>

<form on:submit|preventDefault={crearTarjeta}>
  <label for="nueva-tarjeta"
    >Nueva tarjeta
    <input bind:value={nuevaTarjeta} type="text" name="nueva-tarjeta" />
    <button type="submit">Agregar</button>
  </label>
</form>

{#each tarjetas as tarjeta}
  <article class="tarjeta" style="--x-deg: {xDeg}; --y-deg: {yDeg}">
    <header>{tarjeta.nombre}</header>
    <body>
      Monto consumido: <strong>{tarjeta.montoConsumido}</strong>
    </body>
  </article>
{/each}

<style>
  .tarjeta {
    --x-deg: 0deg;
    --y-deg: 0deg;
    transform: rotateY(clamp(-30deg, var(--y-deg, 0deg), 30deg))
      rotateX(clamp(-30deg, var(--x-deg, 0deg), 30deg));
    perspective: 3rem;
    box-shadow: -6px 6px 2px -3px rgba(100, 100, 100, 0.4);
  }
</style>
