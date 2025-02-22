"use client";

import { CursorProps, NavLinkProps } from "@/types";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";
import { authClient } from "@/app/auth/auth-client";
import { redirect } from "next/navigation";

const handleMouseLeave = (
  ref: RefObject<HTMLButtonElement>,
  setPosition?: Dispatch<SetStateAction<CursorProps>>,
) => {
  if (!ref.current) return;
  const { width } = ref.current.getBoundingClientRect();
  if (setPosition) {
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  }
};

export default function LogoutButton({
  children,
  className,
  setPosition,
}: Omit<NavLinkProps, "href">) {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      className={className}
      ref={ref}
      onMouseEnter={() => handleMouseLeave(ref, setPosition)}
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect("/");
            },
          },
        })
      }
    >
      {children}
    </button>
  );
}