import type { AuthLayoutProps } from '@/types';
export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <main className="flex min-h-svh items-center justify-center bg-[#F5F7FA] px-4 py-12">
            <div className="w-full max-w-[420px] space-y-8">
                {/* Brand */}
                <div className="flex items-center justify-center gap-3">
                    <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1">
                        <img
                            src="/logopt.jpg"
                            alt="PT Nusakarya Digital Indonesia"
                            className="size-full object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-lg font-semibold tracking-tight text-[#1E3A5F]">
                            Business Documents Management System
                        </p>
                        <p className="text-xs text-slate-500">
                            Sistem Informasi Manajemen Dokumen Bisnis Terpusat
                        </p>
                    </div>
                </div>

                {/* Authentication Card */}
                <section className="rounded-xl border border-slate-200 bg-white p-7 text-slate-900 shadow-sm sm:p-9">
                    <div className="mb-7 space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                            {title}
                        </h1>

                        <p className="text-sm leading-6 text-slate-500">
                            {description}
                        </p>
                    </div>

                    {children}
                </section>

                {/* Footer */}
                <footer className="space-y-2 text-center">
                    <p className="text-xs text-slate-500">
                        Authorized personnel only.
                    </p>

                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} PT Nusakarya Digital Indonesia. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    );
}