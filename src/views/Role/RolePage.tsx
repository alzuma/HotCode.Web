import * as React from 'react';
import { RoleType, useRoleListQuery } from '../../generated/graphql';
import RecursiveTreeView, {RenderTree} from '../../components/tree-view/RecursiveTreeView';

const RolePage = () => {
    const { data, error, loading } = useRoleListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    if (!data.roles) {
        return <div>no roles</div>;
    }
    
    const rootRoleId = '00000000-0000-0000-0000-000000000000';

    const treeData:Array<RenderTree> = [];

    const addRoot = (role: RoleType) => {
        treeData.push({
            id: role.id,
            name: role.name,
            children: []
        })
    }

    /*
    'id': {
            parentId: string;
            role: RoleType   ;
        }

    * */

    data.roles.forEach(r => {
        if (r?.parentId == rootRoleId) {
            addRoot(r);
        }
    })



    return <RecursiveTreeView data={treeData} />;
};

export default RolePage;
