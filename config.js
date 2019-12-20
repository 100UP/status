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
    "frontMatterFormat": "yaml"
  },
  "notifications": {
    "feeds": true,
    "icalendar": false
  },
  "theme": {
    "links": {
      "home": "https://100up.org"
    }
  },
  "systems": {
    "items": {
      "vps-fr": {
        title: "VPS Hosting France"
      },
      "vps-de": {
        title: "VPS Hosting Germany"
      },
      "vps-de": {
        title: "VPS Hosting Germany"
      },
      "vps-us": {
        title: "VPS Hosting United States"
      },
      "vps-ca": {
        title: "VPS Hosting Canada"
      },
      "vps-uk": {
        title: "VPS Hosting United Kingdom"
      },
      "main-website": {
        title: "Main Website"
      },
      "customer-panel": {
        title: "Customer Panel"
      },
      "api": {
        title: "API"
      }
    }
  },
}