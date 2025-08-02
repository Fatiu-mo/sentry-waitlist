"use client";

import React, { useState } from "react";
import { ExternalLink, Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Waitlist() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleTestBot = () => {
    // Replace with your actual Telegram bot link
    window.open("https://t.me/SentryTokenWaitlistBot", "_blank");
  };

  const handleSocialLink = () => {
    window.open("https://x.com/sentrybot_io", "_blank");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
          : "bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-100"
      }`}
    >
      {/* Blockchain Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className={`w-full h-full ${
            isDark ? "bg-blue-500/5" : "bg-blue-600/5"
          }`}
          style={{
            backgroundImage: `
            linear-gradient(${
              isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(37, 99, 235, 0.1)"
            } 1px, transparent 1px),
            linear-gradient(90deg, ${
              isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(37, 99, 235, 0.1)"
            } 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Animated Blockchain Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Node connections */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={isDark ? "#3B82F6" : "#1E40AF"}
                stopOpacity="0.6"
              />
              <stop
                offset="100%"
                stopColor={isDark ? "#8B5CF6" : "#6D28D9"}
                stopOpacity="0.2"
              />
            </linearGradient>
          </defs>

          <line
            x1="10%"
            y1="20%"
            x2="90%"
            y2="80%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-10"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="20%"
            y1="80%"
            x2="80%"
            y2="20%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="3,7"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-10"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="5%"
            y1="50%"
            x2="95%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="8,4"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-12"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
        </svg>

        {/* Floating blockchain nodes */}
        <div
          className={`absolute w-4 h-4 rounded-full border-2 ${
            isDark
              ? "border-blue-400 bg-blue-400/20"
              : "border-blue-600 bg-blue-600/20"
          }`}
          style={{
            animation: "nodeFloat 15s ease-in-out infinite",
            top: "20%",
            left: "10%",
          }}
        ></div>
        <div
          className={`absolute w-3 h-3 rounded-full border-2 ${
            isDark
              ? "border-purple-400 bg-purple-400/20"
              : "border-purple-600 bg-purple-600/20"
          }`}
          style={{
            animation: "nodeFloat 12s ease-in-out infinite reverse",
            top: "70%",
            right: "15%",
          }}
        ></div>
        <div
          className={`absolute w-5 h-5 rounded-full border-2 ${
            isDark
              ? "border-cyan-400 bg-cyan-400/20"
              : "border-cyan-600 bg-cyan-600/20"
          }`}
          style={{
            animation: "nodeFloat 18s ease-in-out infinite",
            top: "40%",
            right: "20%",
          }}
        ></div>
        <div
          className={`absolute w-2 h-2 rounded-full border-2 ${
            isDark
              ? "border-green-400 bg-green-400/20"
              : "border-green-600 bg-green-600/20"
          }`}
          style={{
            animation: "nodeFloat 10s ease-in-out infinite reverse",
            bottom: "30%",
            left: "20%",
          }}
        ></div>

        {/* Hexagonal patterns */}
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <polygon
              points="30,5 50,15 50,35 30,45 10,35 10,15"
              fill="none"
              stroke={isDark ? "#3B82F6" : "#1E40AF"}
              strokeWidth="2"
              style={{ animation: "hexRotate 20s linear infinite" }}
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon
              points="20,3 33,10 33,23 20,30 7,23 7,10"
              fill="none"
              stroke={isDark ? "#8B5CF6" : "#6D28D9"}
              strokeWidth="2"
              style={{ animation: "hexRotate 15s linear infinite reverse" }}
            />
          </svg>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20px, 20px);
          }
        }

        @keyframes nodeFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-15px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
          66% {
            transform: translateY(10px) translateX(-8px) scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes hexRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dataFlow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>

      {/* Theme Toggle */}
      {/* <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-xl backdrop-blur-sm transition-all border ${
            isDark
              ? "bg-gray-800/30 border-blue-500/30 text-white hover:bg-gray-700/40 hover:border-blue-400/50"
              : "bg-white/30 border-blue-600/30 text-gray-800 hover:bg-white/40 hover:border-blue-500/50"
          }`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div> */}

      {/* Main Content */}
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="w-full max-w-md relative">
          <div
            className={`w-full p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 relative ${
              isDark
                ? "bg-gray-800/20 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
                : "bg-white/20 border border-blue-600/20 shadow-2xl shadow-blue-600/10"
            }`}
          >
            {/* Blockchain corner decorations */}
            <div
              className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-3xl ${
                isDark ? "border-blue-400/40" : "border-blue-600/40"
              }`}
            />
            <div
              className={`absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 rounded-tr-3xl ${
                isDark ? "border-blue-400/40" : "border-blue-600/40"
              }`}
            />
            <div
              className={`absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 rounded-bl-3xl ${
                isDark ? "border-blue-400/40" : "border-blue-600/40"
              }`}
            />
            <div
              className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-3xl ${
                isDark ? "border-blue-400/40" : "border-blue-600/40"
              }`}
            />

            {/* Data flow effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden mt-2 pointer-events-none">
              <div
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r ${
                  isDark
                    ? "from-transparent via-blue-400 to-transparent"
                    : "from-transparent via-blue-600 to-transparent"
                } opacity-30`}
                style={{ animation: "dataFlow 3s ease-in-out infinite" }}
              />
            </div>

            {/* Logo */}
            <div className="text-center mb-8">
              <div
                className={`inline-flex flex-col items-center gap-2 text-2xl font-bold relative ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {/* Logo with blockchain glow */}
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-full blur-xl ${
                      isDark ? "bg-blue-400/30" : "bg-blue-600/30"
                    } animate-pulse`}
                  />
                  <div
                    className={`relative w-20 h-20 rounded-full border-2 ${
                      isDark
                        ? "border-blue-400/50 bg-gray-800/50"
                        : "border-blue-600/50 bg-white/50"
                    } backdrop-blur-sm flex items-center justify-center`}
                  >
                    <Image
                      className="object-cover w-20 h-20 rounded-full"
                      src="/sentrybot.webp"
                      alt="Bot Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  {/* Orbital rings */}
                  <div
                    className={`absolute inset-0 rounded-full border ${
                      isDark ? "border-blue-400/20" : "border-blue-600/20"
                    }`}
                    style={{
                      width: "90px",
                      height: "90px",
                      left: "-5px",
                      top: "-5px",
                      animation: "hexRotate 10s linear infinite",
                    }}
                  />
                </div>

                {/* Brand name with cyber font effect */}
                <div
                  className={`font-black tracking-tight ${
                    isDark
                      ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      : "text-gray-800 drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                  }`}
                  style={{ fontFamily: "monospace" }}
                >
                  SentryBot
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="text-center mb-8">
              <h1
                className={`text-2xl font-bold mb-4 leading-tight relative ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
                style={{ fontFamily: "monospace" }}
              >
                <span
                  className={`${
                    isDark
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600"
                  } font-black`}
                >
                  Catch the Next Token Wave First!
                </span>
              </h1>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                SentryBot is your AI-powered crypto lookout, delivering
                real-time Telegram alerts when trending tokens hit DEX Screener.
                Track keywords, stay ahead, and never miss a launch!
              </p>
            </div>

            {/* Test Bot Button */}
            <div className="space-y-4">
              <button
                onClick={handleTestBot}
                className={`group w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 relative overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gradient-to-r from-blue-700 via-cyan-700 to-purple-700 hover:from-blue-600 hover:via-cyan-600 hover:to-purple-600 text-white shadow-lg shadow-blue-600/25"
                } transform hover:scale-[1.02] active:scale-[0.98] border ${
                  isDark ? "border-blue-400/30" : "border-blue-600/30"
                }`}
                style={{ fontFamily: "monospace" }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/20 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-center gap-3 relative z-10">
                  <span className="tracking-wider">JOIN WAITLIST</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:animate-pulse" />
                </div>

                {/* Data stream effect */}
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ animation: "dataFlow 1s ease-in-out infinite" }}
                />
              </button>
            </div>

            {/* Footer */}
            <div
              className={`mt-8 pt-6 border-t text-center text-sm ${
                isDark
                  ? "border-blue-500/20 text-gray-400"
                  : "border-blue-600/20 text-gray-500"
              }`}
              style={{ fontFamily: "monospace" }}
            >
              <a
                className="underline hover:no-underline"
                href="https://x.com/sentrybot_io"
                target="_blank"
              >
                Follow SentryBot on 𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
