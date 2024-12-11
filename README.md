# Goal Tracker

## Índice de Contenidos

- [Tarea 9 - Preparando Recursos](#tarea-9---preparando-recursos)
- [Antigua Tarea 9 - Página de Inicio](#antigua-tarea-9---página-de-inicio)

---

## Tarea 9 - Preparando Recursos

> Esta tarea consiste en descargar los recursos, audio, vídeo, imágenes y logotipo, que necesite para su web. Todos los recursos deben tener licencia libre. Se trata de descargarlos con la máxima resolución y calidad posible, pues será la base sobre la que los trabajará. Para ello, intente descargar archivos comprimidos con un algoritmo sin pérdida, si fuera posible. Si no lo fuera, al menos que tengan la máxima calidad posible.
>
> Una vez descargado, convierta los ficheros para que tengan los siguientes formatos:
> - Imágenes: Avif, Webp, Png y Jpg
> - Audio: FLAC, WebM, Ogg y MP3
> - Vídeo: MP4, WebM y Ogg
> 
> Haga un documento, distinto del que ha estado trabajando, donde se muestre
>
> - De dónde descarga los recursos, así como su resolución y calidad. Si no los descarga, con qué programa los genera.
> - La licencia que usen.
> - El proceso para convertirlos cada imagen a cada formato.
> - Ordene los formatos, por orden decreciente de modernidad y muestre su compatibilidad con los navegadores más comunes. Tenga en cuenta ese orden, porque será el que use al mandarle los archivos al navegador.
>
> Requisitos mínimos:
>
> - Deben conseguirse todos los recursos necesarios.
> - El esquema de nombres debe ser coherente.
> - Los recursos deben tener licencia de uso libre o ser propios.
> - Los recursos deben descargarse o generarse en la máxima resolución (imágenes y vídeo) y calidad.
> - Los recursos deben convertirse a los distintos formatos.
> - Los recursos deben estar ordenador de mas a menos moderno

1. [Obtención de Recursos](#obtención-de-recursos)
2. [Resolución de Imágenes](#resolución-de-imágenes)
3. [Jerarquía de Calidad](#jerarquía-de-calidad)
4. [Compatibilidad de Formatos entre Navegadores](#compatibilidad-de-formatos-entre-navegadores)

### 1. Obtención de Recursos

Para la obtención de los recursos a usar en el desarrollo de la página web “Goal Tracker”, se ha optado por usar unos métodos u otros en función del formato y la finalidad de los medios. 

Para las imágenes en formato SVG, se han obtenido 13 pictogramas simbólicos sacados de la web de Google Fonts (https://fonts.google.com/icons). Dado que las imágenes en formato SVG son vectoriales, carecen de la posibilidad de pérdida de calidad. Todos ellos son de uso público. 

El resto de imágenes, las cuales son los fondos para las 3 páginas (Página de Aterrizaje, Contacto y Tutoriales), se han obtenido en los formatos PNG, JPG, AVIF y WEBP mediante conversores de formato online. Las imágenes originales se han obtenido de la web de generación de imágenes por inteligencia artificial alojada en deepai.org. Al ser imágenes únicas y nuevas, aún no poseen derechos de autor. 

Para obtener el favicon a usar en la página, se ha optado por generarlo en un editor de favicons online obteniendo el resultado en distintas resoluciones cuadradas (Relación 1:1). 

El único sonido a usar en toda la página (`check.mp3`) se ha obtenido de la web pixabay.com, la cual provee distintos sonidos de uso público. 

### 2. Resolución de Imágenes

Las imágenes en formato SVG parten todas de una resolución base de 24x24 píxeles. 

Las imágenes de fondo tienen la misma resolución en todos los formatos. Dependiendo de la imagen en sí, tienen cada una resolución distinta: 

- **Página de Aterrizaje**: `1792 x 1024` píxeles 
- **Tutoriales**: `1408 x 768` píxeles 
- **Contacto**: `1664 x 896` píxeles

### 3. Jerarquía de Calidad

Para respetar la compatibilidad entre dispositivos, se ha establecido la siguiente jerarquía entre los formatos, con el objetivo de garantizar el correcto funcionamiento en todo equipo. Los más modernos están primero, mientras que los últimos son los formatos más anticuados. 

- Para imágenes convencionales: 

$$\verb|AVIF > WebP > PNG > JPG|$$

- Para audio: 

$$\verb|FLAC > WebM > Ogg > MP3|$$

### 4. Compatibilidad de Formatos entre Navegadores 

A continuación, se muestra un listado de tablas con la compatibilidad entre los navegadores más comunes de los formatos citados anteriormente. 

**AVIF**:

![AVIF](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/AVIF.png)

**WebP**:

![WebP](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/WebP.png)

**PNG**:

![PNG](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/PNG.png)

**FLAC**:

![FLAC](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/FLAC.png)

**WebM**:

![WebM](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/WebM.png)

**Ogg**:

![Ogg](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Ogg.png)

**MP3**:

![MP3](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/MP3.png)

---

## Antigua Tarea 9 - Página de Inicio

> Usando HTML y CSS, crea tu página de inicio y tu página de aterrizaje. Las siguientes condiciones son obligatorias:
>
> - La web debe ser la versión definitiva y debe ser adaptable, incluidas las imágenes.
> - La web debe estar subida a tu cuenta de git en tu proveedor de git (gitlab, github, gitbucket...)
> - El proyecto debe seguir la estructura de directorios recomendada
> - La documentación debe incluir:
>    - Mecanismos para conseguir la adaptabilidad
>    - Cómo has dispuesto el contenido
>    - Un enlace a tu proyecto git

### Versión Definitiva y Adaptabilidad

Se ha realizado la versión definitiva de la _Landing Page_ en el archivo `index.html` y es adaptable a tres formatos de dispositivos variables definidos en el archivo `landingPageStyles.css`.

### Subida a Cuenta de GitHub

El repositorio permanece en la URL bajo el nombre de [DIW_WEB_hernandez_robles_alonso](https://github.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso).

### Estructura de Directorios

Se ha seguido la estructura de directorios **típica** para el desarrollo de la página web. Los elementos en cursiva no se implementan en este nivel.

- **`index.html`**
- **pages**
    - _`editor.html`_
    - _`contacto.html`_
    - _`tutoriales.html`_
- **styles**
    - `landingPageStyle.css`
- **scripts**
    - `userFunctions.js`
    - `landingPageScript.js`
- **media**
    - `favicon.ico`
    - fonts
        - `Rubik-Light.ttf`
        - `Rubik-Regular.ttf`
        - `Rubik-Medium.ttf`
    - images
        - `landingPageBackground.png`
        - `contactoBackground.png`
        - `tutorialesBackground.png`
    - _videos_

### Requisitos de Documentación

La documentación referida a esta tarea se puede consultar en la entrega realizada en Moodle.