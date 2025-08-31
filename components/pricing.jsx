"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
// Commented out the problematic PricingTable import
// import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        {/* Temporary replacement for PricingTable */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-emerald-100 mb-8">
            Choose the perfect plan for your healthcare needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
              <h3 className="text-xl font-semibold text-emerald-100 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-white mb-4">Free</div>
              <ul className="text-emerald-100 space-y-2 text-left">
                <li>✓ Book appointments</li>
                <li>✓ Video consultations</li>
                <li>✓ Basic health records</li>
              </ul>
              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-emerald-100 mb-2">Premium</h3>
              <div className="text-3xl font-bold text-white mb-4">$29<span className="text-lg">/mo</span></div>
              <ul className="text-emerald-100 space-y-2 text-left">
                <li>✓ Everything in Basic</li>
                <li>✓ Priority booking</li>
                <li>✓ Extended consultations</li>
                <li>✓ Health analytics</li>
              </ul>
              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition-colors">
                Coming Soon
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
              <h3 className="text-xl font-semibold text-emerald-100 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-white mb-4">Custom</div>
              <ul className="text-emerald-100 space-y-2 text-left">
                <li>✓ Everything in Premium</li>
                <li>✓ Custom integrations</li>
                <li>✓ Advanced analytics</li>
                <li>✓ 24/7 support</li>
              </ul>
              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pricing;