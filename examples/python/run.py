"""
Greenhouse / Lever / Ashby / Recruitee / SmartRecruiters / Personio job scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Calls the actor with a small list of companies and prints the jobs it returns.
Docs: https://apify.com/bovi/greenhouse-lever-ashby-job-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {
    "companies": [
        {"ats": "greenhouse", "company": "stripe"},
        {"ats": "lever", "company": "spotify"},
        {"ats": "ashby", "company": "linear"},
    ],
    "titleKeyword": "engineer",   # optional substring filter; drop for all roles
    "remoteOnly": False,
    "maxJobsPerCompany": 25,
    "includeDescriptions": True,
}

# Start the actor and wait for it to finish.
run = client.actor("bovi/greenhouse-lever-ashby-job-scraper").call(run_input=run_input)

# Stream the results from the run's dataset.
for job in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(f"{job['company']:<14} {job.get('seniority') or '-':<8} {job['title']}  ->  {job['url']}")
