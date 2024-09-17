import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [hasVisitedSummary, setHasVisitedSummary] = useState(false);

    const markSummaryAsVisited = () => setHasVisitedSummary(true);

    return (
        <NavigationContext.Provider value={{ hasVisitedSummary, markSummaryAsVisited }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    return useContext(NavigationContext);
}
