module.exports = {
  "title": "100UP Hosting Status",
  "name": "100up_hosting_status",
  "description": "100UP Hosting Status Page",
  "baseUrl": "https://status.100up.org",
  "defaultLocale": "en",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    "systems": [
      "vps-fr",
      "vps-de",
      "vps-us",
      "vps-ca",
      "vps-uk",
      "main-website",
      "customer-panel",
      "api"
    ]
  },
  "notifications": {
    "feeds": true,
    "icalendar": false
  },
  "theme": {
    "links": {
      "en": {
        "home": "https://100up.org"
      }
    }
  }
}