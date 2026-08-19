import React from 'react';
import { Separator } from '@/components/ui/separator';
const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4 px-4 sm:px-6 lg:px-8 gap-6">
        <div className="flex flex-col pt-6">
          <h1 className="text-xl font-bold mx-auto">QuickLink</h1>
          <div className="">
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <h1 className="text-xl font-bold mx-auto">QuickLink</h1>
          <div>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <h1 className="text-xl font-bold mx-auto">QuickLink</h1>
          <div>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <h1 className="text-xl font-bold mx-auto">QuickLink</h1>
          <div>
            <p>home</p>
            <p>home</p>
            <p>home</p>
            <p>home</p>
          </div>
        </div>
      </div>
      <Separator className="my-6" />
    </footer>
  );
};

export default Footer;
