"use client";

import { Navigation } from "@/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "../auth/auth-button";

export const HeaderNavigation = () => {
  return (
    <motion.header
      className={` bg-burgundy w-full z-50 transition-all duration-300`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Updated to be responsive */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-lustria text-2xl font-bold text-ivory"
          >
            <Link href="/" className="block">
              <Image
                src="/img/logo.png"
                alt="Zafta Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
                width={100}
                height={100}
                unoptimized
              />
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {Navigation.map((item, index) => (
              <motion.a
                key={item.path}
                href={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-ivory hover:text-rosegold transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right side: Cart + Auth */}
          {/* <div className="flex items-center space-x-4"> */}
          {/* Shopping Cart */}
          {/* <motion.div */}
          {/*   initial={{ opacity: 0, x: 20 }} */}
          {/*   animate={{ opacity: 1, x: 0 }} */}
          {/*   transition={{ duration: 0.6, delay: 0.3 }} */}
          {/* > */}
          {/* <CartButton user={user ?? null} /> */}
          {/* </motion.div> */}
          {/**/}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AuthButton />
          </motion.div>
          {/* </div> */}
        </div>
      </nav>
    </motion.header>
  );
};
