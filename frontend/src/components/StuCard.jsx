import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { useAuth } from '@/auth/AuthContext';
const StuCard = () => {
    const { userData } = useAuth();
    const { reportCard } = userData;
    const { feeRec } = userData;
    return (
        <div className='grid grid-cols-2 gap-4 mt-4'>
            <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs'>
                <Card className="@container/card md:flex md:flex-row">
                      <CardHeader className="text-2xl font-extrabold">
                       <CardTitle > ReportCard</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 pt-4 sm:px-6 sm:pt-8 ">
                        <CardDescription>
                            <p className="@[540px]/card:block font-bold">
                                Division:  {reportCard[0]?.Division}
                            </p>
                            <p className="@[540px]/card:block">
                                Grade:{reportCard[0]?.Grade}
                            </p>
                            <p className="@[540px]/card:block">
                                Max Marks:{reportCard[0]?.max_marks}
                            </p>
                            <p className="@[540px]/card:block">
                                Total Marks:{reportCard[0]?.total_marks}
                            </p>
                            <p className="@[540px]/card:block">
                                percentage:{reportCard[0]?.percentage}%
                            </p>
                            <p className="@[540px]/card:block">
                                Teacher Remark:{reportCard[0]?.teacher_remark}
                            </p>
                            <p className="@[540px]/card:block">
                                School Reopen:{reportCard[0]?.sch_reopen.split("T")[0]}
                            </p>
                        </CardDescription>
                    </CardContent>

                </Card>
            </div>
            <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs'>
                <Card className="@container/card md:flex md:flex-row">
                    <CardHeader className="text-2xl font-extrabold">
                       <CardTitle > Feeinfo</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 pt-4 sm:px-6 sm:pt-8 ">
                        <CardDescription>
                            <p className="@[540px]/card:block font-bold">
                                Due Amount:  {feeRec[0]?.due_amount}
                            </p>
                            <p className="@[540px]/card:block">
                                Late Fee:{feeRec[0]?.late_fee}
                            </p>
                            <p className="@[540px]/card:block">
                                Paid Amount:{feeRec[0]?.paid_amount}
                            </p>
                            <p className="@[540px]/card:block">
                                Receipt Number
                                :{feeRec[0]?.receipt_number
                                }
                            </p>
                            <p className="@[540px]/card:block">
                                Remarks
                                :{feeRec[0]?.remarks
                                }
                            </p>
                            <p className="@[540px]/card:block">
                                 Signature:{feeRec[0]?.signature}
                            </p>
                            <p className="@[540px]/card:block">
                                Date:{feeRec[0]?.month.split("T")[0]}
                            </p>
                        </CardDescription>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default StuCard
