/**
 * Greenhouse / Lever / Ashby / Recruitee / SmartRecruiters / Personio job scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Calls the actor with a small list of companies and prints the jobs it returns.
 * Docs: https://apify.com/bovi/greenhouse-lever-ashby-job-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
    companies: [
        { ats: 'greenhouse', company: 'stripe' },
        { ats: 'lever', company: 'spotify' },
        { ats: 'ashby', company: 'linear' },
    ],
    titleKeyword: 'engineer', // optional substring filter; drop for all roles
    remoteOnly: false,
    maxJobsPerCompany: 25,
    includeDescriptions: true,
};

// Start the actor and wait for it to finish.
const run = await client.actor('bovi/greenhouse-lever-ashby-job-scraper').call(input);

// Fetch the results from the run's dataset.
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const job of items) {
    console.log(`${job.company}\t${job.seniority ?? '-'}\t${job.title}  ->  ${job.url}`);
}
