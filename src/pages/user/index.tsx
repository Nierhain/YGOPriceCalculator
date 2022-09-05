import { NextPage } from "next";
import { useState } from "react";

const UserPage: NextPage = () => {
    const [adminKey, setAdminKey] = useState<string>()

    return (
        <div className="flex flex-col place-items-center gap-12 p-4">
            <h1 className="text-3xl">Profile Page</h1>
            <div className="flex flex-col place-items-center gap-4 p-4">
                <div className="grid grid-cols-4 items-end gap-4">
                    <div className="col-span-3">
                        <label
                            htmlFor="adminKey"
                            className="text-md mb-2 block font-medium text-gray-900 dark:text-gray-300">
                            Enter admin key
                        </label>
                        <input
                            name="adminKey"
                            id="adminKey"
                            className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400
                        focus:outline-none focus:ring-2 focus:ring-sky-300
                        dark:bg-slate-800 dark:text-gray-100"
                            value={adminKey}
                            onChange={(e) => setAdminKey(e.target.value)}
                        />
                    </div>
                    <div className="col-span-1">
                        <button className="h-10 w-24 rounded-md bg-blue-600 px-4 py-1 text-gray-50" onClick={() => {
                            
                        }}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
