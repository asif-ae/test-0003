"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

type AccordionItem = {
  name: string;
  links: { label: string; href: string }[];
};

type AccordionProps = {
  title: string;
  items: AccordionItem[];
};

function Accordion({ title, items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg mb-4">
      <h2 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4 uppercase">{title}</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between py-2 px-4 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="font-medium">{item.name}</span>
              {activeIndex === index ? (
                <MdExpandLess className="w-6 h-6" />
              ) : (
                <MdExpandMore className="w-6 h-6" />
              )}
            </button>
            {activeIndex === index && (
              <div className="pl-6 pb-2">
                {item.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="block py-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
