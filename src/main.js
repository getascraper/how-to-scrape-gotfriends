import { ApifyClient } from 'apify-client';
import 'dotenv/config';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

async function run() {
  const run = await client.actor('getascraper/gotfriends-scraper').call({
    category: 'software',
    location: 'tel-aviv',
    searchQuery: 'React',
    maxItems: 500,
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  console.log(JSON.stringify(items, null, 2));
}

run();
