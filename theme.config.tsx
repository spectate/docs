import React from 'react'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    docsRepositoryBase: "https://github.com/spectate/docs/tree/main",
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Spectate Docs'
            }
        }
    },
    head: () => {
        const {asPath, defaultLocale, locale} = useRouter()
        const {frontMatter} = useConfig()
        const url =
            'https://docs.spectate.net' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return <>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={frontMatter.title || 'Spectate Docs'}/>
            <meta property="og:description"
                  content={frontMatter.description || 'Platform documentation of Spectate. Learn how to use Spectate in the most efficient way possible.'}/>
        </>
    },
    primaryHue: 188,
    logo: () => {
        return (
            <>
                <picture
                >
                    <source
                        srcSet="/logo-light.svg"
                        media="(prefers-color-scheme: dark)"
                    />
                    <img
                        src="/logo-dark.svg"
                        alt="Spectate Logo"
                        style={{
                            height: 30
                        }}
                    />
                </picture>
            </>
        )
    },
    logoLink: '/',
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    // banner: {
    //   key: '2.0-release',
    //   text: <a href="https://nextra.site" target="_blank">
    //     🎉 Nextra 2.0 is released. Read more →
    //   </a>,
    // },
    footer: {
        text: (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <p style={{
                    fontSize: '0.875rem',
                    color: 'rgb(102 112 133)'
                }}>
                    &copy; {new Date().getFullYear()} Spectate&reg;. All rights
                    reserved.
                </p>
                <p style={{
                    fontSize: '0.75rem',
                    color: 'rgb(152 162 179)'
                }}>
                    Spectate is a registered trademark of Realify.
                </p>
            </div>
        ),
    },
}

export default config
