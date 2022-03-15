import React, { useState } from 'react';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2020, 2, 27),
        description: "Холодильник",
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2021, 11, 12),
        description: "MacBook",
        amount: 1254.72,
    },
    {
        id: 'c3',
        date: new Date(2021, 4, 3),
        description: "Jeans",
        amount: 49.99,
    }
];

const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addConstHandler = (cost) => {
        setCosts((prevCosts => {
            return [cost, ...prevCosts]
        }));
    }

    return (
        <div>
            <NewCost onAddCost={addConstHandler} />
            <Costs costs={costs} />


        </div >
    );
}

export default App;
