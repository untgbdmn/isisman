"use client"


import GuestLayout from '@/components/layouts/guest-layout'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '@/resources/schemas/authSchema'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import authStore from '@/resources/stores/authStore'


export default function SigninPage() {
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter();
    const t = useTranslations('auth')
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        await authClient.signIn.email({
            email: values.email,
            password: values.password,
            callbackURL: "/dashboard"
        }, {
            onRequest: () => {
                setLoading(true);
            },
            onSuccess: async (response) => {
                authStore.getState().login(response?.data?.token, response?.data?.user);
                try {
                    await router.push('/dashboard');
                    toast.success(t('success'));
                } catch (error) {
                    console.error('Navigation failed:', error);
                } finally {
                    setLoading(false);
                }
                setLoading(false)
            },
            onError: (error) => {
                console.log(error)
                toast.error(t(error.response))
                router.push('/sign-in')
            }
        });
    }
    return (
        <GuestLayout type="signin" className='mx-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" type='email' {...field} />
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
                                <div className='flex items-center justify-between'>
                                    <FormLabel>{t('password')}</FormLabel>
                                    <span className='underline cursor-pointer text-sm' onClick={() => router.push('/forgot-password')}>{t('lupapasword')}</span>
                                </div>
                                <FormControl>
                                    <Input placeholder="" type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-full cursor-pointer'>{loading ? "Loading..." : "Login"}</Button>
                </form>

                <div className='flex flex-col items-center py-3 gap-1'>
                    <Button type="button" className='w-full cursor-pointer' variant="outline">Google</Button>
                    <div className='flex items-center text-sm'>{t('belumpunyaakun')}
                        <span className='text-sidebar-primary cursor-pointer' onClick={() => router.push('/sign-up')}>{t('daftardisini')}</span>
                    </div>
                </div>
            </Form>
        </GuestLayout>
    )
}
