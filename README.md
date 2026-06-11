# Greenhouse, Lever & Ashby Job Scraper — examples

Runnable examples for the **[Greenhouse, Lever & Ashby Job Scraper API](https://apify.com/bovi/greenhouse-lever-ashby-job-scraper)** on Apify.

Pull **public job postings across 6 applicant-tracking systems — Greenhouse, Lever, Ashby, Recruitee, SmartRecruiters & Personio — into one unified schema**. No login, no headless browser, pure public-feed API. Per-result pricing.

## What you get per job
`company · ats · title · location · remote · remote_type · department · team · employment_type · seniority · salary · url · apply_url · posted_at · job_id · global_id · description_text · description_html · scraped_at` — see [`examples/sample_output.json`](examples/sample_output.json) for real records.

## Who uses this
- **Recruiting / sourcing** — one feed of every open role at a list of target companies, deduplicated across ATS.
- **Sales & lead-gen** — a company hiring *Account Executives* or *Security Engineers* is a buying signal; the built-in **Hiring-Signal Report mode** surfaces exactly that.
- **Labor-market / talent research** — track openings, seniority mix and remote-type over time with **change-detection** (`onlyNewSinceLastRun`).

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Pick a language below. Both call the actor with a small list of companies and print the jobs.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (3 real records) | [`examples/sample_output.json`](examples/sample_output.json) |

## Input shape (the parts you'll use most)
```jsonc
{
  "companies": [
    { "ats": "greenhouse", "company": "stripe" },
    { "ats": "lever",      "company": "spotify" },
    { "ats": "ashby",      "company": "linear" }
  ],
  "titleKeyword": "engineer",     // optional substring filter
  "locationKeyword": "remote",    // optional
  "remoteOnly": false,
  "maxJobsPerCompany": 50,
  "includeDescriptions": true,
  "onlyNewSinceLastRun": false,   // change-detection between scheduled runs
  "reportMode": false,            // Hiring-Signal Report mode
  "keywords": ["AI", "sales", "security"]
}
```
If you don't know a company's ATS, the actor auto-detects it. Curated `presetLists` (e.g. YC companies) are also supported.

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/greenhouse-lever-ashby-job-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_These examples are MIT-licensed. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
