export async function cotizacionDolar(): Promise<number> {
  const NOMBRE_DOLAR_OFICIAL = "Oficial";
  const URL = "https://www.dolarsi.com/api/api.php?type=dolar";

  const response = await fetch(URL).then((r) => r.json());
  const dolarOficial = response.find(
    (coso) => coso.casa.nombre === NOMBRE_DOLAR_OFICIAL
  );
  return parseFloat(dolarOficial?.casa?.venta?.replace(",", ".")) || 0;
}

export async function cotizacionYenEnDolar(): Promise<number> {
  const URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/jpy.min.json";

  const response = await fetch(URL).then((r) => r.json());

  return response?.jpy || 0;
}
export type Cotizaciones = {
  dolarAYen: number;
  dolarTarjeta: number;
  dolarQatar: number;
};
export async function buscarCotizaciones(): Promise<Cotizaciones> {
  const [dolarAYen, dolarOficial] = await Promise.all([
    cotizacionYenEnDolar(),
    cotizacionDolar(),
  ]);

  return {
    dolarAYen,
    dolarTarjeta: dolarOficialATarjeta(dolarOficial),
    dolarQatar: dolarOficialAQatar(dolarOficial),
  };
}

const MULTIPLICADOR_TARJETA = 1.75;
const MULTIPLICADOR_QATAR = 1.8;

const dolarOficialATarjeta = (oficial: number) =>
  oficial * MULTIPLICADOR_TARJETA;
const dolarOficialAQatar = (oficial: number) => oficial * MULTIPLICADOR_QATAR;
