import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) =>{
    return (
        <div>
            <Sparklines height={120} width={180} data={temps}>
                <SparklinesLine color="red" />
            </Sparklines>
        </div>
    )
}
export default Chart;