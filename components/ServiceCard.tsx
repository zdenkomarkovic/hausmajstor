"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services-data";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group"
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#1a3a6b] font-bold text-lg mb-2">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>
        <Link
          href={`/usluge/${service.slug}`}
          className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
        >
          Saznaj više →
        </Link>
      </div>
    </motion.div>
  );
}
