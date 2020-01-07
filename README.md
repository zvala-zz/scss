# SCSS 6-1 architecture for Masiv

Esta arquitectura se encuentra basada en el [El Patron 7-1](https://sass-guidelin.es/es/#arquitectura) propuesto por [Hugo Giraudel](https://hugogiraudel.com/). Se empieza por crear 6 directorios y un archivo (_module.scss) dentro de cada uno. Haciendo uso de [Partials](https://sass-lang.com/guide) importamos cada **módulo** en un único archivo (main.scss). 


Idealmente, el scaffoding debe quedarnos asi:

```
|-- SCSS
    |-- 01_vendors 
        |-- _module.scss
    |-- 02_base 
    |-- 03_utils  
    |-- 04_layout  
    |-- 05_components 
    |-- 06_pages  
    |-- main.scss 
```

## ¿Por qué 01_, 02_ ... 06_ como prefijos en el nombre de los módulos?

Al agregar el prefijo **01_** al módulo **vendors** denotamos su herarquia. Esto nos ayuda a identificar rápidamente que va primero y que va después dentro de la arquitectura.

## ¿Por qué **6-1** y no **7-1**?

**Masiv** no cuenta con un sistemas de temas como el **Dark theme** de **Google**, por ello no se plantea un directorio que contegas hojas de estilos para tal fin.

## main.scss

Este archivo único importa todos archivos _modules.scss de cada modulo. 

```
@import './01_vendors/module';
@import './02_base/module';
@import './03_utils/module';
@import './04_layout/module';
@import './05_components/module';
@import './06_pages/module';
```

**Importante**: Este archivo no debe contener estilos ni debe importar un archivo diferente a **_module.scss**. Para ello, se debe importar dicho archivo dentro de su módulo correspondiente.

## _modules.scss

Cada módulo puede tener ***N*** cantidad de archivos.

Por ejemplo:

- El archivo **_module.css** del módulo **05_components** tiene las referencias de las hojas de estilos de nuestros componentes.

```
@import './buttons';
@import './labels';
@import './modal';
```

**Importante**: **_module.scss** no debe tener estilos. Este archivo es solamente para importar los [Partials](https://sass-lang.com/guide) de **scss**.


## ¿Por qué _ (Guión bajo) antes de los nombres de los archivos?

El **Guión bajo** se utiliza para indicar que la hoja de estilos va a ser importada haciendo uso de (@import).

## 01_vendors

Uso de librerías de 3ros. Es la 1ra en cargar para que los estilos no afecten otros elementos externos y modificación a las respectivas librerías 

## 02_base

## 03_utils

## 04_layout

contains all styles involved with the layout of your project. Such as styles for your header, footer, navigation and the grid system.

## 05_components

## 06_pages

Uso de Herramientas de SASS: 

Mixins: 

Si un grupo de propiedades CSS que están siempre juntas por alguna razón (es decir, no es una coincidencia), se puede crear un mixin en su lugar. Un mixin puede estar definido sin definir parametros, en dicho caso, puede llamarse se llama al mixin 

Ejm: 

```
@mixin border($size, $state, $color){ 
    border: $size $state $color; 
} 

.card { 
    @include border(‘1px’, ‘solid’, $red-color); 
} 

```

### Pros  

- Estructuración y modularización del proyecto en relación al manejo de los estilos.
- Reusabilidad de codigo de CSS.
- Permite adaptibilidad para los proyectos grandes.
- Facilidad al momento de **debuggear**.

### Cons  
- Puede ser confuso al principio, al fin de cuentas es una arquitectura bastante completa.
- Es muy "ruidosa" para proyectos pequeños.



# BEM (Block Element Modifier)

[Block Element Modifier](http://getbem.com/introduction/) es una nomenclatura utilizada para el nombrado de las clases de CSS la cual ha sido adoptada globalmente como una buena practica.

## Beneficios

- Comunica intencion.
- Comunica estructura del componente.
- Reusabilidad.
- Simple de entender.

## Como funciona

<p align="center">
    <img src="https://en.bem.info/kqvCO2ZXeivuLHCbn2to5chFZrM.png">
</p>

**BEM** se divide en tres niveles:

- **Bloque**: Elemento independiente que puede existir por si solo.
- **Elemento**: Parte de un bloque que no puede existir de manera independiente o fuera de su bloque.
- **Modificador**: Indicador que cambia la apariencia de un bloque/elemento.

```
.block {
    ...
}

.block__element {
    ...
}

.block--modifier {
    ...
}
```

Ejemplo con **SCSS**:

```
.block{
    &__element {
        ...
    }
    &--modifier {
        ...
    }
}

```

## Ejemplos

### Componente sin elementos ni modificadores

```
<button class="m-button">

<style>
    .m-button {}
</style>
```

### Componente con modificador
```
<button class="m-button m-button--dark">

<style lang="scss">
    .m-button {
         padding: 10px 16px;
        &--dark{
            background-color: #000;
            color: #fff;
        }
    }
</style>
```

**Importante**: No se debe usar la clase del **modificadora** por si misma. La clase **modificadora** se utiliza para extender 
y no para reemplazar la clase base.

```
<!-- MALA PRACTICA -->
<button class="m-button--dark">

<style lang="scss">
    .m-button {
        padding: 10px 16px;
    }
    .m-button--dark{
        padding: 10px 16px:
        background-color: #000;
        color: #fff;
    }
</style>
```
### Componente con elementos

```
<div class="m-card">
    <div class="m-card__header"></div>
    <div class="m-card__body"></div>
</div>

<style lang="scss">
    .m-card{
        border: 1px solid #000;
        &__header{
            text-align: left;
            padding: 16px;
            border-bottom: 1px solid #000;
        }
        &__body{
            padding: 16px;
        }
    }
</style>
```

## Malas practicas

### Caso #1

```
<header class="block">
    <h1 class="block__elem1">
        <a class="block__elem1__elem2" href="/">clubmate.fi</a>
    </h1>
</header>
```

Si un componente tiene elementos hijos con varios niveles, no se debe representar cada nivel con un nombre de clase. El proposito de **BEM** no es comunicar la profundidad estructural del **DOM tree**.

### Caso #2

```
<header class="block">
    <ul class="block_elem">
        <li class="block__elem--background-yellow" href="/">clubmate.fi</a>
    </ul>
</header>
```

Los **modificadores** no deben representar de forma directa la función del **CSS**, esto puede limitar la reusabilidad que propone **BEM**.

### Caso #3 
```
<form class="search-form">
    ...
</form>

<input class="search-form__input">

<button class="search-form__button">Search</button>
```

Un Elemento no puede existir de forma independiente a su respectivo **Bloque**, el proposito de los elementos es ser un complemento de un **Bloque**.


### Caso #4

```
<div class="red-text"></div>

<div classs="block__red-text"></div>
```

Tanto los bloques como los elementos unicamente deben describir su función/proposito (nav, nav__item, nav__button, etc.) mas no la apariencia/estados

```
<header class="block global-modifier">
    <ul class="block_elem">
        <li class="block__elem--modifier" href="/">clubmate.fi</a>
    </ul>
</header>
```

**BEM** no admite el concepto de modificadores globales, porque cualquier modificador necesita estar adjunto a un Elemento o un Bloque

## Clases con multi nombre

```
<!-- DO THIS -->
<div class="masiv-card masiv-card--color-dark">
    <div class="masiv-card__header">
        <div class="masiv-card__container-button"></div>
    </div>
</div>

<style>

</style>
```

# Alternativas a BEM

## CSS orientado a objetos (OOCSS): 

- Mantener la estructura y el aspecto por separado 
- Es una metodología realmente básica, que se enfoca principalmente en la forma de llamar las clases CSS de una forma mucho mas libre que BEM 

## Scalable and Modular Architecture for CSS (SMACSS): 
Es una metodología mucho mas compleja que conlleva su propio sistema de scaffolding y naming convention 

[documentación](http://smacss.com/)

## Atomic CSS (ACSS): 

Es una metodología con un sistema de scaffolding que tiene la misma visión de BEM (división del interfaz de usuario en bloques independientes) pero que su naming convention consiste en unicamente crear clases reutilizables. Sus clases reutilizables consisten en basicamente nombrar los modificadores de forma directa los cuales haran de forma explicita tendran que decir que hacen (ejm. Class=”Mt-10”).