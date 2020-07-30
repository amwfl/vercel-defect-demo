# Vercel Defect Demo

The code is in a working state.

Steps to reproduce:
1. `npm install && npm start`
2. Verify that you see a "cat fact" that is fetched from the API.
3. Change the version of the `vercel` dependency to `"=19.2.0"`
4. `npm install && npm start`
5. The API no longer works.

Switching the version back to `"=19.0.1"` brings the code back to a working state.
