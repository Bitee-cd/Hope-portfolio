import Button from "@/Components/Reusable/Button";
import Logo from "@/Components/svg/Logo";
import Link from "next/link";
import React from "react";
interface Props {}
const ErrorPage = (props: Props) => {
  return (
    <section className="min-h-screen bg-sec text-ter">
      <div className="screen-center h-screen flex justify-center items-center">
        <div className="flex justify-center flex-col gap-5 items-center">
          <Logo />
          <h2 className="text-3xl ">Page Not Found</h2>

          <Link href="/">
            <Button text="Go to Home" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
