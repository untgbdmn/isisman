"use client"

import GuestLayout from '@/components/layouts/guest-layout'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { resetPasswordSchema } from '@/resources/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function ResetPasswordPage() {
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter();
    const t = useTranslations('auth')
    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
        console.log(values)
    }
  return (
    <GuestLayout type='resetpassword'>
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="type a password" type='password' {...field} />
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
