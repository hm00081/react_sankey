import FinalSankey from './FinalSankey';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from './components/WordCloud/Word';
import './sandbox-styles.css';
import withStyles from './FinalCirclePack';
import StackedBarChart from './components/BarChart/BarChart';

//@ts-ignore
const draw = <withStyles />;
//@ts-ignore
const barChart = <StackedBarChart />;

function App() {
    return (
        <>
            <FinalSankey />
            {/* <ParentSize>{({ width, height }) => <StackedBarChart width={width} height={height} />}</ParentSize> */}
            {/* {draw} */}
            {/* <ParentSize>{({ width, height }) => <Word width={width} height={height} />}</ParentSize> */}
        </>
    );
}

export default App;
