'use client'


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from "ai/react"
import { useEffect } from "react"
import { ScrollArea } from "./ui/scroll-area"


export interface ChatProps {}


export function Chat(props: ChatProps){

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    })
    return (
        <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Manoel Gome AI</CardTitle>
          <CardDescription>Send a message to Manoel Gomeeeeeees</CardDescription>
        </CardHeader>
        <CardContent >
            <ScrollArea className="h-[600px] w-full space-y-4">
                {messages.map(message => {
                    return (
                        <div key={message.id} className="flex gap-3 text-flate-600 text-sm">
                            {message.role === 'user' && (
                                <Avatar>
                                <AvatarFallback>EM</AvatarFallback>
                                <AvatarImage src='https://avatars.githubusercontent.com/u/47525873?v=4'></AvatarImage>
                                </Avatar>       
                            )}
                            {message.role === 'assistant' && (
                                <Avatar>
                                <AvatarFallback>GM</AvatarFallback>
                                <AvatarImage src='https://img.quizur.com/f/img63ab0dceeeefc0.40715013.jpg?lastEdited=1672154627'></AvatarImage>
                                </Avatar>       
                            )}
                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-700">
                                    {message.role === 'user' ? 'Usuário' : 'AI'}
                                </span>
                                {message.content}
                            </p>
                        </div>
                    )
                })}
            </ScrollArea>
        </CardContent>
        <CardFooter >
            <form className='space-x-2 flex gap' onSubmit={handleSubmit}>
                <Input placeholder='How can i help you?' value={input} onChange={handleInputChange} ></Input>
                <Button type='submit'>Send</Button>
          </form>
        </CardFooter>
      </Card>
      
    )
}