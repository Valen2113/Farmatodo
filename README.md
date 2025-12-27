# Desarrollo Prueba Técnica QA Automation Md
Proyecto de automatización desarrollado con **Playwright + TypeScript**.

## 🧪 Prueba de Integración (API)
- Consumo de PokeApi
- Obtención de la cadena de evolución de Squirtle
- Consulta del peso de cada evolución
- Resultado ordenado A-Z impreso en consola y en el reporte HTML

Ejecutar:

npx playwright test tests/evolution.spec.ts


## 🧪 Prueba E2E (UI)
Sitio probado:
👉 https://www.saucedemo.com/

Paso a paso realizado:
1. Login con usuario estándar
2. Selección del producto Sauce Labs Backpack
3. Almacenamiento de nombre y precio
4. Validación del producto en el carrito
5. Proceso completo de checkout
6. Validación de confirmación de compra

Se implementa Page Object Model (POM) para una mejor mantenibilidad.

Ejecutar: 
npx playwright test tests/e2e.spec.ts --headed

Para ejecutar todas las pruebas utiliza: npx playwright test

Para ver el reporte HTML utiliza: npx playwright show-report
