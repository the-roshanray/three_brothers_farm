"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = target.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const processSteps = [
    {
      icon: "🐄",
      title: "Farm Fresh Milk",
      desc: "Collected daily from healthy grass-fed cows raised with care.",
    },
    {
      icon: "🥛",
      title: "Hand Churned Butter",
      desc: "Traditional bilona method used to create rich cultured butter.",
    },
    {
      icon: "✨",
      title: "Slow Clarified Ghee",
      desc: "Cooked slowly in small batches for aroma, purity, and taste.",
    },
  ];

  const features = [
    { icon: "🌱", text: "100% Natural" },
    { icon: "🐄", text: "Grass Fed" },
    { icon: "🥛", text: "Bilona Made" },
  ];

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30">
      {/* Floating WhatsApp Button - Keep this as a floating option */}
      <a
        href="https://wa.me/9817816665"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/30 lg:hidden"
        aria-label="Contact on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .04 5.36.04 12c0 2.12.55 4.2 1.6 6.03L0 24l6.18-1.62A11.96 11.96 0 0012.04 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.2-3.52-8.52z" />
        </svg>
      </a>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-12 lg:py-10">
        {/* HERO SECTION */}
        <section className="overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(120,63,15,0.12)] transition-shadow hover:shadow-[0_30px_80px_rgba(120,63,15,0.18)]">
          <div className="grid items-center gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-800 transition-all hover:bg-amber-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                </span>
                Launching Soon
              </div>

              {/* Logo and Brand Name with 3B Circle */}
              <div className="mt-6 flex items-center gap-4">
                {/* 3B Circle Logo */}
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg ring-4 ring-amber-200/50 transition-all duration-300 hover:scale-105 hover:ring-amber-300">
                  <span className="text-2xl font-black tracking-tight">3B</span>
                </div>
                
                <div>
                  <h1 className="text-4xl font-extrabold leading-tight text-stone-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                    Three Brothers
                    <span className="block bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                      Farm
                    </span>
                  </h1>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                Premium A2 Desi Ghee crafted using the traditional bilona method
                from grass-fed cows. Rich aroma, golden texture, and farm-fresh
                goodness in every spoon.
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {features.map((item) => (
                  <div
                    key={item.text}
                    className="group rounded-2xl border border-amber-200/60 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
                  >
                    <div className="mb-2 text-3xl transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold text-amber-800">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* COUNTDOWN */}
              <div className="mt-8 rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-white p-6">
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-stone-500 sm:text-sm">
                  Launching In
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {countdownItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-amber-200/30 transition-all hover:shadow-md"
                    >
                      <div className="text-2xl font-bold text-amber-700 sm:text-3xl lg:text-4xl">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-stone-500 sm:text-xs">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOCIAL CTA - Now with both Instagram and WhatsApp buttons side by side */}
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Instagram Button */}
                  <a
                    href="https://www.instagram.com/threebrothersfarmindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Follow Us
                  </a>

                  {/* WhatsApp Button - Now next to Instagram */}
                  <a
                    href="https://wa.me/9817816665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .04 5.36.04 12c0 2.12.55 4.2 1.6 6.03L0 24l6.18-1.62A11.96 11.96 0 0012.04 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.2-3.52-8.52z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
                <p className="text-sm text-stone-500">
                  Follow our journey for farm updates and behind-the-scenes
                  content.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-amber-300/20 to-amber-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] shadow-2xl ring-1 ring-amber-200/40">
                <Image
                  src="/3B.png"
                  alt="Three Brothers Farm A2 Desi Ghee"
                  width={1000}
                  height={1200}
                  priority
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="mt-20">
          <div className="text-center">
            <span className="inline-block rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
              Our Process
            </span>
            <h2 className="mt-5 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Crafted With Tradition
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Every jar follows a centuries-old process that preserves
              nutrition, flavor, and authenticity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-1 hover:ring-amber-200/60"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 inline-block rounded-2xl bg-amber-50 p-4 text-5xl transition-all group-hover:scale-110 group-hover:bg-amber-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-700">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="mt-24 rounded-[32px] bg-white p-8 shadow-lg lg:p-14">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Our Story
          </span>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 lg:text-5xl">
            Three brothers. One family farm.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Three Brothers Farm began with a promise made generations ago: raise
            indigenous Gir cows naturally, never compromise quality, and
            preserve traditional farming practices.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 p-6 transition-all hover:bg-amber-50">
              <h3 className="text-2xl font-semibold text-stone-900">
                The Bilona Way
              </h3>
              <p className="mt-3 text-stone-600">
                We culture A2 milk into curd, hand-churn it into butter, then
                slowly cook it into aromatic golden ghee.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 p-6 transition-all hover:bg-amber-50">
              <h3 className="text-2xl font-semibold text-stone-900">
                Grainy. Aromatic. Golden.
              </h3>
              <p className="mt-3 text-stone-600">
                Authentic bilona ghee with the texture and aroma traditionally
                found in village homes.
              </p>
            </div>
          </div>
        </section>

        {/* SIGNATURE SECTION */}
        <section className="mt-24 rounded-[32px] bg-gradient-to-br from-amber-900 to-amber-700 p-8 text-white lg:p-14">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-amber-200">
            The Signature
          </span>
          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            A2 Gir Cow Desi Ghee
          </h2>
          <p className="mt-2 text-amber-200/80">Made the Bilona way.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Grainy Texture",
                desc: "Signature bilona grain that marks authentic slow-cooked ghee.",
              },
              {
                title: "A2 Protein",
                desc: "From indigenous Gir cows only.",
              },
              {
                title: "Small Batch",
                desc: "Hand-crafted in limited batches.",
              },
              {
                title: "Export Grade",
                desc: "Food-grade sealed for India and international shipping.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <div className="mb-3 h-1.5 w-12 rounded-full bg-amber-400" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-amber-100/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="mt-24 rounded-[32px] border border-amber-200/60 bg-white/90 p-8 shadow-lg backdrop-blur-sm lg:p-14">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            On The Roadmap
          </span>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 lg:text-5xl">
            Crafted next, not yet released.
          </h2>
          <p className="mt-4 text-stone-600">
            Products currently being developed and tested on the farm.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Fresh A2 Paneer", "Stone-Ground Atta", "Cold-Pressed Oils", "Organic Dals"].map(
              (item) => (
                <div
                  key={item}
                  className="group rounded-full border-2 border-dashed border-amber-300 px-6 py-3 text-amber-700 transition-all hover:border-solid hover:border-amber-500 hover:bg-amber-50"
                >
                  {item} <span className="text-xs font-bold uppercase tracking-wider text-amber-500">• SOON</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="mt-24 rounded-[32px] bg-gradient-to-r from-amber-700 to-amber-800 p-8 text-white lg:p-14">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "100%", label: "Natural Ingredients" },
              { value: "A2", label: "Premium Cow Milk" },
              { value: "Bilona", label: "Traditional Process" },
              { value: "Pure", label: "No Preservatives" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold lg:text-5xl">{stat.value}</div>
                <p className="mt-2 text-amber-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-amber-200/60 py-12 text-center">
          <div className="space-y-4">
            {/* Footer with 3B Logo */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-md">
                <span className="text-sm font-black tracking-tight">3B</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Three Brothers Farm
              </h3>
            </div>
            
            <p className="text-black">Pure • Traditional • Farm Fresh</p>
            
            {/* Footer Social Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/threebrothersfarmindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a
                href="https://wa.me/9817816665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.4 0 .04 5.36.04 12c0 2.12.55 4.2 1.6 6.03L0 24l6.18-1.62A11.96 11.96 0 0012.04 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.2-3.52-8.52z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-6 text-sm text-black">
              <span>© 2026 Three Brothers Farm</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}