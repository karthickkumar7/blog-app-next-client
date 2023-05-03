import Blog from '@/components/Blog';

export default function Home() {
    return (
        <div className="w-full h-screen">
            <main className="p-[10px] max-w-4xl mx-auto">
                <div className="space-y-[10px]">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </main>
        </div>
    );
}
