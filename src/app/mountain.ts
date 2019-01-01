export class Mountain {
    // identifying information
    id: number;
    name: string;
    
    // location information
    lat: number;
    lng: number;
    city: string;
    state: string;
    
    // resort information
    totalRuns: number;
    totalLifts: number;
}

export enum MountainProperty {
    Name,
    TotalRuns,
    TotalLifts,
    State,
    City,
}

export module MountainUtils {

    export type MountainComparer = (a: Mountain, b: Mountain) => number;

    /**
     * Get a MountainComparer for the provided property.
     * 
     * @param mountainProperty the property to compare.
     * 
     * @returns a mountain comparer.
     */
    export function getComparer(mountainProperty: MountainProperty, ascending: boolean): MountainComparer {
        var comparer = getComparerInternal(mountainProperty);

        // The comparer is used to sort in ascending order, by default. Reverse its direction
        // if we want to sort in descending order.
        if (!ascending) {
            comparer = reverseComparerDirection(comparer);
        }

        return comparer;
    }

    /**
     * Lookup the comparer by MountainProperty. If the property cannot be resolved, the default
     * mountain comparer will be returned.
     * 
     * @param mountainProperty property used to lookup the comparer.
     * 
     * @return a comparer.
     */
    function getComparerInternal(mountainProperty: MountainProperty): MountainComparer {
        var comparer = comparerDict.get(mountainProperty);
        if (!comparer) {
            console.warn(`Property ${mountainProperty} was not found in the MountainComparer catalog.`);
            return getDefaultComparer();
        }
        return comparer;
    }

    /**
     * Map of MountainProperty values to MountainComparer instances.
     * TODO lazy init the comparers
     */
    const comparerDict = new Map<MountainProperty, MountainComparer>([
        [MountainProperty.Name, (a: Mountain, b: Mountain) => a.name.localeCompare(b.name)],
        [MountainProperty.State, (a: Mountain, b: Mountain) => a.state.localeCompare(b.state)],
        [MountainProperty.City, (a: Mountain, b: Mountain) => a.city.localeCompare(b.city)],
        [MountainProperty.TotalRuns, (a: Mountain, b: Mountain) => a.totalRuns - b .totalRuns],
        [MountainProperty.TotalLifts, (a: Mountain, b: Mountain) => a.totalLifts - b.totalLifts],
    ]);

    /**
     * Get default comparer which orders by mountain ID.
     * 
     * @return the default comparer.
     */
    function getDefaultComparer(): MountainComparer {
        return (a: Mountain, b: Mountain) => a.id - b.id;
    }

    /**
     * Reverse the direction of a MountainComparer.
     * 
     * @param comparer the comparer to reverse.
     * 
     * @return the reversed comparer.
     */
    function reverseComparerDirection(comparer: MountainComparer): MountainComparer {
        return (a: Mountain, b: Mountain) => -1 * comparer(a, b);
    }
}

