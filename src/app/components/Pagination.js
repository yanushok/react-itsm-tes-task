import React from 'react';
import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';

const WrapperComponent = ({children}) => (
    <ul className="pagination">{children}</ul>
);

const Page = ({value, isActive, onClick}) => (
    <li className={isActive ? 'active' : null}><a onClick={onClick}>{value}</a></li>
);

const Ellipsis = ({onClick}) => (
    <li><a onClick={onClick}>...</a></li>
);

const FirstPageLink = ({isActive, onClick}) => (
    <li><a onClick={onClick}>&laquo;</a></li>
);

const PreviousPageLink = ({isActive, onClick}) => (
    <li><a onClick={onClick}>&lsaquo;</a></li>
);

const NextPageLink = ({isActive, onClick}) => (
    <li><a onClick={onClick}>&rsaquo;</a></li>
);

const LastPageLink = ({isActive, onClick}) => (
    <li><a onClick={onClick}>&raquo;</a></li>
);

const itemTypeToComponent = {
    [ITEM_TYPES.PAGE]: Page,
    [ITEM_TYPES.ELLIPSIS]: Ellipsis,
    [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
    [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
    [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
    [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

export default createUltimatePagination({ itemTypeToComponent, WrapperComponent });
