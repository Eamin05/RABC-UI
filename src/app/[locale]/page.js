import { useTranslations } from "next-intl";
import Image from "next/image";
import "@/styles/Login.scss";
import LoginFormComp from "@/components/LoginForm";
import { montserrat } from "./fonts/Font";

export default function Home() {
  const t = useTranslations("home");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    console.log({ username, password });
  };

  return (
    <div className="login-container">
      <div className="login-image-wrapper">
        <Image
          src="/images/logo.jpg"
          alt="VRV Logo"
          width={200}
          height={200}
          className="login-image"
        />
        <p className={`${montserrat.className} login-intro`}>
          VRV Security, a global powerhouse in AI-driven cybersecurity
          solutions. Trusted by over 200 international clients across 5
          continents, our expert team ensures unparalleled security and client
          satisfaction.
        </p>
      </div>
      <div className="login-form-wrapper">
        <h2 className={`${montserrat.className}`}>Login</h2>
        <div className="login-form">
          <LoginFormComp />
        </div>
      </div>
    </div>
  );
}
