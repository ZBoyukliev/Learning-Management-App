"use client";

import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NonDashboardNavbar: any = () => {

  return (
    <nav className="nondashboard-navbar bg-[#1B1C22]">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand hover:text-[#6e6e6e];" scroll={false}>
            ZARKOB
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className="nondashboard-navbar__search-input bg-[#25262F] text-[#3d3d3d] hover:bg-[#3d3d3d] hover:text-white"
                scroll={false}
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="nondashboard-navbar__search-icon text-[#6e6e6e] cursor-pointer hover:cursor-pointer"
                size={18}
              />
            </div>
          </div>
        </div>
        <div className="nondashboard-navbar__actions">
          <button className="nondashboard-navbar__notification-button">
            <span className="nondashboard-navbar__notification-indicator"></span>
            <Bell className="nondashboard-navbar__notification-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;