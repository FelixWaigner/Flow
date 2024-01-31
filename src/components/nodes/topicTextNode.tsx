import { memo, useEffect, useState } from "react";
import { Position, NodeProps, Handle, useReactFlow } from "@xyflow/react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

function TopicTextNode({ id, data }: NodeProps) {

    const [selectedText, setSelectedText] = useState<any>();

    const reactFlow = useReactFlow();

    const isNodeSelected = () => {
        return reactFlow.getNode(id)?.selected
    }

    const getSelectedText = () => {
        var text
        if (window.getSelection) {
            const selection = window.getSelection()?.toString();
            if (selection != undefined && selection != "") {
                text = selection;
                setSelectedText(text);
            }
        };
    }

    useEffect(() => {
        if (selectedText != undefined) {
            console.log(selectedText);
        }
    }, [selectedText]);

    return (
        <div onMouseUp={getSelectedText}>
            <Card className={"max-w-96 " + (isNodeSelected() ? "border-green-400" : "border-gray-50")}>
                <CardHeader>
                    <CardTitle ><span style={{ userSelect: "text" }} className={isNodeSelected() ? "nopan nodrag cursor-text" : ""}>{data.text}</span></CardTitle>
                </CardHeader>
                <CardDescription>

                </CardDescription>
                <CardContent>
                    <p style={{ userSelect: "text" }} className={isNodeSelected() ? "nopan nodrag cursor-text" : ""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </CardContent>
            </Card>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Left} />
        </div >
    );
}

export default memo(TopicTextNode);
