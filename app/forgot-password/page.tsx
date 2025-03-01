"use client"

import GuestLayout from '@/components/layouts/guest-layout'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';
import { updatePasswordSchema } from '@/resources/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export default function ForgotPasswordPage() {
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter();
    const t = useTranslations('auth')
    const form = useForm<z.infer<typeof updatePasswordSchema>>({
        resolver: zodResolver(updatePasswordSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof updatePasswordSchema>) {
        await authClient.forgetPassword({
            email: values.email,
            redirectTo: "/reset-password"
        }, {
            onRequest: () => {
                setLoading(true)
            }, 
            onSuccess: () => {
                toast.success(t('silahkancekemail'))
                setLoading(false)
                router.push('/reset-password')
            }
        })
    }
  return (
    <GuestLayout type='forgotpassword'>
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
                    <Button type="submit" className='w-full cursor-pointer'>{loading ? t('loading') : t('kirim')}</Button>
                </form>
            </Form>
    </GuestLayout>
  )
}
