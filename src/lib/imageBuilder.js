import { createImageUrlBuilder } from '@sanity/image-url'; // Updated import
import { sanityClient } from './sanity'; // Point to your existing sanity client file

// Use createImageUrlBuilder instead of imageUrlBuilder
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}