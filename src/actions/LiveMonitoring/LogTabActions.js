import React from 'react';
import InformationDialog from '../../components/LiveMonitoring/Menu/InformationDialog';

export const NOTHING_SELECTED = "NOTHING_SELECTED"
export const SEARCH = {
    headline: "Search for:",
    iconName: "search",
    tooltip: "Search",
}

export const FILTER = {
    headline: "Filter by:",
    iconName: "filter_list",
    tooltip: "Filter"
}

export const INFO = {
    headline: "Loglevel Coloring:",
    iconName: "info",
    tooltip: "Show Legend",
    template: <InformationDialog />
}

export const CLEAR_ALL = {
    iconName: "delete",
    tooltip: "Clear all"
}