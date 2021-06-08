import { AnnotationIcon, ChevronRightIcon, QuestionMarkCircleIcon, ShoppingCartIcon } from "@heroicons/react/outline"

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <div className="w-full bg-gray-500 flex flex-row justify-between mb-16 items-center">
                <div className="w-1/3 flex items-center cursor-pointer justify-center border-r-2 border-white h-10 text-center text-white text-lg font-bold mb-4 mt-4 pb-4">
                    <ShoppingCartIcon className="mr-4 h-6"/>
                    <h3>How to shop</h3>
                </div>
                <div className="w-1/3 flex items-center cursor-pointer justify-center border-r-2 border-white h-10 text-center text-white text-lg font-bold mb-4 mt-4 pb-4">
                    <QuestionMarkCircleIcon className="h-6 mr-4"/>
                   <h1 className="hidden f-575:flex">Frequenly Asked Questions?</h1>
                   <h1 className="flex f-575:hidden">FAQs?</h1>
                </div>
                <div className="w-1/3 flex items-center cursor-pointer justify-center  h-10 text-center text-white text-lg font-bold mb-4 mt-4 pb-4">
                   <AnnotationIcon className="h-6 mr-4"/>
                    <h3>Need Help</h3>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/3">
                <h2 className="text-center mb-6 text-lg">
                    Never miss a thing
                </h2>
                <p className="text-center mb-10 text-md">
                    Sign up for tailored new arrivals, exciting launches and exclusive early access
                </p>
                <form className="flex flex-col justify-center w-full">
                    <div className="flex flex-row items-center mb-9 justify-center">
                        <div className="w-1/2 flex flex-row justify-center items-center">
                            <label className="mr-4 text-bold" > Women </label>
                            <input type="checkbox" name="Women" id="" />
                        </div>
                        
                        <div className="w-1/2 flex pl-9 flex-row justify-center items-center">
                            <label className="mr-4 text-bold"  > Men </label>
                            <input type="checkbox" name="Men" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center  justify-center">
                        <input className="w-full bg-none rounded-md mb-6 h-12 border-2 border-gray-500 text-start pl-4 flex items-center" type="email" name="" placeholder="Your email" id="" />
                        <button className="bg-black text-white w-full h-12 rounded-md items-center justify-center flex flex-row">
                            <h2 className="text-center text-white mr-8 font-bolder f-575:text-2xl text-md">Sign Me Up</h2>
                            <ChevronRightIcon className="h-6 mr-4"/>
                        </button>

                        <p className="mt-2 text-center text-xs">
                            By signing in you agree to the <span className="underline cursor-pointer">Terms and conditions</span> and <span className="underline cursor-pointer">Privacy Policy.</span> Click unsubscribe to opt out
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer
