import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { prependOnceListener } from "process";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>YGOPriceCalculator</title>
                <meta
                    name="description"
                    content="Calculate the prices for your "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

        </>
    );
};
export default Home;


