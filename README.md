# The Bifrost School — Website

Donor and family-facing site for The Bifrost School, hosted on GitHub Pages (bifrostschool.com).

## How to update the site's content

**Edit `content.js`.** Nearly every word and number on the site lives there:
headlines, body copy, donation tiers, milestones, the funding goal, the
amount raised, the budget modal, and the five-year financial model
assumptions. Each section is labeled with a comment.

Typical edits:

| To change... | Edit this in `content.js` |
|---|---|
| Amount raised so far | `amountRaised` |
| Funding goal | `fundingGoal` and `budgetTotal` |
| Budget modal categories | `budgetCategories` |
| Donation tiers | `tiers` |
| School partnership pricing | `partnershipFee` (placeholder — set your real rate) |
| Development tab passphrase | `donorPassword` |
| Donate button destination | `donateUrl` |

After editing, open `index.html` in a browser to preview, then commit and
push to `main` to publish.

A few strings are edited directly in `index.html` instead: the "Our
Philosophy" heading, the founder bio, the advisor cards, and the footer.

## File layout

| File | Purpose |
|---|---|
| `index.html` | Page structure (all five tabs) |
| `content.js` | **All site text and numbers — edit this** |
| `styles.css` | All styling |
| `app.js` | Behavior: tabs, financial model, budget modal, contact form |
| `images/` | Artwork and photos |
| `bifrost_bg.mp4` | Hero background video |
| `bifrost_admin.html` | Legacy admin editor (see note below) |

## Note on the old admin page

`bifrost_admin.html` saves content overrides into your browser's
localStorage (`bifrost_config`), and those overrides take precedence over
`content.js` **in that browser only** — they never affect what visitors
see. If an edit to `content.js` doesn't seem to show up for you, clear the
override: open DevTools (F12) → Console → run
`localStorage.removeItem('bifrost_config')` and refresh.
