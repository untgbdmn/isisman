import { Bot, SquareTerminal, User2 } from "lucide-react";

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
            url: "/dashboard",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Siswa",
            langid: "siswa",
            url: "/students",
            icon: User2,
            isActive: true,
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
        }
    ]
}
