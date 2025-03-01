import { Bot, Settings2, SquareTerminal, User2 } from "lucide-react";

export const MENUITEM = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            langid: "dashboard",
            url: "/app/dashboard",
            icon: SquareTerminal,
        },
        {
            title: "Siswa",
            langid: "siswa",
            url: "/app/students",
            icon: User2,
        },
        {
            title: "Master Data",
            langid: "masterdata",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                    langid: "test"
                },
            ],
        },
        {
            title: "Setting",
            langid: "pengaturan",
            icon: Settings2,
            items: [
                {
                    title: "Data Sekolah",
                    url: "/app/school",
                    langid: "datasekolah"
                },
            ],
        },
    ]
}
