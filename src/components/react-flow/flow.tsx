import { useCallback, useEffect, useState, createContext } from "react";

import {
    ReactFlowProvider,
    ReactFlow,
    Controls,
    addEdge,
    Connection,
    useNodesState,
    useEdgesState,
    MiniMap,
    Node,
    SelectionMode,
    Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import InputNode from "@/components/nodes/inputNode";
import TopicTextNode from "@/components/nodes/topicTextNode"
import TopicListNode from "@/components/nodes/topicListNode";


const initNodes: Node[] = [
    {
        id: '1',
        data: null,
        type: 'inputNode',
        position: { x: 0, y: 0 },
    },

];

const nodeTypes = {
    inputNode: InputNode,
    topicTextNode: TopicTextNode,
    topicListNode: TopicListNode,
};


const panOnDrag = [1, 2];

export const DraggingSelectionContext = createContext(false);


const Flow = () => {
    const [nodes, , onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const [isDragSelection, setIsDragSelection] = useState(false);


    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );


    return (
        <DraggingSelectionContext.Provider value={isDragSelection}>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView
                    panOnScroll
                    selectionOnDrag
                    panOnDrag={panOnDrag}
                    selectionMode={SelectionMode.Partial}
                    onSelectionStart={() => { setIsDragSelection(true) }}
                    onSelectionEnd={() => { setIsDragSelection(false) }}
                >
                    <MiniMap nodeStrokeWidth={3} pannable zoomable inversePan={true} />
                    <Controls />
                </ReactFlow>
            </ReactFlowProvider>
        </DraggingSelectionContext.Provider>
    )
}

export default Flow;
