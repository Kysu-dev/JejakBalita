import { getInjection } from "@/di/container";

export default async function Home() {
  const getAppInfo = getInjection("IGetAppInfoController");
  const appInfo = await getAppInfo();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          {appInfo.architecture}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {appInfo.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          {appInfo.description}
        </p>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          Data pada halaman ini mengalir melalui controller, use case, dan
          repository yang di-resolve oleh dependency injection container.
        </div>
      </section>
    </main>
  );
}
