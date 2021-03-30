---
title: 'Fire in Strasbourg, France Data Center'
date: '2021-03-10T01:47:58.454Z'
severity: major-outage
affectedsystems:
  - vps-fr
resolved: true
modified: '2021-03-30T19:52:57.193Z'
---

::: update Update | 2021-03-12T20:11:25.268Z
OVH will take several weeks or more to bring the services in Strasbourg online again.

We have ordered new servers in Roubaix to temporarily restore all affected customers servers there. Sadly there is also no ETA for deliveries in Roubaix, but it should be around 15th March.
:::


::: update Identified | 2021-03-10T01:47:58.454Z
OVH Announcement: We are currently facing a major incident in our DataCenter of Strasbourg. If your production is in Strasbourg, we recommend to activate your Disaster Recovery Plan.

Detailed information <http://travaux.ovh.net/?do=details&id=49484>
:::


::: update Solved | 2021-03-30T20:47:58.454Z
OVH finally brought Host 9 located in SBG3 online again. Host 1 (SBG2) is destroyed.

Backups of all affected customers from Host 1 were restored to Host 9 and all VPS are online again.

All affected VPS were renewed at least 1 month due to the incident.
:::

<!--- language code: en -->
