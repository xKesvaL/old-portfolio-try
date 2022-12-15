import { error } from '@sveltejs/kit';
import get from '$lib/posts';

export async function load({ params }: any) {
  const post = get('projects').find((x) => x.slug === params.slug);

  if (post) {
    return {
      post
    };
  }

  throw error(500, `Could not load ${params.slug}`);
}
