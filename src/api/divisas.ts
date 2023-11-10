export type Cotizaciones = {
  dolarAYen: number;
  dolarTarjeta: number;
  dolarBlue: number;
};

export async function buscarCotizaciones(): Promise<Cotizaciones> {
  const [dolarAYen, { dolarOficial, dolarBlue }] = await Promise.all([
    cotizacionYenEnDolar(),
    cotizacionDolar(),
  ]);

  return {
    dolarAYen,
    dolarTarjeta: dolarOficialATarjeta(dolarOficial),
    dolarBlue,
  };
}

async function cotizacionDolar(): Promise<{
  dolarOficial: number;
  dolarBlue: number;
}> {
  const valorOficialEnLS = localStorage.getItem("convertidometro_usd");
  const valorBlueEnLS = localStorage.getItem("convertidometro_usd-blue");

  if (valorOficialEnLS && valorBlueEnLS) {
    buscarCotizacionUSDGuardarLS();
    return {
      dolarOficial: Number(valorOficialEnLS),
      dolarBlue: Number(valorBlueEnLS),
    };
  }

  const { cotizacionOficial, cotizacionBlue } =
    await buscarCotizacionUSDGuardarLS();

  return { dolarOficial: cotizacionOficial, dolarBlue: cotizacionBlue };
}

async function buscarCotizacionUSDGuardarLS() {
  const NOMBRE_DOLAR_OFICIAL = "Oficial";
  const NOMBRE_DOLAR_BLUE = "Blue";
  const URL = "https://www.dolarsi.com/api/api.php?type=dolar";

  try {
    const response = await fetch(URL).then((r) => r.json());
    const dolarOficial = response.find(
      (coso) => coso.casa.nombre === NOMBRE_DOLAR_OFICIAL
    );
    const dolarBlue = response.find(
      (coso) => coso.casa.nombre === NOMBRE_DOLAR_BLUE
    );
    const cotizacionOficial = parseFloat(
      dolarOficial?.casa?.venta?.replace(",", ".")
    );
    localStorage.setItem("convertidometro_usd", String(cotizacionOficial));

    const cotizacionBlue = parseFloat(
      dolarBlue?.casa?.venta?.replace(",", ".")
    );
    localStorage.setItem("convertidometro_usd-blue", String(cotizacionBlue));

    return { cotizacionOficial, cotizacionBlue };
  } catch (error) {
    console.error("Fallo al buscar cotizacion usd");
  }
}

async function cotizacionYenEnDolar(): Promise<number> {
  const valorEnLS = localStorage.getItem("convertidometro_yen");

  if (valorEnLS) {
    buscarCotizacionYenGuardarLS();
    return Number(valorEnLS);
  }

  return buscarCotizacionYenGuardarLS();
}

async function buscarCotizacionYenGuardarLS() {
  const URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/jpy.min.json";

  try {
    const response = await fetch(URL).then((r) => r.json());
    const cotizacion = response?.jpy;
    localStorage.setItem("convertidometro_yen", cotizacion);

    return cotizacion;
  } catch (error) {
    console.error("Fallo al buscar cotizacion yen");
  }
}

const MULTIPLICADOR_TARJETA = 2;

const dolarOficialATarjeta = (oficial: number) =>
  oficial * MULTIPLICADOR_TARJETA;
