import SideNav from "@/app/ui/dashboard/sideNav";

{/* PPR (Partial Prerendering) https://nextjs.org/learn/dashboard-app/partial-prerendering
1. Install latest Next.js Canary version:
    `npm install next@canary`
2. Add the following in next.config.mjs within the curly braces:
    experimental: {
        ppr: 'incremental',
    },
3. Uncomment from here:
    export const experimental_ppr = true; // requires Next.js canary version
*/}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={"flex h-screen flex-col md:flex-row md:overflow-hidden"}>
            <div className={"w-full flex-none md:w-64"}>
                <SideNav />
            </div>
            <div className={"flex-grow p-6 md:overflow-y-auto md:p-12"}>{children}</div>
        </div>
    );
}