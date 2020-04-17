﻿import * as React from 'react';
import {RoleListQuery} from '../../generated/graphql';
import './styles.scss';
import {Link} from "react-router-dom";

interface Props {
    data: RoleListQuery;
}

const className = 'RoleList';

const RoleList: React.FC<Props> = ({data}) => (
    <div className={className}>
        <h3>Roles</h3>
        <ol className={`${className}__list`}>
            {!!data.roles &&
            data.roles.map(
                (role, i) =>
                    !!role && (
                        <Link to={`/${role.id}`}>
                            <li key={role.id} className={`${className}__item`}>
                                {role.id} ({role.name})
                            </li>
                        </Link>
                    ),
            )}
        </ol>
    </div>
);

export default RoleList;