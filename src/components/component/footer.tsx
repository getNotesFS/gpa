import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] dark:bg-transparent px-6 py-4 mt-4 w-full max-w-7xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage alt="Author's avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-xs">
            <div className="font-medium">SM</div>
            <div className="text-gray-500 dark:text-gray-400">contacto@sfmarmol.com</div>
          </div>
        </div>
        <div className="flex gap-2">
          
          <Button className="text-sm" variant="link">
            <a href="#" rel="noopener noreferrer" target="_blank">
              <FaGithub className="w-4 h-4" />
            </a>
          </Button>
          <Button className="text-sm" variant="link">
            <a href="#" rel="noopener noreferrer" target="_blank">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">© SMDev. All rights reserved.</div>
    </footer>
  )
}
