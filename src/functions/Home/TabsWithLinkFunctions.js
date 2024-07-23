import { Tab, Tabs } from '@mui/material';
import {
    MemoryRouter,
    Link,
    matchPath,
    useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import PropTypes from 'prop-types';
import { pages } from '../../app/objects';
import { useState } from 'react';

function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/drafts">{children}</StaticRouter>;
    }

    return (
        <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
            {children}
        </MemoryRouter>
    );
}

Router.propTypes = {
    children: PropTypes.node,
};

function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

export function MyTabs() {

    const routeMatch = useRouteMatch(
        (pages.map((page) => {
            return page.route;
        }))
    );

    const currentTab = routeMatch?.pattern?.path;

    return (
        <Tabs 
            value={currentTab}
            indicatorColor="primary">
            {
                pages.map((page, index) => (
                    <Tab
                        key={index}
                        label={page.name}
                        to={page.route}
                        component={Link}
                        sx={{ textTransform: "capitalize", color: "#444746" }}
                    />
                ))}
        </Tabs>
    );
}