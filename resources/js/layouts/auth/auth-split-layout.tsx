
import { Link } from '@inertiajs/react';
import { FileCheck2, ShieldCheck, Workflow } from 'lucide-react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            {/* Branding Panel */}
            <section className="relative hidden overflow-hidden bg-[#172B4D] p-12 text-white lg:flex lg:flex-col lg:justify-between">
                <div className="absolute -right-32 -top-32 size-[420px] rounded-full border border-white/10" />
                <div className="absolute -right-16 -top-16 size-[290px] rounded-full border border-white/10" />
                <div className="absolute -bottom-48 -left-32 size-[500px] rounded-full bg-white/[0.04]" />

                <Link
                    href={home()}
                    className="relative z-10 flex items-center gap-3"
                >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-white/10">
                        <FileCheck2 className="size-6 text-white" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold tracking-wide">BDMS</p>
                        <p className="text-xs text-blue-100">
                            Business Documents Management System
                        </p>
                    </div>
                </Link>

                <div className="relative z-10 max-w-lg space-y-8">
                    <div className="space-y-4">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200">
                            Document Management Platform
                        </p>
                        <h1 className="text-4xl leading-tight font-semibold tracking-tight xl:text-5xl">
                            Manage documents.
                            <br />
                            Control workflows.
                            <br />
                            Maintain accountability.
                        </h1>
                        <p className="max-w-md text-base leading-7 text-blue-100/80">
                            A centralized platform for managing business
                            documents, approval processes, and document
                            records across your organization.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-white/10">
                                <Workflow className="size-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">
                                    Structured Approval Workflow
                                </p>
                                <p className="text-xs text-blue-100/70">
                                    Clear and traceable approval processes
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-white/10">
                                <ShieldCheck className="size-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">
                                    Secure Document Records
                                </p>
                                <p className="text-xs text-blue-100/70">
                                    Controlled access and reliable records
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="relative z-10 text-xs text-blue-100/60">
                    © {new Date().getFullYear()} BDMS. All rights reserved.
                </p>
            </section>

            {/* Login Form Panel */}
            <section className="flex min-h-svh items-center justify-center bg-background px-6 py-12">
                <div className="w-full max-w-md space-y-8">
                    <Link
                        href={home()}
                        className="flex items-center gap-3 lg:hidden"
                    >
                        <div className="flex size-10 items-center justify-center rounded-xl bg-[#172B4D]">
                            <FileCheck2 className="size-5 text-white" />
                        </div>
                        <span className="text-lg font-semibold tracking-wide">
                            BDMS
                        </span>
                    </Link>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            {title}
                        </h2>
                        <p className="text-sm leading-6 text-muted-foreground">
                            {description}
                        </p>
                    </div>

                    {children}

                    <p className="text-center text-xs text-muted-foreground">
                        Authorized personnel only.
                    </p>
                </div>
            </section>
        </div>
    );
}