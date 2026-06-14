"use client";

import { useState } from "react";

const COFFEE_INFO = `Our coffees are certified organic and shade-grown at elevations between 1,400 and 2,000 metres above sea level on the slopes of Mt. Kenya. Cherries are hand-picked at peak ripeness by our farming families and wet-processed within 24 hours at our on-site mill. Beans are sun-dried on raised African beds, then dry-milled, graded, and shipped to our Nairobi roastery where they are roasted in small batches and dispatched within 48 hours of roasting. Each bag is sealed with a one-way degassing valve to lock in freshness.`;

const WHOLESALE = `We partner with specialty cafés, restaurants, hotels, and retailers who share our commitment to quality and origin transparency. Wholesale pricing is available for standing orders of 5 kg and above. Discounts apply at 10 kg, 25 kg, and 50 kg tiers. We offer free cupping sessions for prospective wholesale accounts in Nairobi. Green bean and roasted bean contracts are both available. Contact our wholesale team at wholesale@firefly.coffee or call +254 722 306 787 to get started. Standard lead time for roasted orders is 3–5 business days.`;

const DELIVERY = `We ship across Kenya via courier — orders placed before noon are typically dispatched same day and arrive within 2–3 business days in Nairobi and 3–5 days upcountry. International shipping to East Africa, the UK, and select EU destinations is available on request — contact us for a shipping quote. All orders are packed in resealable, nitrogen-flushed bags with a one-way valve to ensure freshness on arrival. Because coffee is a perishable product, opened bags cannot be returned. If your order arrives damaged, incorrect, or lost in transit, please notify us within 48 hours with a photo and we will reship at no charge.`;

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-t border-[#1A0A00]/10 ">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="justify-start text-black text-lg font-semibold font-['Inter'] uppercase">
          {title}
        </span>
        <span
          className="text-lg leading-none text-[#1A0A00]/40 ml-6 shrink-0 transition-transform duration-200"
          aria-hidden
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="justify-start text-black text-lg font-light font-['DM_Sans'] pb-10">
          {content}
        </p>
      </div>
    </div>
  );
}

const DEFAULT_DESCRIPTION =
  "Mt Kenya Roast is a premium single-origin coffee sourced from the slopes of Mount Kenya, one of Africa's most celebrated coffee-growing regions. Grown at elevations between 1,400 and 2,000 metres, the beans benefit from rich volcanic soils, ample rainfall, and cool nights that slow the ripening process and concentrate flavour. Mt Kenya Roast delivers a bright, full-bodied cup with a vibrant acidity reminiscent of blackcurrant and red berry, balanced by a deep, wine-like sweetness. Subtle earthy undertones and a clean, lingering finish make it a favourite among specialty coffee lovers seeking complexity in every sip.";

export function AccordionSection({ description }: { description?: string }) {
  const [openItem, setOpenItem] = useState("DESCRIPTION");

  const items = [
    { title: "DESCRIPTION",       content: description || DEFAULT_DESCRIPTION },
    { title: "COFFEE INFO",        content: COFFEE_INFO },
    { title: "WHOLESALE",          content: WHOLESALE },
    { title: "DELIVERY & RETURNS", content: DELIVERY },
  ];

  return (
    <div>
      {items.map(item => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          isOpen={openItem === item.title}
          onToggle={() => setOpenItem(prev => prev === item.title ? "" : item.title)}
        />
      ))}
      <div className="border-t border-[#1A0A00]/10" />
    </div>
  );
}
