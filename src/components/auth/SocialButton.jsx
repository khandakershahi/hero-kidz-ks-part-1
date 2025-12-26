"use client";

import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SocialButton() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="btn btn-outline w-full flex items-center gap-2"
        >
            <FaGoogle />
            Continue with Google
        </button>
    );
}
