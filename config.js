module.exports = {
  "title": "100UP Hosting Status",
  "name": "100UP Hosting Status",
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
      "vps-au",
      "vps-nl",
      "main-website",
      "customer-panel",
      "api"
    ]
  },
  "manifest": false,
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
