"use client";

import { IoSettingsSharp, IoPlayCircle } from "react-icons/io5";
import { FaMedal, FaQuestion } from "react-icons/fa";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function LoginPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user?.sub?.split("|")[1]);

  if (user) {
    return (
      <Container>
        <div className="flex flex-col gap-8">
          <div>
            <Image
              src={user.picture ?? ""}
              alt={user.name ?? ""}
              height={100}
              width={100}
              // quality={100}
              className="mx-auto rounded-full mb-4"
            />
            <h1 className="text-[26px] text-center font-medium text-slate-800 dark:text-slate-200">
              Witaj <b>{user.nickname}</b>!
            </h1>
          </div>

          <Button variant="outline" size="default" href="/gamemode">
            <IoPlayCircle
              size="22"
              className="mr-2 text-slate-800 dark:text-slate-300"
            />
            WYBÓR GRY
          </Button>
          <Button variant="outline" size="default" href="/ranking">
            <FaMedal
              size="20"
              className="mr-2 text-slate-800 dark:text-slate-300"
            />
            RANKING
          </Button>
          <Button variant="outline" size="default" href="/settings">
            <IoSettingsSharp
              size="20"
              className="mr-2 text-slate-800 dark:text-slate-300"
            />
            USTAWIENIA
          </Button>
          <Button variant="outline" size="default" href="/howtoplay">
            <FaQuestion
              size="20"
              className="mr-2 text-slate-800 dark:text-slate-300"
            />
            JAK GRAĆ
          </Button>

          <Button
            className="mt-12"
            variant="outline"
            size="default"
            href="/api/auth/logout"
          >
            <IoLogOutOutline
              size="20"
              className="mr-2 text-slate-800 dark:text-slate-300"
            />
            WYLOGUJ
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Button variant="outline" size="default" href="/api/auth/login">
        <IoLogInOutline
          size="20"
          className="mr-2 text-slate-800 dark:text-slate-300"
        />
        ZALOGUJ SIĘ
      </Button>
    </Container>
  );
}
