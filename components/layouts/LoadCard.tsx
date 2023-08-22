import { Card, Skeleton } from "@nextui-org/react"



export const LoadCard = () => {
    return (
        <Card className=" flex flex-col grow w-full h-full space-y-5  w-[155.5px] sm:w-[225px]" radius="lg">
            <Skeleton className="w-full h-[155px] sm:w-full sm:h-[212px]  rounded-lg">
                <div className="h-24  rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 p-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    )
}