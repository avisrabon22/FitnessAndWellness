import { NavBar } from "./NavBar"

export const DashboardComponent = ()=> {
    return <>
    <NavBar/>
    <div className="container mx-auto">
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg">
                    <h1 className="text-2xl font-bold text-center">Calories Gain</h1>
                    <p className="text-center text-3xl font-bold mt-4">100</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <h1 className="text-2xl font-bold text-center">Goal Completed</h1>
                    <p className="text-center text-3xl font-bold mt-4">100</p>
                </div>
               
            </div>
        </div>
    </div>
    </>
}