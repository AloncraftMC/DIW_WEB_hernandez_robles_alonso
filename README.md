# Goal Tracker

> [!CAUTION]
> **Parcel** no ha empaquetado los recursos correctamente ya que los métodos asociados a los botones de la interfaz pierden el ámbito y no se reconocen por el navegador, así que para ver funcionar la web, es recomendable usar `live-server`, instalable en **Node.js** con `npm install live-server`.

## Índice de Contenidos

- [Tarea 10 - Preparando Imágenes para Reactividad](#tarea-10---preparando-imágenes-para-reactividad)
- [Tarea 9 - Preparando Recursos](#tarea-9---preparando-recursos)
- [Antigua Tarea 9 - Preparando Recursos](#antigua-tarea-9---preparando-recursos)
- [Antigua Tarea 9 - Página de Inicio](#antigua-tarea-9---página-de-inicio)

---

## Tarea 10 - Preparando imágenes para reactividad

> Vamos a preparar las imágenes de tal forma que no se descarguen imágenes mayores que la resolución de la pantalla del usuario desperdiciando ancho de banda y tiempo. Para ello, vamos a usar los siguientes puntos de ruptura:
>
> - 480px: Móviles
> - 768px: Tabletas
> - 1200px: Pantallas pequeñas
> - 1920px: Pantallas estándar
> - 2560px: Pantallas grandes
>
> Por tanto, debes redimensionar cada formato de imagen de la tarea 9, a 6 resoluciones distintas: una menor que 480px, otra entre cada par de puntos de ruptura y otra mayor que 2560px.
>
> Requisitos mínimos:
>
> - Deben redimensionarse cada uno de los tres formatos de cada imagen de la tarea 9 a 6 resoluciones distintas
> - El nombre del fichero debe ser descriptivo, tanto de su contenido, como de su resolución

Para comenzar, se ha eliminado el formato PNG ya que no será requerido para la realización de la página web de "Goal Tracker". Los formatos AVIF, WebP y JPG bastan.

Con estas condiciones, se infiere que se necesitará un total de:

*3 formatos x 6 resoluciones x 3 imágenes = **54 imágenes totales***

Dichas 54 imágenes están disponibles en la [Carpeta de Imágenes del Repositorio de GitHub DIW_hernandez_robles_alonso](https://github.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/tree/main/media/images).

En las próximas 3 páginas se muestran tres tablas con la nomenclatura de cada archivo individualmente en función de la imagen en sí:

- **Página de Aterrizaje:**

| Imagen                | Resolución (px) | Formato   |
|-----------------------|-----------------|-----------|
| aterrizajeFondo480.avif | 480             | .avif     |
| aterrizajeFondo768.avif | 768             | .avif     |
| aterrizajeFondo1200.avif| 1200            | .avif     |
| aterrizajeFondo1920.avif| 1920            | .avif     |
| aterrizajeFondo2560.avif| 2560            | .avif     |
| aterrizajeFondo3200.avif| 3200            | .avif     |
| aterrizajeFondo480.webp | 480             | .webp     |
| aterrizajeFondo768.webp | 768             | .webp     |
| aterrizajeFondo1200.webp| 1200            | .webp     |
| aterrizajeFondo1920.webp| 1920            | .webp     |
| aterrizajeFondo2560.webp| 2560            | .webp     |
| aterrizajeFondo3200.webp| 3200            | .webp     |
| aterrizajeFondo480.jpg  | 480             | .jpg      |
| aterrizajeFondo768.jpg  | 768             | .jpg      |
| aterrizajeFondo1200.jpg | 1200            | .jpg      |
| aterrizajeFondo1920.jpg | 1920            | .jpg      |
| aterrizajeFondo2560.jpg | 2560            | .jpg      |
| aterrizajeFondo3200.jpg | 3200            | .jpg      |

- **Contacto:**

| Imagen                | Resolución (px) | Formato   |
|-----------------------|-----------------|-----------|
| contactoFondo480.avif   | 480             | .avif     |
| contactoFondo768.avif   | 768             | .avif     |
| contactoFondo1200.avif  | 1200            | .avif     |
| contactoFondo1920.avif  | 1920            | .avif     |
| contactoFondo2560.avif  | 2560            | .avif     |
| contactoFondo3200.avif  | 3200            | .avif     |
| contactoFondo480.webp   | 480             | .webp     |
| contactoFondo768.webp   | 768             | .webp     |
| contactoFondo1200.webp  | 1200            | .webp     |
| contactoFondo1920.webp  | 1920            | .webp     |
| contactoFondo2560.webp  | 2560            | .webp     |
| contactoFondo3200.webp  | 3200            | .webp     |
| contactoFondo480.jpg    | 480             | .jpg      |
| contactoFondo768.jpg    | 768             | .jpg      |
| contactoFondo1200.jpg   | 1200            | .jpg      |
| contactoFondo1920.jpg   | 1920            | .jpg      |
| contactoFondo2560.jpg   | 2560            | .jpg      |
| contactoFondo3200.jpg   | 3200            | .jpg      |

- **Tutoriales:**

| Imagen                | Resolución (px) | Formato   |
|-----------------------|-----------------|-----------|
| tutorialesFondo480.avif | 480             | .avif     |
| tutorialesFondo768.avif | 768             | .avif     |
| tutorialesFondo1200.avif| 1200            | .avif     |
| tutorialesFondo1920.avif| 1920            | .avif     |
| tutorialesFondo2560.avif| 2560            | .avif     |
| tutorialesFondo3200.avif| 3200            | .avif     |
| tutorialesFondo480.webp | 480             | .webp     |
| tutorialesFondo768.webp | 768             | .webp     |
| tutorialesFondo1200.webp| 1200            | .webp     |
| tutorialesFondo1920.webp| 1920            | .webp     |
| tutorialesFondo2560.webp| 2560            | .webp     |
| tutorialesFondo3200.webp| 3200            | .webp     |
| tutorialesFondo480.jpg  | 480             | .jpg      |
| tutorialesFondo768.jpg  | 768             | .jpg      |
| tutorialesFondo1200.jpg | 1200            | .jpg      |
| tutorialesFondo1920.jpg | 1920            | .jpg      |
| tutorialesFondo2560.jpg | 2560            | .jpg      |
| tutorialesFondo3200.jpg | 3200            | .jpg      |

---

## Tarea 9 - Preparando Recursos

> Esta tarea consiste en reunir los recursos, audio, vídeo, imágenes, logotipo y texto, que necesite para su web. Todos los recursos deben tener licencia libre o ser de dominio público o propios.
>
> Se trata de conseguirlos con la máxima resolución y calidad percibida posible, pues será la base sobre la que se trabajará. Para ello,
> 
> - Respecto a la calidad percibida:
>   - Intente descargar archivos comprimidos con un algoritmo sin pérdida, si fuera posible: TIFF en imágenes, FLAC en audio o AV1 (sin pérdida) en vídeo.
>   - Si no fuera posible, intente descargar un archivo en un formato moderno y compruebe que la imagen y el vídeo se ve perfectamente, sin artefactos y que el audio se escucha claro, sin distorsión.
> - Respecto a resolución:
>   - En las imágenes, vamos a intentar descargar imágenes con la máxima resolución que puede conseguir un monitor normal con una resolución alta de hoy día, 4K (3820x2160). El resto de resoluciones las conseguiremos más adelante redimensionando las que vamos a descargar. Ahora bien, la resolución que necesitamos que tenga la imagen dependerá de dónde se vaya a usar. Por poner dos ejemplos:
>       - Las imágenes de héroe, ocuparán toda la pantalla a lo ancho, en aspecto 16:9 y resolución 4K (3840x2160)
>       - Las imágenes de producto se suelen colocar en la misma fila. Si coloca tres imágenes, al dividir 3840/3, daría 1280 aprox cada imagen, normalmente en aspecto 4:3, 3:2 o 1:1
>   - En vídeo, intente que sea 4k, 25FPS.
>   - En el audio, intente que sea mínimo 96Khz 32bits. 44,1Khz y 16bits debería ser lo mínimo.
> 
> Respecto a la licencia, cuidado con las IA, ya que los documentos que generan no está claro que estén libres de derechos de autor. Para que una IA sepa hacer imágenes, textos o software, hay que entrenarla con datos reales y enseñarle. El problema está en que esos datos los están cogiendo, SIN PERMISO de sus autores, de repositorios públicos o privados. De hecho, ya están empezado a aparecer las primeras demandas por derechos de autor (aquí, aquí y aquí). Por tanto, para una web comercial, no se debería usar nada generado por IA.
> 
> Una vez descargados, convierta cada fichero para que esté en los siguientes formatos:
> 
> - Imágenes: Avif, Webp, Png y Jpg
> - Audio: FLAC, WebM, Ogg y MP3
> - Vídeo: MP4, WebM y Ogg
> 
> Haga un documento, distinto del que ha estado trabajando, donde se muestre...
> 
> - Una vista de su prototipo donde marque los vídeos, audios e imágenes que necesita su web: cuántas necesita y qué debe mostrar cada una.
> - De dónde descarga los recursos, así como su resolución y calidad. Si fueran de producción propia, el funcionamiento breve del programa con el que los genera.
> - La licencia que usen. Si fueran de producción propia, cómo piensa gestionar el uso de sus recursos por terceras personas
> - El proceso que ha seguido para convertirlos a cada formato.
> - Un estudio sobre la compatibilidad de los recursos, en los distintos formatos, con los navegadores más comunes, ordenando dichos recursos de mayor a menor modernidad. Tenga en cuenta ese orden, porque más adelante será el que use al mandarle los archivos al navegador.
> - El texto que va a colocar en cada sección
> 
> Requisitos mínimos:
> 
> - Usando su prototipo, debe detallar qué recursos necesita y, en el caso de que sea una imagen, la resolución que tendrá dicho recurso para la pantalla más grande que diseñe.
> - Deben conseguirse todos los recursos necesarios.
> - El esquema de nombres debe ser coherente y reflejar su contenido.
> - Los recursos deben tener licencia de uso libre o ser propios.
> - Los recursos deben descargarse o generarse en la máxima resolución (imágenes y vídeo) y calidad posibles.
> - Los recursos deben convertirse a los distintos formatos.
> - Los recursos deben estar ordenados de mas a menos moderno.
> - Debe verse la compatibilidad con navegadores de todos los formatos usados.
> - Debe verse el texto que va a colocar y dónde va a ir

### Índice

1. [Identificación de Recursos](#1-identificación-de-recursos)
    - 1.1. [Página de Aterrizaje](#11-página-de-aterrizaje)
    - 1.2. [Editor](#12-editor)
    - 1.3. [Contacto](#13-contacto)
    - 1.4. [Tutoriales](#14-tutoriales)
2. [Obtención de Recursos](#2-obtención-de-recursos)
    - 2.1. [Imágenes](#21-imágenes)
    - 2.2. [Sonido](#22-sonido)
    - 2.3. [Texto](#23-texto)
3. [Resolución de Recursos](#3-resolución-de-recursos)
    - 3.1. [Imágenes](#31-imágenes)
    - 3.2. [Sonido](#32-sonido)
4. [Jerarquía de Calidad entre Formatos](#4-jerarquía-de-calidad-entre-formatos)
5. [Compatibilidad de Formatos entre Navegadores](#5-compatibilidad-de-formatos-entre-navegadores)

### 1. Identificación de Recursos

En primer lugar, se van a identificar los recursos a usar dentro de la web de "Goal Tracker".

Existe un recurso que usan todas las páginas de la web prácticamente por igual, el *favicon*.

#### 1.1. Página de Aterrizaje

En la página de aterrizaje, se identifica la imagen del héroe, puesta como fondo. Ésta muestra una serie de motivos azules abstractos que no representan conceptos concretos de la realidad.

![](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/aterrizaje.png)

#### 1.2. Editor

La página del editor es la página que más recursos puede llegar a tener. En ella, se identifican tanto imágenes como sonido.

Hablando del sonido, existe sólo uno, el que suene al completar un nodo. Simulará un trazo de un lápiz sobre papel.

En cuanto a las imágenes, éstas serán los siguientes pictogramas simbólicos:

<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>

#### 1.3. Contacto

En la página de contacto, se puede identificar la imagen de fondo, al igual que en la página de tutoriales:

![](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/contacto.png)

#### 1.4. Tutoriales

Como se acaba de comentar, tanto en la página de contacto como en la de tutoriales, se identifica como recurso la imagen de fondo:

![](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/tutoriales.png)

### 2. Obtención de Recursos

Para la obtención de los recursos citados a usar en el desarrollo de la página web “Goal Tracker”, se ha optado por usar unos métodos u otros en función del formato y la finalidad de los medios.

Todos los recursos usados se pueden encontrar en la [Carpeta de Recursos del Repositorio de GitHub DIW_hernandez_robles_alonso](https://github.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/tree/main/media).

#### 2.1. Imágenes

Para las imágenes en formato SVG, se han obtenido los 13 mencionados pictogramas simbólicos sacados de la web de Google Fonts ([fonts.google.com/icons](https://fonts.google.com/icons)). Dado que las imágenes en formato SVG son vectoriales, carecen de la posibilidad de pérdida de calidad. Todos ellos son de uso público.

![fonts.google.com/icons](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/fontsgooglecomicons.png)

El resto de imágenes, las cuales son los fondos para las 3 páginas (Página de Aterrizaje, Contacto y Tutoriales), se han obtenido en los formatos PNG, AVIF y WEBP mediante conversores de formato online. Las imágenes originales se han creado en JPG mediante un diseño de elaboración propia vía Photoshop, por lo que carecen de derechos de autor ajenos.

![Photoshop](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/photoshop.png)

Para obtener el *favicon* a usar en la página, se ha optado por dibujarlo en un editor de *favicons* online ([favicon.cc](https://www.favicon.cc/)) obteniendo el resultado en distintas resoluciones cuadradas (Relación de aspecto 1:1).

![favicon.cc](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/faviconcc.png)

#### 2.2. Sonido

El único sonido a usar en toda la página (`rellenar`) se ha obtenido de la web [pixabay.com](https://pixabay.com), la cual provee distintos sonidos de uso público.

![pixabay](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/pixabay.png)

#### 2.3. Texto

Dependiendo de la página, se escribirán los distintos textos. La Tarea 8 muestra claramente en los apartados 3.5 y 3.6 dónde se sitúan cada uno de los textos en el modelo de la web.

##### 2.3.1. Página de Aterrizaje

- `Goal Tracker`
- `Crea y gestiona tus propios objetivos`
- `Iniciar Sesión`
- `Registrarse`
- `Usuario:`
- `Contraseña:`
- `Repetir contraseña:`
- `No se ha encontrado el usuario.`
- `La contraseña es incorrecta.`
- `Las contraseña debe tener 8 caracteres como mínimo.`
- `Las contraseñas no coinciden.`
- `Este usuario ya se encuentra registrado.`

##### 2.3.2. Editor

- `GOAL TRACKER`
- `Crear...`
- `Contacto`
- `Tutoriales`
- `<Usuario>`
- `(<MedallasConseguidas>/<MedallasTotales>) Medallas`
- `Haz clic aquí para crear tu primera medalla...`
- `<Medalla>`
- `<Objetivo>`
- `Descripción`
- `<Descripción>`
- `Atributos`
- `<Atributo>: <Valor>`
- `Borrar`
- `<Porcentaje>%`
- `Medalla`
- `Carpeta de Medallas`
- `Objetivo`
- `Carpeta de Objetivos`
- `¿Borrar medalla?`
- `Cancelar`
- `Configuración`
- `Efectos de sonido:`
- `Aceptar`
- `Cambiar nombre de usuario:`
- `Cambiar contraseña:`
- `Confirmar cambios`
- `Cerrar sesión`
- `Borrar cuenta`
- `¿Está seguro de que quiere borrar a <Usuario>?`

##### 2.3.3. Contacto

- `GOAL TRACKER`
- `Editor`
- `Tutoriales`
- `<Usuario>`
- `(<MedallasConseguidas>/<MedallasTotales>) Medallas`
- `Configuración`
- `Efectos de sonido:`
- `Aceptar`
- `Cambiar nombre de usuario:`
- `Cambiar contraseña:`
- `Confirmar cambios`
- `Cerrar sesión`
- `Borrar cuenta`
- `¿Está seguro de que quiere borrar a <Usuario>?`
- `Borrar`
- `Cancelar`
- `Contacto`
- `Mapa`
- `Escribe un correo`
- `¿Cómo te llamamos?`
- `Tu correo es...`
- `Escribe aquí tu mensaje...`
- `Enviar`
- `Condiciones de Uso`
- `Política de Privacidad`
- `Sobre Nosotros`

##### 2.3.4. Tutoriales

- `GOAL TRACKER`
- `Editor`
- `Tutoriales`
- `<Usuario>`
- `(<MedallasConseguidas>/<MedallasTotales>) Medallas`
- `Configuración`
- `Efectos de sonido:`
- `Aceptar`
- `Cambiar nombre de usuario:`
- `Cambiar contraseña:`
- `Confirmar cambios`
- `Cerrar sesión`
- `Borrar cuenta`
- `¿Está seguro de que quiere borrar a <Usuario>?`
- `Borrar`
- `Cancelar`
- `Tutoriales`
- `Condiciones de Uso`
- `Política de Privacidad`
- `Sobre Nosotros`
- `Tutorial 1: Creación`
    - `Para crear tu primera medalla, haz clic en el "+" del centro del lienzo o en el botón "Crear...". Si usas este botón, después, haz clic en "Medalla". Para crear objetivos, debes usar también el botón de "Crear...". Selecciona la medalla a la cual va a pertenecer tu objetivo y, después, haz clic en "Crear..." > "Objetivo".`
    - `Si quieres crear una carpeta de nodos, selecciona "Carpeta de Medallas" o "Carpeta de Objetivos". Todo lo que crees se añadirá al lienzo de forma visible.`
- `Tutorial 2: Personalización de Nodos`
    - `Puedes personalizar el aspecto de un nodo eligiendo un color con el que se transparente en el lienzo, además de una imagen representativa que puedes subir directamente desde tu ordenador.`
    - `Para ello, haz clic en el cuadrado de color correspondiente a tu medalla y elige el color que más te guste. Para subir una imagen, haz clic directamente en el icono de la medalla y podrás elegir un archivo de imagen local.`
- `Tutorial 3: Modificación de Nodos`
    - `Para añadir información explicativa acerca de tu nodo, ya sea una medalla o un objetivo, puedes hacer clic directamente sobre el pictograma del lápiz (<Pictograma>) y el texto correspondiente al campo que quieras modificar se podrá editar. Puedes modificar el título de tu nodo, añadir una descripción e incluso atributos personalizados con valores.`
    - `De la misma forma, puedes eliminar atributos de un nodo que ya no necesites con el pictograma del prohibido (<Pictograma>).`
- `Tutorial 4: Gestión de Usuario y Configuración`
    - `Si haces clic sobre tu icono de perfil, podrás configurar tu cuenta de usuario, es decir, tu nombre, imagen y contraseña asociada. Cuando termines, presiona en "Confirmar cambios".`
    - `Desde aquí también puedes cerrar la sesión de tu usuario o borrar tu cuenta (no te preocupes, te preguntaremos por tu confirmación al presionar el botón) haciendo clic en los botones correspondientes`.
    - `Presionando el pictograma del engranaje (<Pictograma>) podrás acceder a la configuración y silenciar la aplicación`.

### 3. Resolución de Recursos

#### 3.1. Imágenes

Las imágenes en formato SVG parten todas de una resolución cuadrada (1:1) base de `24x24` píxeles. 

Las imágenes de fondo tienen la misma resolución en todos los formatos. Dependiendo de la imagen en sí, tienen cada una resolución distinta, pero todas con una mínima calidad de 4K:

- **Página de Aterrizaje**: `7168 x 4096` píxeles 
- **Tutoriales**: `5632 x 3072` píxeles 
- **Contacto**: `6656 x 3584` píxeles

#### 3.2. Sonido

El sonido `rellenar.flac`, en formato FLAC, tiene las siguientes características, que debería ser suficiente para el uso al que está destinado:

- Velocidad de muestreo: `48kHz`
- Tamaño de muestreo: `24 bits`

### 4. Jerarquía de Calidad entre Formatos

Para respetar la compatibilidad entre dispositivos, se ha establecido la siguiente jerarquía entre los formatos, con el objetivo de garantizar el correcto funcionamiento en todo equipo. Los más modernos están primero, mientras que los últimos son los formatos más anticuados. 

- Para imágenes convencionales: 

*AVIF* > *WebP* > *PNG* > *JPG*

- Para audio: 

*FLAC* > *WebM* > *OGG* > *MP3*

### 5. Compatibilidad de Formatos entre Navegadores 

A continuación, se muestra un listado de tablas con la compatibilidad entre los navegadores más comunes de los formatos citados anteriormente. 

**AVIF**:

![AVIF](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/AVIF.png)

**WebP**:

![WebP](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/WebP.png)

**PNG**:

![PNG](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/PNG.png)

**FLAC**:

![FLAC](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/FLAC.png)

**WebM**:

![WebM](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/WebM.png)

**Ogg**:

![Ogg](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/OGG.png)

**MP3**:

![MP3](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/MP3.png)

---

## Antigua Tarea 9 - Preparando Recursos

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

### Índice

1. [Obtención de Recursos](#1-obtención-de-recursos)
2. [Resolución de Imágenes](#2-resolución-de-imágenes)
3. [Jerarquía de Calidad](#3-jerarquía-de-calidad)
4. [Compatibilidad de Formatos entre Navegadores](#4-compatibilidad-de-formatos-entre-navegadores)

### 1. Obtención de Recursos

Para la obtención de los recursos a usar en el desarrollo de la página web “Goal Tracker”, se ha optado por usar unos métodos u otros en función del formato y la finalidad de los medios. 

Para las imágenes en formato SVG, se han obtenido 13 pictogramas simbólicos sacados de la web de Google Fonts ([fonts.google.com/icons](https://fonts.google.com/icons)). Dado que las imágenes en formato SVG son vectoriales, carecen de la posibilidad de pérdida de calidad. Todos ellos son de uso público. 

El resto de imágenes, las cuales son los fondos para las 3 páginas (Página de Aterrizaje, Contacto y Tutoriales), se han obtenido en los formatos PNG, JPG, AVIF y WEBP mediante conversores de formato online. Las imágenes originales se han obtenido de la web de generación de imágenes por inteligencia artificial alojada en [deepai.org](https://deepai.org). Al ser imágenes únicas y nuevas, aún no poseen derechos de autor. 

Para obtener el *favicon* a usar en la página, se ha optado por generarlo en un editor de *favicons* online obteniendo el resultado en distintas resoluciones cuadradas (Relación de aspecto 1:1). 

El único sonido a usar en toda la página (`check.mp3`) se ha obtenido de la web [pixabay.com](https://pixabay.com), la cual provee distintos sonidos de uso público.

Todos los recursos usados se pueden encontrar en la [Carpeta de Recursos del Repositorio de GitHub DIW_hernandez_robles_alonso](https://github.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/tree/main/media).

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

![AVIF](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/AVIF.png)

**WebP**:

![WebP](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/WebP.png)

**PNG**:

![PNG](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/PNG.png)

**FLAC**:

![FLAC](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/FLAC.png)

**WebM**:

![WebM](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/WebM.png)

**Ogg**:

![Ogg](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/OGG.png)

**MP3**:

![MP3](https://raw.githubusercontent.com/AloncraftMC/DIW_WEB_hernandez_robles_alonso/refs/heads/main/docmedia/images/Tarea%209/MP3.png)

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

### Requisitos de Documentación

La documentación referida a esta tarea se puede consultar en la entrega realizada en Moodle.