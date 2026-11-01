import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity Project ID
  dataset: 'production',        // Usually 'production'
  apiVersion: '2026-03-01',     // Use current date
  useCdn: true,                 // `true` for fast cached public reads
});