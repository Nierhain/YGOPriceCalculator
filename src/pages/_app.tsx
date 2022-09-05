import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppType, NextComponentType } from "next/dist/shared/lib/utils";
import React, { FunctionComponent, useState } from "react";
import superjson from "superjson";
import Header from "../components/Header/Header";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import type { AppRouter } from "../server/router";
import "../styles/globals.css";
const MyApp: AppType = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <ThemeProvider attribute="class">
                <Sidebar />
                <Content>
                    <Header />
                    <Component {...pageProps} />
                </Content>
            </ThemeProvider>
        </SessionProvider>
    );
};

const Content = (props: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            {props.children}
        </div>
    );
};

const getBaseUrl = () => {
    if (typeof window !== "undefined") return ""; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
    config() {
        const url = `${getBaseUrl()}/api/trpc`;

        return {
            links: [
                loggerLink({
                    enabled: (opts) =>
                        process.env.NODE_ENV === "development" ||
                        (opts.direction === "down" &&
                            opts.result instanceof Error),
                }),
                httpBatchLink({ url }),
            ],
            url,
            transformer: superjson,
            /**
             * @link https://react-query.tanstack.com/reference/QueryClient
             */
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        };
    },
    ssr: true,
})(MyApp);
