---
layout: page
title: RobiZona
# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: RZCore Docs
  - - meta
    - property: og:image
      content: https://avatars.githubusercontent.com/u/72941167?s=200&v=4
  - - meta
    - name: title
      content: RZCore Docs
  - - meta
    - name: twitter:card
      content: https://avatars.githubusercontent.com/u/72941167?s=200&v=4
  - - link
    - rel: icon
      type: image/png
      href: logo.png
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/72941167?v=4',
        name: 'RobiZona',
        title: 'Cane di Pecora',
        links: [
            { icon: 'github', link: 'https://github.com/RobiZona' },
            { icon: 'instagram', link: 'https://www.instagram.com/robizona/' },
            { icon: 'youtube', link: 'https://www.youtube.com/robizona' },
        ]
    },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>About</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Dev</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="developers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
