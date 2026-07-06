import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Jonas H. Møller | Blog',
    description: 'My journey through the world of data science, machine learning, and AI. Sharing my experiences, insights, and lessons learned along the way.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}