# Swagger UI Container

Docker container with Swagger UI ([swagger-ui](https://github.com/swagger-api/swagger-ui)).
Supports custom API URL and title.

[![](https://images.microbadger.com/badges/image/rgorodischer/swagger-ui.svg)](https://microbadger.com/images/rgorodischer/swagger-ui)

# Running from command line
```
docker run -d -p 9191:9090 -e API_URL="http://petstore.swagger.io/v2/swagger.json" -e TITLE="Custom Swagger UI" rgorodischer/swagger-ui
```

Then open *localhost:9191/swagger-ui/* in a web-browser and enjoy the Swagger UI.

![Customized Swagger UI](https://raw.githubusercontent.com/rgorodischer/swagger-ui/master/screenshot.png)

