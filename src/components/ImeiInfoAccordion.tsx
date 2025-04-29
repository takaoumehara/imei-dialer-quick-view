
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const ImeiInfoAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="what-is-imei">
        <AccordionTrigger className="text-sm">What is an IMEI number?</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-gray-600">
            IMEI (International Mobile Equipment Identity) is a unique 15-digit code used to identify mobile devices.
            Think of it as your phone's fingerprint - no two active devices share the same IMEI.
          </p>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="why-check">
        <AccordionTrigger className="text-sm">Why check your IMEI?</AccordionTrigger>
        <AccordionContent>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Verify that your phone is genuine</li>
            <li>Register your device with your carrier</li>
            <li>Report a stolen phone (police and carriers use IMEI to track/block devices)</li>
            <li>Check warranty status or service history</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="how-it-works">
        <AccordionTrigger className="text-sm">How does this work?</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-gray-600">
            This button dials the universal IMEI request code (*#06#). When dialed, your phone will automatically display its IMEI number(s) on screen without making an actual call. This works on virtually all mobile phones and doesn't require any special permissions.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ImeiInfoAccordion;
