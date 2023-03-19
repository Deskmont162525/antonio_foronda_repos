<template>
    <section class="container-general">
        <form class="Container-principal__form__multiple-filds">
      <div class="general-form__input general-form__input--multi">
        <label for="name">Nombre:</label>
        <input id="name" v-model="name" type="text">
      </div>
      <div class="general-form__input general-form__input--multi">
        <label for="price">Precio:</label>
        <input id="price" v-model="price" type="number">
      </div>
      <div class="general-form__input general-form__input--multi">
        <label for="rating">Calificación:</label>
        <input id="rating" v-model="rating" type="number">
      </div>
      <div class="general-form__input general-form__input--multi">
        <label for="image">Imagen:</label>
        <input id="image" ref="imageInput" type="file" accept="image/*" @change="showImage">
      </div>
      <div class="general-form__input general-form__input--multi" v-if="image">
        <img :src="image" alt="Imagen seleccionada">
      </div>
      <div class="general-form__input general-form__input--multi">
        <label for="categories">Categorías:</label>
        <multiselect id="categories" v-model="categories" :options="categoryOptions" :multiple="true"
          :close-on-select="false" :clear-on-select="false" :preserve-search="true"
          placeholder="Seleccione una o varias categorías" label="name" track-by="id" :searchable="true"
          :loading="isLoading" :internal-search="false" @search-change="searchCategories" @select="validateCategories"
          @remove="validateCategories">
          <template v-slot:noResult>
            <div class="no-result">No se encontraron categorías con ese nombre</div>
          </template>
          <template v-slot:option="{ option }">
            <div>{{ option.name }}</div>
          </template>
        </multiselect>
      </div>
    </form>
    <div class="btn-principal__btn-container">
        <button class="btn-principal--primary m-t-20" type="submit">Crear Producto</button>
    </div>
    </section>
  </template>


