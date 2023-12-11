import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipeCarousel extends Schema.Component {
  collectionName: 'components_recipe_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'restaurant';
  };
  attributes: {
    Title: Attribute.String;
    recipes: Attribute.Relation<
      'recipe.carousel',
      'oneToMany',
      'api::recipe.recipe'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipe.carousel': RecipeCarousel;
    }
  }
}
