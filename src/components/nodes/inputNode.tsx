import { Idea } from '@/shared/types/idea.type';

import React, { useEffect, useState } from 'react';

import { HuggingFaceInference } from "@langchain/community/llms/hf";


import { StructuredOutputParser } from "langchain/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";
import { OpenAI } from "@langchain/openai";
import { z } from "zod";

import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import TopicListNode from '@/components/nodes/topicListNode';


export default function inputNode() {

    const [inputValue, setInputValue] = useState('');
    const [ideas, setIdeas] = useState<Idea[]>([]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const generateText = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const parser = StructuredOutputParser.fromZodSchema(
        //     z.array(
        //         z.object({
        //             fields: z.object({
        //                 Title: z
        //                     .string()
        //                     .describe("Title of the topic")
        //             })
        //         })
        //     ).describe("An array of Titles, each representing a reagrding topic to the question ")
        // );

        // const chain = RunnableSequence.from([
        //     PromptTemplate.fromTemplate(
        //         `break down the topic Generative ai influencers. 
        //         Give me 5 Headlines without further description. 
        //         Use maximum 4 Words.
        //        \n{format_instructions}\n{question}`
        //     ),
        //     new OpenAI({
        //         openAIApiKey: import.meta.env.VITE_OPENAI,
        //         modelName: "gpt-4",
        //         temperature: 0,
        //     }),
        //     parser,
        // ]);
        // const response = await chain.invoke({
        //     question: inputValue,
        //     format_instructions: parser.getFormatInstructions(),
        // });
        // setIdeas(response);
        setIdeas([
            {
                "fields": {
                    "Title": "AI-Driven Ad Creation"
                }
            },
            {
                "fields": {
                    "Title": "Generative AI in Marketing"
                }
            },
            {
                "fields": {
                    "Title": "AI and Creative Advertising"
                }
            },
            {
                "fields": {
                    "Title": "Automated Ad Design"
                }
            },
            {
                "fields": {
                    "Title": "AI in Ad Innovation"
                }
            }
        ])
    }


    useEffect(() => {
        console.log(ideas);
    }, [ideas]);



    return (
        <div className="input-Node">
            {ideas.length === 0 ? (
                <Card className='p-2'>
                    <CardContent className='p-0'>
                        <form action="submit" className='flex gap-1' onSubmit={generateText}>
                            <Input id="text" name="text" onChange={handleInputChange} placeholder='Enter a topic you want to explore...' className="nodrag w-[360px]" />
                            <Button className='shadow-none p-2' type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            ) : (
                <TopicListNode ideas={ideas} />
            )}
        </div>
    );
}
