import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] dark:bg-transparent   py-4 mt-4 w-full max-w-7xl">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-3">
          <a href="mailto:contacto@sfmarmol.com" className="flex gap-2" title="Correo electrónico">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="Avatar de SM" title="Avatar representativo" src="/dragon-3.jpeg"  />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">SM</div>
              <div className="text-gray-500 dark:text-gray-400 break-all">contacto@sfmarmol.com</div>
            </div>
          </a>
        </div>
        <div className="flex gap-2">

          <Button className="text-sm" variant="link" name="link-github" aria-label="">
            <a href="https://github.com/getNotesFS" rel="noopener noreferrer" target="_blank" title="Visitar repositorio de GetNotesFS">
              <FaGithub className="w-4 h-4" />
            </a>
          </Button>
          <Button className="text-sm" variant="link" name="link-linkedin" aria-label="">
            <a href="https://www.linkedin.com/in/sfmarmol/" rel="noopener noreferrer" target="_blank" title="Visitar perfil de LinkedIn">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">© SMDev. All rights reserved.</div>
    </footer>
  )
}
