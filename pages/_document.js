"use client"
import React, { Suspense } from 'react';
// ** Next Import
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
const CustomDocument = () => {


    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />

                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />


                {/* <!-- Google Tag Manager --> */}
                <Script id='googleTag' strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MG5P53R');`}}></Script>
                {/* <!-- End Google Tag Manager --> */}

                <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></Script>


            </Head>

            <body>
                <Suspense>

                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG5P53R"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}
                </Suspense>

                <Main />

                <NextScript />



                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script> */}

            </body>
        </Html>
    );
};
export default CustomDocument;






