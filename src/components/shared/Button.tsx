import { ButtonHTMLAttributes, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {


    return (
        <button className="btn btn-square">
            {props.children}
        </button>
    );
}
