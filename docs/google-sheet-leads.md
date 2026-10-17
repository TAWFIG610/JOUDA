# Saving leads to Google Sheets

When this is set up, every completed consultation form is also saved as a row in a Google Sheet, even if the visitor never presses "send" in WhatsApp.

It takes about 10 minutes and needs no paid service.

## 1. Create the sheet

1. Create a new Google Sheet, for example **THIQA UNI leads**.
2. Rename the first tab to **Leads**.

## 2. Add the script

1. In the sheet, open **Extensions → Apps Script**.
2. Delete everything in `Code.gs` and paste this:

```js
const SHEET_NAME = "Leads";
const HEADERS = [
  "submittedAt", "name", "whatsapp", "country", "degree",
  "field", "pathway", "source", "language", "page",
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = getSheet_();
  sheet.appendRow(HEADERS.map((key) => clean_(data[key])));
  return ContentService.createTextOutput("ok");
}

function getSheet_() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

// Anyone can submit the form, so stop values being run as spreadsheet
// formulas and cap their length.
function clean_(value) {
  const text = String(value == null ? "" : value).slice(0, 2000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
```

3. Click **Save**.

## 3. Publish it

1. Click **Deploy → New deployment**.
2. Choose type **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
4. Click **Deploy**, approve the permissions, and copy the **Web app URL** (it ends in `/exec`).

## 4. Connect the website

Set this environment variable where the site is built (your hosting dashboard, or a `.env.local` file for local builds):

```
VITE_LEADS_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
```

Rebuild and redeploy the site. The form's privacy note changes automatically to say that details are kept by the team.

## Notes

- If you change the script later, use **Deploy → Manage deployments → Edit → New version**, so the URL stays the same.
- The URL is public in the site's code. Anyone who finds it could add junk rows, so check the sheet now and then. If spam becomes a problem, ask for a captcha to be added.
- Lead data is personal data. Share the sheet only with people on the team who need it.
