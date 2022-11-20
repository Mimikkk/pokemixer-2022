// @refresh reload
import { Suspense } from "solid-js";
import {
  FileRoutes,
  Head,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import "./index.css";

export default function Root() {
  return (
    <html lang="en">
    <Head>
      <Title>Pokemixer</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="author" content="github.com/Mimikkk" />
      <Link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
    <ErrorBoundary>
      <Suspense>
        <Routes>
          <FileRoutes />
        </Routes>
      </Suspense>
    </ErrorBoundary>
    <Scripts />
    </body>
    </html>
  );
}
