// Documentacion
// https://grafana.com/docs/k6/latest/using-k6/test-lifecycle/

    // 1. Inicio del Código -- Una vez por UV --

export function setup() {
    // 2. Configuración de la ejecución -- Una unica vez --
}
export default function (data) {
    // 3. Codigo que va a ejecutar cada uno de los UV -- Una vez por UV --
}
export function teardown(data) {
    // 4. Finalizacion de la ejecución -- Una unica vez --
}