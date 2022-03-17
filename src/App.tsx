import FinalSankey from './FinalSankey';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from './components/WordCloud/Word';
import './sandbox-styles.css';

function App() {
    return (
        <>
            <FinalSankey />
            <ParentSize>{({ width, height }) => <Word width={width} height={height} />}</ParentSize>
        </>
    );
}

export default App;
