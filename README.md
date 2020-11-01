# Cypress / Font Awesome CORS issue

Starting October, 30th 2020 at around 4pm, some issues started happening inside my codebase

When `experimentalFetchPolyfill` is enabled inside `cypress.json`, request to fontAwesome are failing due to this error:

```
Access to XMLHttpRequest at 'https://ka-f.fontawesome.com/releases/v5.15.1/css/free-v4-shims.min.css' from origin 'http://localhost:3000' has been blocked by CORS policy: Request header field values is not allowed by Access-Control-Allow-Headers in preflight response.
```