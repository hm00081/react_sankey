//CirclePacking_Diputados.js
import { withStyles } from '@material-ui/core';
import CirclePacking from '../src/components/ZoomCirclePacking/CirclePacking';

//@ts-ignore
const Chart = ({ classes }: any) => {
    return (
        <div className={classes.container}>
            <div>
                {' '}
                <h2 className={classes.subtitle}>Circle Packing Chart</h2>{' '}
            </div>
            <div className={classes.itemsContainer}>
                <div>
                    <div className={classes.chartContainer}>
                        <CirclePacking />
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = () => ({
    container: {
        position: 'relative',
        top: '-40px',
        //borderTop: '1px solid white',
    },
    /* Desktop */
    itemsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        //maxWidth: 1600,
        margin: 'auto',
        paddingTop: '100px',
        //borderLeft: '1px solid white',
        //borderRight: '1px solid white',
        paddingBottom: '60px',
    },
    map: {
        //height: '800px',
        //width: '40vw',
        height: '700px',
        width: '30vw',
        margin: 'auto',
        borderBottom: '1px solid white',
        borderLeft: '1px solid white',
        borderTop: '1px solid white',
        borderRight: '1px solid white',
    },
    chartContainer: {
        height: '500px',
        width: '500px',
        margin: 'auto',
        paddingTop: '-40px',
    },
    chartContainer2: {
        height: '700px',
        width: '700px',
        margin: 'auto',
        paddingTop: '150px',
    },
    districtName: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },
    munName: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: '50px',
        margin: 'auto',
        color: 'white',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: '50px',
        //paddingBottom: '50px',
        color: 'black',
        //borderBottom: '1px solid white',
        //borderLeft: '1px solid white',
        //borderTop: '1px solid white',
        //borderRight: '1px solid white',
    },
    subtitle2: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        //paddingTop: '50px',
        color: 'white',
    },
    prep: {
        color: 'white',
        textAlign: 'center',
    },
    /* Mobile */
    [`@media (max-width: ${1000}px)`]: {
        container: {
            position: 'relative',
            top: '-20px',
        },
        itemsContainer: {
            display: 'block',
            margin: 'auto',
        },
        map: {
            minHeight: '400px',
            height: '400px',
            width: '100vw',
        },
        chartContainer: {
            height: '550px',
            width: '100vw',
            flex: 1,
            margin: 'auto',
            //padding: '50px 10px',
        },
        subtitle: {
            fontSize: 20,
        },
    },
});

//@ts-ignore
export default withStyles(styles)(Chart);
