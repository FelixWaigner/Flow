import { memo } from "react";
import { Position, NodeProps, Handle } from "@xyflow/react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

function TopicTextNode({ id, data }: NodeProps) {

    return (
        <div>
            <Card className="max-w-96">
                <CardHeader>
                    <CardTitle>{data.text}</CardTitle>
                </CardHeader>
                <CardDescription>

                </CardDescription>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </CardContent>
            </Card>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Left} />
        </div>
    );
}

export default memo(TopicTextNode);
