"use client"

import GuestLayout from '@/components/layouts/guest-layout'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { registerSchema } from '@/resources/schemas/authSchema'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'


export default function SignUpPage() {
    const router = useRouter();
    const t = useTranslations("auth")

    const [loading, setLoading] = React.useState<boolean>(false)

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullname: "",
            username: "",
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        await authClient.signUp.email({
            email: values.email,
            name: values.fullname,
            password: values.password,
            callbackURL: "/sign-in"
        }, {
            onRequest: () => {
                setLoading(true);
            },
            onSuccess: () => {
                toast.success(t('success'))
                router.push('/sign-in')
            },
            onError: (error) => {
                console.log(error)
                toast.error(t(error.response))
                router.push('/sign-up')
            }
        })
    }

    return (
        <GuestLayout type="signin">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 lg:grid grid-cols-2 flex flex-col md:grid md:grid-cols-2  gap-x-3 gap-y-1">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('namalengkap')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jhon Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('username')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jhon Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="jhondoe@mail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('password')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className='w-full cursor-pointer col-span-2' type="submit">
                        {loading ? "Submiting..." : "Submit"}
                    </Button>
                </form>
                <Button className='w-full mt-3 cursor-pointer' variant="outline">Google</Button>
                <div className='flex items-center text-sm text-center justify-center py-3'>{t('sudahpunyaakun')} <span className='text-sidebar-primary cursor-pointer' onClick={() => router.push('/sign-in')}>{t('masukakundisini')}</span></div>
            </Form>
        </GuestLayout>
    )
}
