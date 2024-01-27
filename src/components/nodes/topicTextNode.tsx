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
            <Card>
                <CardContent>
                    <CardHeader>
                        <CardTitle>{data?.text}</CardTitle>
                    </CardHeader>
                    <CardDescription>

                    </CardDescription>
                </CardContent>
            </Card>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Left} />
        </div>
    );
}

export default memo(TopicTextNode);
