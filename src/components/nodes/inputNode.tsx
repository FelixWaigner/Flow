import { memo, useState, useCallback } from "react";
import { NodeProps, useReactFlow } from "@xyflow/react";

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { v4 as uuidv4 } from 'uuid';

function InputNode(id: NodeProps) {

    var reactFlow = useReactFlow();

    const [inputText, setInputText] = useState("");

    const createTopicListNode = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        reactFlow.addNodes(
            {
                id: uuidv4(),
                data: { text: inputText },
                type: 'topicListNode',
                position: {
                    x: id.positionAbsoluteX,
                    y: id.positionAbsoluteY
                },
            }
        );

        handleNodeDelete(id);
    }, [inputText, reactFlow]);

    const handleNodeDelete = (nodeId: NodeProps) => {
        reactFlow.deleteElements({
            nodes: [nodeId]
        })
    }

    return (
        <div className="input-Node">
            <Card className='p-2'>
                <CardContent className='p-0'>
                    <form action="submit" onSubmit={createTopicListNode} className='flex gap-1' >
                        <Input id="text" name="input" onChange={(e) => setInputText(e.target.value)} placeholder='Enter a topic you want to explore...' className="nodrag w-[360px]" />
                        <Button className='shadow-none p-2' type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default memo(InputNode);