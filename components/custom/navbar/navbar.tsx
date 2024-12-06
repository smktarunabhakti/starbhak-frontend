import { Input } from "@/components/ui/input"
import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar"

export function Navbar(){
    return(
        <>
        <div className="inline-flex py-3">
            <Input type="text" placeholder="search"/>
            <div className="float-right absolute right-20">
                <div className="inline-flex opacity-0 lg:opacity-100">
                        <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                        </Avatar>    
                        <div className="ml-5">
                            <p className="text-gray-600 font-semibold">Lorem</p>
                            <p className="text-xs text-gray-600">Admin</p>    
                        </div>
                </div>
            </div>
        </div>    
        </>
    )
}