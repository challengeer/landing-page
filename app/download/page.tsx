import { Metadata } from 'next'
import Button from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Download Challengeer Beta',
    description: 'Download the beta version of Challengeer app',
}

export default function DownloadPage() {
    const downloadUrl = 'https://challengeer.s3.eu-north-1.amazonaws.com/apps/beta.apk'

    return (
        <main className="flex-1 py-24 md:py-32">
            <div className="max-w-screen-lg mx-auto px-6 md:px-10 w-full items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-8 text-center">Download Challengeer Beta</h1>
                <a href={downloadUrl} download="challengeer-beta.apk" className="inline-block">
                    <Button variant="primary">
                        <DownloadIcon className="w-5 h-5 mr-1" />
                        Download Beta Version
                    </Button>
                </a>
                <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                    Version: Beta 1.0.0
                </p>
            </div>
        </main>
    )
} 