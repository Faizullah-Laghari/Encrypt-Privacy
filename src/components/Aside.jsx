import React from "react";
import logo from "../assets/img/common/logo.svg";
import dashboard from "../assets/img/common/dashboard.svg";
import audit2 from "../assets/img/common/audit2.svg";
import audit from "../assets/img/common/audit.svg";
import token from "../assets/img/common/token.svg";
import trending from "../assets/img/common/trending.svg";
import security from "../assets/img/common/security.svg";
import monitor from "../assets/img/common/monitor.svg";
import bug from "../assets/img/common/bug.svg";
import settings from "../assets/img/common/settings.svg";
import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <aside className="w-[260px] pl-[20px] py-[30px] h-[100vh] overflow-auto no-scrollbar">
      <img src={logo} alt="" />
      <nav className="mt-[25px]">
        <Link
          to="/"
          className="flex items-center gap-[10px] px-[16px] py-[12px] pb-[22px] text-[18px] font-bold text-[#fff] border-b-[1px] border-b-[#212224]"
        >
          <img src={dashboard} alt="" />
          Dashboard
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center gap-[10px] px-[16px] py-[12px] pb-[22px] text-[18px] font-bold text-[#7F8083] border-b-[1px] border-b-[#212224]"
        >
          <img src={audit2} alt="" />
          Audit Oversight
        </Link>
        <h1 className="flex items-center gap-[10px] px-[16px] py-[12px] pt-[22px] text-[18px] font-bold text-[#7F8083]">
          Audits
        </h1>
        <Link
          to="/code"
          className="flex items-center gap-[10px] px-[16px] py-[12px] text-[18px] font-bold text-[#7F8083]"
        >
          <img src={audit} alt="" />
          Code Audit
        </Link>
        <Link
          to="/token-audit"
          className="flex items-center gap-[10px] px-[16px] py-[12px] pb-[22px] text-[18px] font-bold text-[#7F8083] mt-[10px] border-b-[1px] border-b-[#212224]"
        >
          <img src={token} alt="" />
          Token Audit
        </Link>
        <h1 className="flex items-center gap-[10px] px-[16px] py-[12px] pt-[22px] text-[18px] font-bold text-[#7F8083]">
          Leaderboards
        </h1>
        <Link
          to="#"
          className="flex items-center gap-[10px] px-[16px] py-[12px] text-[18px] font-bold text-[#7F8083]"
        >
          <img src={trending} alt="" />
          Trending
        </Link>
        <Link
          to="/live-monitor"
          className="flex items-center gap-[10px] px-[16px] py-[12px] text-[18px] font-bold text-[#7F8083] mt-[10px]"
        >
          <img src={monitor} alt="" />
          Live Monitoring
        </Link>
        <Link
          to="/security-score"
          className="flex items-center gap-[10px] px-[16px] py-[12px] text-[18px] font-bold text-[#7F8083] mt-[10px]"
        >
          <img src={security} alt="" />
          Security Score
        </Link>
        <Link
          to="/bounty"
          className="flex items-center gap-[10px] px-[16px] py-[12px] text-[18px] font-bold text-[#7F8083] mt-[10px]"
        >
          <img src={bug} alt="" />
          Bug Bounty
        </Link>
        <Link
          to="/"
          className="flex items-center gap-[10px] px-[16px] py-[12px] text-[18px] font-bold text-[#7F8083] mt-[10px]"
        >
          <img src={settings} alt="" />
          Settings
        </Link>
      </nav>
    </aside>
  );
};
