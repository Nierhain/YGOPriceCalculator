import { IconUser } from "@tabler/icons";
import { useSession } from "next-auth/react";
export default function () {
    const { data, status } = useSession();
    return (
        <div className="mt-8 text-center">
            {status === "authenticated" && 
                <img
                    src={data?.user?.image!}
                    alt=""
                    className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
                />
            }
            {status === "loading" && (
                <div className=" m-auto flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-slate-600 object-cover lg:h-28 lg:w-28">
                    <IconUser className="h-full w-full" />
                </div>
            )}
            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 dark:text-gray-200 lg:block">
                {data?.user?.name ?? (
                    <div className="mb-2 animate-pulse rounded-md bg-slate-600 p-4"></div>
                )}
            </h5>
        </div>
    );
}
