import Header from "./Home/Header"

export default function Layout({children}){

    return(
        <div className=" max-w-[1536px] flex justify-center flex-col mx-auto">
            <Header/>
            <div>
                {children}
            </div>
        </div>
    )

}