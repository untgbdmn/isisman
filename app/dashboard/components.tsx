import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";

interface CardDashboardProps {
    icon?: IconType | LucideIcon | undefined
    label: string
    value: string | number;
    lastUpdated?: string | number | undefined
}
export function CardDashboard({ icon: Icon, label, value, lastUpdated }: CardDashboardProps) {
    const t = useTranslations("Dashboard")
    return (
        <div className='bg-sidebar-primary text-white shadow rounded-sm p-3'>
            <div className='flex items-center justify-between'>
                <h1 className='text-sm font-medium'>{label}</h1>
                {Icon && <Icon className='size-5' />}
            </div>
            <div className='flex flex-col itesm-center justify-start'>
                <h1 className='text-2xl font-bold'>{value}</h1>
                <span className='text-xs font-normal'>{t('lastupdated')} : {lastUpdated}</span>
            </div>
        </div>
    )
}

interface DashboardHeaderProps {
    user?: string | undefined
    className?: string
}
export function DashboardHeader({ user = "Admin", className }: DashboardHeaderProps) {
    const t = useTranslations("Greetings")
    const newDate = new Date();
    const hours = newDate.getHours()

    function getGreetings(jam: string | number) {
        if (typeof jam === 'number' && jam >= 3 && jam < 11) {
            return 'selamatpagi';
        } else if (typeof jam === 'number' && jam >= 11 && jam < 15) {
            return 'selamatsiang';
        } else if (typeof jam === 'number' && jam >= 15 && jam < 18) {
            return 'selamatsore';
        } else {
            return 'selamatmalam';
        }
    }

    return (
        <div className={cn('', className)}>
            <span className="text-xs font-normal text-neutral-300">iSisman Admin Panel</span>
            <h1 className="font-black text-2xl capitalize">{t(getGreetings(hours))},  <span className="text-sidebar-primary">{user}</span></h1>
            <h2 className="capitalize">{t('selamatmenikmati')}</h2>
        </div>
    )
}
