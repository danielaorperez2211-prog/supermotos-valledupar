"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import { SuzukiLogo } from "./SuzukiLogo";
import { topNav, mainNav, secondaryNav, type NavItem } from "@/lib/suzuki-data";
import { cn } from "@/lib/utils";

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <a
        href={item.href}
        className="whitespace-nowrap py-1 text-[13px] font-medium tracking-suzuki text-suzuki-ink transition-colors hover:text-suzuki-red"
      >
        {item.label}
      </a>
    );
  }
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 whitespace-nowrap py-1 text-[13px] font-medium tracking-suzuki text-suzuki-ink transition-colors group-hover:text-suzuki-red"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 border-t-2 border-suzuki-red bg-white opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="block border-b border-neutral-100 px-4 py-2.5 text-[12.5px] font-medium tracking-suzuki text-suzuki-ink transition-colors hover:bg-neutral-50 hover:text-suzuki-red"
          >
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <a
        href={item.href}
        className="block border-b border-neutral-800 py-3 text-sm font-medium tracking-suzuki text-white"
      >
        {item.label}
      </a>
    );
  }
  return (
    <div className="border-b border-neutral-800">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-sm font-medium tracking-suzuki text-white"
      >
        {item.label}
        {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>
      {open && (
        <div className="pb-2">
          {item.children.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="block py-2 pl-4 text-[13px] text-neutral-300 hover:text-suzuki-red"
            >
              {c.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      {/* Top utility bar */}
      <div className="hidden border-b border-neutral-200 lg:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-end gap-6 px-4 py-2 xl:px-0">
          {topNav.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className="text-[11px] font-medium tracking-suzuki text-neutral-500 transition-colors hover:text-suzuki-red"
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-[1200px] items-stretch px-4 xl:px-0">
        {/* Logo */}
        <div className="flex items-center py-4 pr-6 lg:pr-10">
          <SuzukiLogo />
        </div>

        {/* Desktop nav (two rows) */}
        <div className="hidden flex-1 flex-col justify-center gap-2.5 py-3 lg:flex">
          <nav className="flex items-center gap-x-5 xl:gap-x-6">
            {mainNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>
          <nav className="flex items-center gap-x-6">
            {secondaryNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>
        </div>


        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(true)}
          className="ml-auto flex items-center px-2 text-suzuki-ink lg:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-suzuki-ink px-5 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-bold tracking-suzuki text-suzuki-red">
                SUZUKI
              </span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
                className="text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <a
              href="https://tienda.suzuki.com.co/"
              className="mb-4 block bg-suzuki-red py-2.5 text-center font-display text-sm font-semibold tracking-suzuki text-white"
            >
              TIENDA / STORE
            </a>
            <nav>
              {mainNav.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
              {secondaryNav.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
