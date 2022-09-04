import { IconBell, IconNotification } from "@tabler/icons";
import Button from "./shared/Button";
import Sidebar from "./Sidebar";

export default function () {
    return (
        <>
            <Sidebar />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky top-0 h-16 border-b lg:py-2.5">
                    <div className="flex items-end justify-end space-x-4 px-6 2xl:container">
                        <button className="-mr-2 h-16 w-12 border-r lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="my-auto h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div className="flex space-x-4">
                            <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                                        <svg
                                            xmlns="http://ww50w3.org/2000/svg"
                                            className="w-4 fill-current"
                                            viewBox="0 0 35.997 36.004">
                                            <path
                                                id="Icon_awesome-search"
                                                data-name="search"
                                                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                        </svg>
                                    </span>
                                    <input
                                        type="search"
                                        name="leadingIcon"
                                        id="leadingIcon"
                                        placeholder="Search here"
                                        className="w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 outline-none transition focus:border-cyan-300"
                                    />
                                </div>
                            </div>
                            <button
                                aria-label="search"
                                className="h-10 w-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <svg
                                    xmlns="http://ww50w3.org/2000/svg"
                                    className="mx-auto w-4 fill-current text-gray-600"
                                    viewBox="0 0 35.997 36.004">
                                    <path
                                        id="Icon_awesome-search"
                                        data-name="search"
                                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                            </button>
                            <Button>
                                <IconBell />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="px-6 pt-6 2xl:container">
                    <div className="flex h-[80vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-800">
                        <span>Content</span>
                    </div>
                </div>
            </div>
        </>
    );
}
