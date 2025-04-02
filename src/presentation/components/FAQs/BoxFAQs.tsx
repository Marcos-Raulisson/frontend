import * as Accordion from "@radix-ui/react-accordion";
import { items } from "./data/index";
import Image from "next/image";
import Plus from "@/src/presentation/components/FAQs/assets/Plus.svg"

export function BoxFAQs() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-7">
      <div className="lg:w-1/3 lg:py-[32px] text-[14px] font-medium lg:text-base">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#36485C] lg:text-[42px] lg:leading-[58px]">
          Let's clarify some of your questions
        </h1>
        <p className="pb-[24px] text-[#36485C] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="lg:w-2/3">
        <Accordion.Root type="single" defaultValue="item-1" collapsible className="flex flex-col gap-y-4">
            {items.map((item, index)=> (
                <div key={index}>
                    <Accordion.Item value={`${index + 1}`} className="bg-[#E3F1FF] p-[16px] rounded-[8px]">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex w-full items-center justify-between">
                                <p className="text-left font-medium text-[#172026] lg:text-[18px]">{item.question}</p>
                                <span>
                                    <Image src={Plus} alt="plus" className="w-10 h-10 lg:w-6 lg:h-6"/>
                                </span>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="p-2 text-[#36485C] ">{item.answer}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                </div>
            ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
