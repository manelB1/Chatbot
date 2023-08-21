import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-50 items-center justify-center'> 
      <Card className='w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>Manoel Gome AI</CardTitle>
          <CardDescription>Send a message to Manoel Gomeeeeeees</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='flex gap-1 text-slate-600 text-sm'>
            <Avatar>
              <AvatarFallback>EM</AvatarFallback>
              <AvatarImage src='https://avatars.githubusercontent.com/u/47525873?v=4'></AvatarImage>
            </Avatar>
            <p className='mt-2 ml-1'>Whats your opinion about Javascript?</p>
          </div>

          <div>
          <Avatar>
              <AvatarFallback>EM</AvatarFallback>
              <AvatarImage src='https://img.quizur.com/f/img63ab0dceeeefc0.40715013.jpg?lastEdited=1672154627'></AvatarImage>
            </Avatar>
          </div>
        </CardContent>
        <CardFooter className='space-x-2'>
          <Input placeholder='How can i help you?'></Input>
          <Button type='submit'>Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
