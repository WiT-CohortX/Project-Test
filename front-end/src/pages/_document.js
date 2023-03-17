import { SkipLink } from '@/components/common/skipLink'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.png" rel="icon" sizes="any" type="image/png" />
      </Head>
      <body>
        <SkipLink />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
