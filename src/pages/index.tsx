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
            <Sidebar />
            <Content>
                <Header />
            </Content>
        </>
    );
};
export default Home;

const Content = (props: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            {props.children}
        </div>
    );
};
