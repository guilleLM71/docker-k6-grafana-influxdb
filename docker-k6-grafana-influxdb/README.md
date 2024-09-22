# Proyecto de Pruebas de Perfomance

Proyecto inspirado en el articulo - <https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3> - Para temas academicos

Aplicación utilizada para ser Objeto de pruebas localizada en:
<https://github.com/eaccmk/node-app-http-docker>

## Herramientas utilizadas

- K6
- InfluxDB
- Grafana

## Precondiciones

Tener instalado Docker en la maquina donde se van a ejecutar las pruebas.

## Configuracion

Crear contenedores de Grafana e InfluxDB

```bash
docker compose up -d influxdb grafana app
```

## Dashboards

Para ver el dashboard se debe ingresar a
<http://localhost:3000/d/k6/k6-load-testing-results>

## Type Test

Seleccionar el tipo de prueba a ejecutar y remplazarlo en el script.

### Smoke Test

```javascript
// Smoke Test
export let options = {
  stages: [
    { duration: "5s", target: 2 },
  ]
};
```

### Load Test

```javascript
// Load Test
export let options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "5m", target: 10 },
    { duration: "10s", target: 0 },
  ]
};
```

### Stress Test

```javascript
// Stress Test
export let options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "10m", target: 50 },
    { duration: "30s", target: 0 },
  ]
};
```

### Soak Test

```javascript
// Soak Test
export let options = {
  stages: [
    { duration: "5m", target: 1 },
    { duration: "10m", target: 10 },
    { duration: "5m", target: 0 },
  ]
};
```

### Spike Test

```javascript
// Spike Test
export let options = {
  stages: [
    { duration: "1s", target: 500 },
    { duration: "1m", target: 500 },
    { duration: "1s", target: 500 },
  ]
};
```

### Breakpoint Test

```javascript
// Breakpoint Test
export let options = {
  stages: [
    { duration: "1h", target: 1000 }
  ]
};
```

## Run Tests

### Flows

#### Caso completo

```bash
docker compose run --rm k6 run  /scripts/Flows/FlowStandardUser.js
```

### Servicios

#### Create Test

```bash
docker compose run --rm k6 run  /scripts/RestAPI/createTest.js
```

#### Delete Test

```bash
docker compose run --rm k6 run  /scripts/RestAPI/deleteTest.js
```

#### Health Test

```bash
docker compose run --rm k6 run  /scripts/RestAPI/healthTest.js
```

#### Index Test

```bash
docker compose run --rm k6 run  /scripts/RestAPI/indexTest.js
```

#### Show Test

```bash
docker compose run --rm k6 run  /scripts/RestAPI/showTest.js
```


