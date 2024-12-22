<script setup>
import DefaultTheme from 'vitepress/theme'
import GoogleTranslateSelect from '@google-translate-select/vue3'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #nav-bar-content-before>
            <GoogleTranslateSelect default-language-code="it" default-page-language-code="it"
                :fetch-browser-language="false" trigger="click"/>
        </template>
    </Layout>
</template>