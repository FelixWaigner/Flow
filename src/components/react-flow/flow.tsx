import ReactFlow, {
    Controls,
    Background,
    MiniMap,
    useNodesState,
    useEdgesState,
    SelectionMode
} from 'reactflow';

import 'reactflow/dist/style.css';

import inputNode from "@/components/nodes/inputNode"

const initNodes = [
    {
        id: 'a',
        data: { label: 'input' },
        type: 'inputNode',
        position: { x: 0, y: 0 },
    },

];

const nodeTypes = { inputNode: inputNode };

const initEdges = [
    {
        id: 'a-b',
        source: 'a',
        target: 'b',
    },
];

const panOnDrag = [1, 2];


function Flow() {
    const [nodes, , onNodesChange] = useNodesState(initNodes);
    const [edges, , onEdgesChange] = useEdgesState(initEdges);

    return (
        <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            panOnScroll
            selectionOnDrag
            panOnDrag={panOnDrag}
            selectionMode={SelectionMode.Partial}
        >
            <Background />
            <Controls />
            <MiniMap />
        </ReactFlow>
    );
}

export default Flow;
