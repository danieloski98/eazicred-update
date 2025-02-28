import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function LoanCalculator() {
    const [activeTab, setActiveTab] = React.useState<'personal'|'sme'>("personal");

    return (
        <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-primaryColor">
                <CardContent className="p-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-primaryColor">Get Your Loan Estimate</h3>
                            <p className="text-sm text-muted-foreground">
                                See how much you can borrow and what your payments might be.
                            </p>
                        </div>
                        <Tabs defaultValue="personal">
                            <TabsList className="grid w-full grid-cols-2 w-full bg-gray-200 h-[60px]">
                                <TabsTrigger value="personal" className='flex-1'  >
                                    <Button onClick={() => setActiveTab('personal')} className={`${activeTab === 'personal' ? 'bg-primaryColor':'bg-white'} ${activeTab === 'personal' ? 'text-white':'text-black'} w-full hover:bg-white`}>Personal Loan</Button>
                                </TabsTrigger>
                                <TabsTrigger  value="sme" className='flex-1'  >
                                    <Button  onClick={() => setActiveTab('sme')} className={`${activeTab === 'sme' ? 'bg-primaryColor':'white'} ${activeTab === 'sme' ? 'text-white':'text-black'} w-full hover:bg-white`}>Business Loan</Button>
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="personal" className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="loan-amount" className="text-sm font-medium">
                                            Loan Amount: $25,000
                                        </label>
                                        <span className="text-sm text-muted-foreground">$100,000 max</span>
                                    </div>
                                    <Slider id="loan-amount" defaultValue={[25000]} max={100000} step={1000} className="py-2 bg-primaryColor" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="loan-term" className="text-sm font-medium">
                                            Loan Term: 36 months
                                        </label>
                                        <span className="text-sm text-muted-foreground">60 months max</span>
                                    </div>
                                    <Slider id="loan-term" defaultValue={[36]} max={60} step={12} className="py-2" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="credit-score" className="text-sm font-medium">
                                        Credit Score Range
                                    </label>
                                    <Select defaultValue="good">
                                        <SelectTrigger id="credit-score">
                                            <SelectValue placeholder="Select credit score range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="excellent">Excellent (720+)</SelectItem>
                                            <SelectItem value="good">Good (680-719)</SelectItem>
                                            <SelectItem value="fair">Fair (640-679)</SelectItem>
                                            <SelectItem value="poor">Poor (below 640)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full">Check Your Rate</Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    Checking your rate won't affect your credit score
                                </p>
                            </TabsContent>
                            <TabsContent value="sme" className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="business-loan-amount" className="text-sm font-medium">
                                            Loan Amount: $50,000
                                        </label>
                                        <span className="text-sm text-muted-foreground">$500,000 max</span>
                                    </div>
                                    <Slider
                                        id="business-loan-amount"
                                        defaultValue={[50000]}
                                        max={500000}
                                        step={10000}
                                        className="py-2"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="business-loan-term" className="text-sm font-medium">
                                            Loan Term: 24 months
                                        </label>
                                        <span className="text-sm text-muted-foreground">120 months max</span>
                                    </div>
                                    <Slider id="business-loan-term" defaultValue={[24]} max={120} step={12} className="py-2" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="business-type" className="text-sm font-medium">
                                        Business Type
                                    </label>
                                    <Select defaultValue="llc">
                                        <SelectTrigger id="business-type">
                                            <SelectValue placeholder="Select business type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sole">Sole Proprietorship</SelectItem>
                                            <SelectItem value="llc">LLC</SelectItem>
                                            <SelectItem value="corporation">Corporation</SelectItem>
                                            <SelectItem value="partnership">Partnership</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full">Check Your Rate</Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    Checking your rate won't affect your credit score
                                </p>
                            </TabsContent>
                        </Tabs>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoanCalculator
