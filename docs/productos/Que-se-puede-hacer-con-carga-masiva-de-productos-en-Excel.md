---
    sidebar_position: 5
---
# ¿Qué se puede hacer con carga masiva de productos en Excel?

### Lo que se puede y no se puede hacer a través de la importación y exportación masiva de productos

En este artículo, te explicamos en detalle las acciones que se pueden realizar con ayuda de la carga masiva de Excel, y cuáles no.

### Lo que se puede hacer

- **Solo se pueden borrar ciertos campos:** precios (original y promocional), Stock y Peso.
- **Se puede agregar variantes desde la carga masiva.** Si el producto no existe previamente, es posible agregar nombres de propiedad que no tenías para variantes. Por ejemplo, podés agregar la variante "Talle" para un producto nuevo. Sin embargo, si modificás un producto que ya existía, no se va a actualizar con las variantes.
- **Se puede agregar una nueva categoría desde Excel.** Si agregás una categoría que antes no existía a un producto, se va a crear la categoría automáticamente.
- **Se puede desasociar un producto de una categoría,** siempre y cuando el producto quede asociado al menos a una categoría más. Si solo está vinculado a la categoría de la cual se quiere desasociar, debe hacerse manualmente desde el Administrador de Tienda Negocio.
- **Se puede dividir el CSV en partes,** es decir, trabajar con algunos productos por vez e ir cargando diferentes archivos. No es necesario que siempre trabajes sobre el Excel completo.
- **Se puede eliminar las columnas que no quieras modificar.** Por ejemplo, podés eliminar las de SKU o Código de barras al trabajar en el archivo. Sin embargo, **nunca debés eliminar la de "Identificador de URL" ni la de "Nombre".**
- **Se puede agregar envío gratis a los productos,** reemplazando SI por NO en la columna de "Envío sin cargo". 
- **Se puede cambiar los precios de todos los productos.** En Excel tenés la posibilidad de buscar y reemplazar valores dentro de un rango determinado que selecciones. Esto va a ser muy útil para reemplazar los precios, por ejemplo, reemplazar todos los productos con precio 300 por 350.
- **Se puede modificar las dimensiones, el SKU y el código de barras:** desde el archivo CSV vas a poder completar las dimensiones (alto, ancho y profundidad), el SKU y/o código de barras si tus productos cuentan con este.
- **Podés ocultar o mostrar productos:** existe una columna en la que vas a poder configurar si mostrar u ocultar ese producto en tu tienda. Sólo tenés que marcar "SI" o "NO" en el campo correspondiente.
- **Cargar datos adicionales:** con la carga masiva vas a poder editar la descripción del producto, título y descripción para SEO, Tags (que facilitan la búsqueda de tus productos en tu tienda), y la Marca.
- **Configurar como producto físico o digital:** también, vas a poder configurar tus productos para identificarlos como productos físicos o digitales. Si son físicos completá "SI" y si son digitales o servicios completá "NO".
- **Información para Instagram y Google Shopping:** además, también vas a poder completar la información de MPN (si tu producto cuenta con este código), Sexo y Rango de edad, para que al utilizar tu catálogo en Facebook/Instagram y Google Shopping tenga mejor calidad.

### Lo que no se puede hacer
- **No se puede borrar productos.** Tenés que borrarlos desde el Administrador de la tienda.
- **No se pueden cargar o modificar imágenes de los productos** aunque hay una forma de hacerlo masivamente desde Google Drive agregando en el nombre de cada foto su SKU y avisarnos para que las subamos masivamente. Sino debés hacerlo desde el Administrador de tu tienda, ingresando a cada producto. 
- **No se puede borrar campos como las variantes y propiedades de un producto existente.**
- **Si el producto ya existe, no es posible agregar variantes** (nombres de propiedad) que no vengan predeterminadas.
- **No se puede cambiar nombres de variantes de forma masiva,** ya que siempre va a agregarlas como variantes nuevas.
- **No se puede cambiar nombres de categorías de forma masiva,** ya que siempre va a agregarlas como categorías nuevas.
- **No se puede cancelar una carga masiva una vez que se inició la importación del archivo al Administrador.** Debés esperar a que la misma sea terminada, ya qué si se cierra y vuelve a abrir la ventana para cargar nuevamente el archivo, éste va a quedar "en cola" y esto puede generar más demora o que se dupliquen productos.