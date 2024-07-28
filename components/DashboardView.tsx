import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function DashboardView() {
  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <main className="flex-1 px-4 py-6 sm:px-6 md:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="rounded-full bg-[#ff9b00] p-3 text-white">
              <Instagram className='h-6 w-6'/>
              </div>
              <div>
                <CardTitle>TikTok</CardTitle>
                <CardDescription>Generate TikTok content</CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Button>Generate</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="rounded-full bg-[#ff0000] p-3 text-white">
                <Youtube className="h-6 w-6"/>
              </div>
              <div>
                <CardTitle>YouTube</CardTitle>
                <CardDescription>Generate YouTube content</CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Button>Generate</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="rounded-full bg-[#e1306c] p-3 text-white">
              <Instagram className='h-6 w-6'/>
              </div>
              <div>
                <CardTitle>Instagram</CardTitle>
                <CardDescription>Generate Instagram content</CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Button>Generate</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <div className="rounded-full bg-[#1da1f2] p-3 text-white">
              <Twitter className='h-6 w-6'/>
              </div>
              <div>
                <CardTitle>Twitter</CardTitle>
                <CardDescription>Generate Twitter content</CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Button>Generate</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mx-auto mt-10 max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-background p-4">
                  <div className="text-2xl font-bold">10,000</div>
                  <div className="text-sm text-muted-foreground">Total Content Generated</div>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <div className="text-2xl font-bold">5,000</div>
                  <div className="text-sm text-muted-foreground">Total Engagements</div>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <div className="text-2xl font-bold">1,000</div>
                  <div className="text-sm text-muted-foreground">Total Conversions</div>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">Content Approval Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
