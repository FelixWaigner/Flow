import { memo, useContext, useEffect, useState } from "react";
import { Position, NodeProps, Handle, useReactFlow } from "@xyflow/react";
import { DraggingSelectionContext } from "@/components/react-flow/flow";

import { SelectionMenu } from "@/components/nodes/node utilities/selectionMenu";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

function TopicTextNode({ id, data }: NodeProps) {

    const isDraggingSelection = useContext(DraggingSelectionContext);

    const [selectedText, setSelectedText] = useState<any>();
    const [isDragging, setIsDragging] = useState(false);
    const [showSelectionMenu, setShowSelectionMenu] = useState(false);


    const reactFlow = useReactFlow();

    const isNodeSelected = () => {
        return reactFlow.getNode(id)?.selected
    }


    const getSelectedText = () => {
        if (window.getSelection) {
            const selection = window.getSelection()?.toString();
            if (selection && selection.trim() !== "") {
                setSelectedText(selection);
            } else {
                setSelectedText(""); // or null, depending on how you want to handle no selection
            }
        };
    }

    const testfunc = () => {
        var dragFinished = false;
        if (isDraggingSelection == false) {
            dragFinished = true;
        }
        else {
            dragFinished = false;
        }

        if (dragFinished == true && isNodeSelected() == true) {
            return true;
        }
        else {
            return false;
        }
    }

    // useEffect(() => {
    //     console.log(isDraggingSelection);
    // }, [isDraggingSelection]);

    useEffect(() => {
        if (!reactFlow.getNode(id)?.selected)
            setSelectedText("");
    })

    useEffect(() => {
        if (selectedText != undefined) {
            console.log(selectedText);
        }
    }, [selectedText]);

    return (
        <div onMouseUp={getSelectedText}>
            {selectedText && selectedText.length > 3 &&
                <div className="absolute p-2 -top-12 flex w-full align-middle rounded-lg bg-green-300">
                    <SelectionMenu />
                </div>
            }
            <Card className={"max-w-96 " + (isNodeSelected() ? "border-green-400" : "border-gray-50")}>
                <CardHeader>
                    <CardTitle ><span style={testfunc() ? { userSelect: "text" } : {}} className={testfunc() ? "nopan nodrag cursor-text" : ""}>{data.text}</span></CardTitle>
                </CardHeader>
                <CardDescription>

                </CardDescription>
                <CardContent>
                    <p style={testfunc() ? { userSelect: "text" } : { userSelect: "unset" }} className={testfunc() ? "nopan nodrag cursor-text" : ""}>
                        AI-driven ad creation using generative AI refers to the process of utilizing artificial intelligence to generate advertising content, such as images, videos, text, or complete ad layouts. This technology is transforming the advertising industry by offering new levels of creativity, efficiency, and personalization. AI-driven ad creation is still evolving, and as it becomes more sophisticated, it will likely play an increasingly central role in how digital advertising is produced and distributed. This technology offers the potential for more engaging, effective, and efficiently produced ads, although it also presents new challenges and considerations for marketers and advertisers.
                    </p>
                </CardContent>
            </Card>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Left} />
        </div >
    );
}

export default memo(TopicTextNode);
