import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ type, collapsible, className, children, ...props }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    if (type === 'single') {
      if (collapsible && openItems.has(value)) {
        setOpenItems(new Set());
      } else {
        setOpenItems(new Set([value]));
      }
    }
  };

  return (
    <div className={className} {...props}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { 
          isOpen: openItems.has(child.props.value),
          onToggle: () => toggleItem(child.props.value)
        })
      )}
    </div>
  );
};

const AccordionItem = ({ className, children, value, isOpen, onToggle, ...props }) => (
  <div className={className} {...props}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { isOpen, onToggle })
    )}
  </div>
);

const AccordionTrigger = ({ className, children, isOpen, onToggle, ...props }) => (
  <div className="flex">
    <button
      className={`flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all hover:underline ${className}`}
      onClick={onToggle}
      {...props}
    >
      {children}
      <ChevronDown className={`h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  </div>
);

const AccordionContent = ({ className, children, isOpen, ...props }) => (
  <div 
    className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    {...props}
  >
    <div className={`pb-4 pt-0 ${className}`}>
      {children}
    </div>
  </div>
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };