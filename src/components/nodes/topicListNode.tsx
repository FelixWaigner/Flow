import { memo, useCallback } from "react";

import { useReactFlow, Handle, Position } from "@xyflow/react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import addTopicSvg from '@/images/svgs/addTopic.svg';
import { NodeProps } from "@xyflow/react";

var ideas = [
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
]

function TopicListNode({ id, data }: NodeProps) {



    const reactFlow = useReactFlow();

    // useEffect(() => {
    //     reactFlow.setNodes((nodes) => { return nodes.filter((node) => node.type !== 'inputNode') });
    // }, []);

    const createTopicTextNode = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        reactFlow.addNodes({
            id: (reactFlow.getNodes().length + 1).toString(),
            data: { text: e.currentTarget.value },
            type: 'topicTextNode',
            position: { x: 100, y: 100 },
        })

        reactFlow.addEdges({
            id: `e${id}-${(reactFlow.getEdges().length + 1).toString()}`,
            source: id,
            target: (reactFlow.getNodes().length + 1).toString(),
            type: 'default',
        })
    }, [reactFlow]);

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{data.text}</CardTitle>
                    <CardDescription>Learn more about the individual topics</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col gap-1 items-start '>
                        {ideas.map((idea, index) => (
                            <Button variant={'outline'} className='justify-between w-full px-0 py-0 mt-1' onClick={createTopicTextNode} key={index} value={idea.fields.Title}>
                                <span className="px-4 py-2">{String(idea.fields.Title)}</span>
                                <div className="h-full px-2 py-2 ml-2 bg-gray-100 rounded-r-md">
                                    <img className="w-4 h-4 " src={addTopicSvg} />
                                </div>
                            </Button>

                        ))}
                    </div>
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Right} />
        </div>
    )
}

export default memo(TopicListNode);