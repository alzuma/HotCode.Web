import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {AssignmentReturn} from "@material-ui/icons";

export interface RenderTree {
    id: string;
    name: string;
    children?: RenderTree[];
}

// const data: Array<RenderTree> = [
//     {
//         id: 'root',
//         name: 'Parent',
//         children: [
//             {
//                 id: '1',
//                 name: 'Child - 1',
//             },
//             {
//                 id: '3',
//                 name: 'Child - 3',
//                 children: [
//                     {
//                         id: '4',
//                         name: 'Child - 4',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: "Procurement",
//         name: "Buy IT stuff and licences",
//         children: [
//             {
//                 id: 'IT stuff',
//                 name: 'Employee orders only'
//             }
//         ]
//     }
// ];

const useStyles = makeStyles({
    root: {
        height: 110,
        flexGrow: 1,
        maxWidth: 400,
    },
});

interface Props {
    data: Array<RenderTree>
}

const RecursiveTreeView: React.FC<Props> = ({data}) => {
    const classes = useStyles();

    const renderTree = (nodes: Array<RenderTree>) => (
        nodes.map(nodes => {
            return <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
                {Array.isArray(nodes.children)
                    ? renderTree(nodes.children)
                    : null}
            </TreeItem>
        })
    );

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon/>}
        >
            {renderTree(data)}
        </TreeView>
    );
};

export default RecursiveTreeView;