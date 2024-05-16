import React from 'react'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'
import {useRouter} from "next/router";
import Script from "next/script";

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

        return (
            <>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={frontMatter.title || 'Spectate Docs'}/>
                <meta property="og:description"
                      content={frontMatter.description || 'Platform documentation of Spectate. Learn how to use Spectate in the most efficient way possible.'}/>
            </>
        )
    },
    primaryHue: 55.1,
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
    chat: {
        link: "https://spectate.net/r/discord"
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    // banner: {
    //   key: 'alerting-release',
    //   text: <a href="https://app.spectate.net" target="_blank">
    //      🎉 Improved alerting and incident management is now live. Read more →
    //    </a>,
    //  },
    footer: {
        text: (
            <>
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "us0skp6z"
  };
  
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
`
                }}/>
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
            </>
        ),
    },
}

export default config
