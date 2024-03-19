"use client"
import Router from "next/router"
import Link from "next/link"


export default function Navigation() {
    let z = 0;
    
    const ToggleClose = (e: any): void => {
            const i = e.target.nextSibling.children[0].children
            const div = e.target.nextSibling.children[0]
            const main = e.target.nextSibling
            i[0].classList.replace("left-[70%]","left-[44%]")
            i[0].classList.replace( "top-[15%]","top-[46%]")
            setTimeout(() => {
                i[1].classList.replace( "left-[85%]","left-[44%]")
                i[1].classList.replace( "top-[45%]","top-[46%]")
                setTimeout(() => {
                    i[2].classList.replace( "left-[70%]","left-[44%]")
                    i[2].classList.replace("top-[75%]","top-[46%]")
                    setTimeout(() => {
                        i[3].classList.replace("left-[35%]","left-[44%]")
                        i[3].classList.replace( "top-[85%]","top-[46%]")
                        setTimeout(() => {
                            i[4].classList.replace("left-[10%]","left-[44%]")
                            i[4].classList.replace( "top-[65%]","top-[46%]")
                            setTimeout(() => {
                                i[5].classList.replace("left-[5%]","left-[44%]")
                                i[5].classList.replace( "top-[35%]","top-[46%]")
                                setTimeout(() => {
                                    i[6].classList.replace("left-[30%]","left-[44%]")
                                    i[6].classList.replace( "top-[10%]","top-[46%]")
                                    setTimeout(() => {
                                        // i[0].classList.remove("animate-spin-slow")
                                        // i[1].classList.remove("animate-spin-slow")
                                        // i[2].classList.remove("animate-spin-slow")
                                        // i[3].classList.remove("animate-spin-slow")
                                        // i[4].classList.remove("animate-spin-slow")
                                        // i[5].classList.remove("animate-spin-slow")
                                        // i[6].classList.remove("animate-spin-slow")
                                        main.classList.remove("animate-spin-slow")

                                        setTimeout(() => {
                                            e.target.parentNode.classList.add("rounded-full")
                                            setTimeout(() => {
                                                e.target.parentNode.classList.replace("bg-dark", "bg-transparent")
                                                setTimeout(() => {
                                                    e.target.parentNode.classList.replace("top-0", "top-1/2")
                                                    setTimeout(() => {
                                                        e.target.parentNode.classList.replace("w-full", "w-fit")
                                                        e.target.parentNode.classList.replace("h-full", "h-fit")
                                                        
                                                    }, 600);
                                                    
                                                    setTimeout(() => {
                                                        e.target.parentNode.classList.replace("right-0", "right-1")
                                                        e.target.classList.replace("icofont-close-circled", "icofont-waiter-alt")
                                                        e.target.classList.replace("text-default", "text-default-gray")
                                                        e.target.classList.replace("hover:text-default", "hover:text-default-alt")
                                                        e.target.classList.remove("p-2", "bg-default-gray")
                                                    }, 900);
                                                }, 600);
                                                
                                            },600)
                                                    
                                        }, 200);
            

                                    }, 250);
                                },250)
                            },250)
                        },250)
                    },250)
                },250)
        }, 250)
        

        z = 0;
    }
    const ToggleMenu = (e: any): void => {
        if (z === 0) {
            e.target.parentNode.classList.replace("right-1", "right-0")
            setTimeout(() => {
                e.target.parentNode.classList.replace("top-1/2", "top-0")
                e.target.parentNode.classList.replace("w-fit", "w-full")
                e.target.parentNode.classList.replace("h-fit", "h-full")
                setTimeout(() => {
                    e.target.parentNode.classList.replace("bg-transparent", "bg-dark")
                    
                }, 600);
                
                
                setTimeout(() => {
                    e.target.classList.replace("icofont-waiter-alt", "icofont-close-circled")
                    e.target.classList.replace("text-default-gray", "text-default")
                    e.target.classList.replace("hover:text-default", "hover:text-default-alt")
                    e.target.classList.add("p-2", "bg-default-gray")
                    e.target.parentNode.classList.remove("rounded-full")
                    setTimeout(() => {
                        const i = e.target.nextSibling.children[0].children
            const div = e.target.nextSibling.children[0]
            const main = e.target.nextSibling
            i[0].classList.replace("left-[44%]", "left-[70%]")
            i[0].classList.replace("top-[46%]", "top-[15%]")
            setTimeout(() => {
                i[1].classList.replace("left-[44%]", "left-[85%]")
                i[1].classList.replace("top-[46%]", "top-[45%]")
                setTimeout(() => {
                    i[2].classList.replace("left-[44%]", "left-[70%]")
                    i[2].classList.replace("top-[46%]", "top-[75%]")
                    setTimeout(() => {
                        i[3].classList.replace("left-[44%]", "left-[35%]")
                        i[3].classList.replace("top-[46%]", "top-[85%]")
                        setTimeout(() => {
                            i[4].classList.replace("left-[44%]", "left-[10%]")
                            i[4].classList.replace("top-[46%]", "top-[65%]")
                            setTimeout(() => {
                                i[5].classList.replace("left-[44%]", "left-[5%]")
                                i[5].classList.replace("top-[46%]", "top-[35%]")
                                setTimeout(() => {
                                    i[6].classList.replace("left-[44%]", "left-[30%]")
                                    i[6].classList.replace("top-[46%]", "top-[10%]")
                                    setTimeout(() => {
                                        // i[0].classList.add("animate-spin-slow")
                                        // i[1].classList.add("animate-spin-slow")
                                        // i[2].classList.add("animate-spin-slow")
                                        // i[3].classList.add("animate-spin-slow")
                                        // i[4].classList.add("animate-spin-slow")
                                        // i[5].classList.add("animate-spin-slow")
                                        // i[6].classList.add("animate-spin-slow")
                                        main.classList.add("animate-spin-slow")
                                    }, 250);
                                },250)
                            },250)
                        },250)
                    },250)
                },250)
            }, 250)
                    }, 700);
                }, 700);
            },600)
            
            z = 1;
        }
        else {
            ToggleClose(e)
        }
    }
    return (
        <>
            <nav className="bg-black min-h-16 h-fit gap-4 flex justify-between px-8">
                <div className="logo my-auto">
                    <h1 className="text-default text-2xl font-lobster">MugenSoro</h1>
                </div>
                <div className="search my-auto w-1/2">
                    <input className="w-full rounded-full px-4 py-2 placeholder:text-default outline-none text-default-gray" type="text" name="search" placeholder="Products..."/>
                </div>
                <div className="my-auto flex gap-6">
                    <button type="button" className="text-white text-xl rounded-lg tracking-wide font-semibold bg-default px-4 py-2">Become a Seller</button>
                </div>
            </nav>

            {/* <div className="menu fixed right-1 top-1/2 flex justify-center items-center transition-all duration-700">
                <i onClick={ToggleMenu} className="icofont-waiter-alt text-5xl text-default-gray hover:text-default transition-all duration-300 cursor-pointer"></i>
            </div> */}

            {/* overflow-hidden fixed right-0 top-0 w-full h-full bg-dark flex justify-center items-center transition-all duration-700 */}
            <div className="menu overflow-hidden fixed right-1 top-1/2 bg-transparent h-fit w-fit rounded-full flex justify-center items-center transition-all duration-700">
                <i onClick={ToggleMenu} className="icofont-waiter-alt rounded-full bg-default z-10 relative text-5xl text-white hover:text-default-alt transition-all duration-300 cursor-pointer"></i>
                <div className="h-96 w-96 overflow-hidden flex flex-wrap rounded-full absolute">
                    <div className="opt relative w-full h-full rounded-full">
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-user"></i>
                        </div>
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-heart-alt"></i>
                        </div>
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-package"></i>
                        </div>
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-ui-cart"></i>
                        </div>
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-tags"></i>
                        </div>
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-bell-alt"></i>
                        </div>
                        <div className="absolute transition-all duration-300 w-fit h-fit left-[44%] top-[46%]">
                            <i className="text-white rounded-full transition-colors duration-300 cursor-pointer hover:bg-default-alt p-2 border-2 bg-default text-3xl icofont-logout"></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}